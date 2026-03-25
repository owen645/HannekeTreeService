import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Maximize2, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const PROJECTS = [
  { id: 1, category: 'tree-removal', title: 'Oak Removal', location: 'Kirkwood', src: 'https://hanneketreeservice.com/wp-content/uploads/2023/04/IMG_2992-scaled.jpeg' },
  { id: 2, category: 'tree-trimming', title: 'Crown Thinning', location: 'Webster Groves', src: 'https://hanneketreeservice.com/wp-content/uploads/2024/01/Untitled-design-12.png' },
  { id: 3, category: 'stump-grinding', title: 'Stump Elimination', location: 'Ladue', src: 'https://hanneketreeservice.com/wp-content/uploads/2023/12/stumpgrinding.png' },
  { id: 4, category: 'mulching', title: 'Spring Mulching', location: 'Affton', src: 'https://hanneketreeservice.com/wp-content/uploads/2023/12/mulch.png' },
  { id: 5, category: 'tree-removal', title: 'Storm Cleanup', location: 'Fenton', src: 'https://hanneketreeservice.com/wp-content/uploads/2024/01/Untitled-design-11.png' },
  { id: 6, category: 'tree-trimming', title: 'Hazardous Limb Removal', location: 'Ballwin', src: 'https://hanneketreeservice.com/wp-content/uploads/2024/01/Untitled-design-10.png' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tree-removal', name: 'Tree Removal' },
    { id: 'tree-trimming', name: 'Trimming' },
    { id: 'stump-grinding', name: 'Stump Grinding' },
    { id: 'mulching', name: 'Mulching' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="bg-steel-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 steel-mesh opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl text-white mb-4">OUR WORK SPEAKS VOLUMES</h1>
          <div className="h-1 w-32 bg-rust-orange mx-auto mb-8" />
          <div className="flex justify-center gap-12 text-sawdust-gold font-heading text-2xl">
            <div>500+ TREES</div>
            <div>200+ STUMPS</div>
            <div>ZERO SHORTCUTS</div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-morning-mist py-8 border-b border-bark-brown/10 sticky top-20 z-30 shadow-sm">
        <div className="container-custom flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "px-6 py-2 font-heading text-lg tracking-widest transition-all rounded-sm",
                filter === cat.id 
                  ? "bg-rust-orange text-white shadow-lg" 
                  : "bg-white text-iron-gray hover:bg-rust-orange/10"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-canopy-cream">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square bg-iron-gray rounded-sm overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => setSelectedImg(project.src)}
                >
                  <img 
                    src={project.src} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-steel-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="text-rust-orange mb-4" size={32} />
                    <h3 className="text-2xl text-white font-heading tracking-widest mb-2">{project.title}</h3>
                    <p className="text-sawdust-gold font-heading tracking-widest">{project.location}</p>
                    <span className="mt-4 text-xs text-morning-mist/60 uppercase tracking-[0.2em]">{project.category.replace('-', ' ')}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-steel-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-rust-orange transition-colors">
              <X size={48} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

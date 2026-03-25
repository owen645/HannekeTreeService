import React from 'react';
import { motion } from 'motion/react';
import { TreeDeciduous, Scissors, Shovel, Zap } from 'lucide-react';

const services = [
  {
    title: "Stump Grinding",
    description: "Need help getting rid of a stump on your property? In addition to being visually unappealing, stumps pose safety risks and can attract unwanted pests. Our team of stump specialists is highly skilled and equipped to handle stumps of any size or difficulty.",
    image: "https://hanneketreeservice.com/wp-content/uploads/2023/12/stumpgrinding.png",
    icon: <Zap size={24} className="text-accent" />
  },
  {
    title: "Tree Removal",
    description: "There are several factors that may necessitate the removal of a tree. Our team of professionals is skilled in conducting a thorough health analysis of your tree and determining the most appropriate methods for its safe removal. Give us a call today to get your free quote!",
    image: "https://hanneketreeservice.com/wp-content/uploads/2023/04/IMG_2992-scaled.jpeg",
    icon: <TreeDeciduous size={24} className="text-accent" />
  },
  {
    title: "Tree Trimming",
    description: "At Hanneke Tree Service, we recognize the significance of tree care and pruning in maintaining a beautiful home. Be it dead limb removal or meticulous pruning, our skilled team is fully prepared to manage the upkeep requirements for trees of varying sizes.",
    image: "https://hanneketreeservice.com/wp-content/uploads/2024/01/Untitled-design-12.png",
    icon: <Scissors size={24} className="text-accent" />
  },
  {
    title: "Mulching",
    description: "Mulch not only acts as a barrier against weeds but also retains moisture in your soil, ensuring your plants thrive. Our team specializes in providing and spreading high-quality mulch, giving your landscape a renewed and vibrant appearance year after year.",
    image: "https://hanneketreeservice.com/wp-content/uploads/2023/12/mulch.png",
    icon: <Shovel size={24} className="text-accent" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em] mb-4 block">
              01 • Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-ink leading-tight">
              Professional <br />
              <span className="text-primary italic font-normal">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-ink/60 text-lg leading-relaxed">
            Founded in 2005 by Matt Hanneke, our family-owned business evolved from landscaping to become experts in tree care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-ink/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

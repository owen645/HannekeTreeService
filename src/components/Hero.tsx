import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-ink">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="https://hanneketreeservice.com/wp-content/uploads/2024/01/DJI_0079_1.mp4" type="video/mp4" />
          <img 
            src="https://hanneketreeservice.com/wp-content/uploads/2023/12/Untitled-32.png" 
            alt="Tree Service Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-8">
            Established 2005
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-serif font-black text-white leading-[0.85] tracking-tighter uppercase mb-6"
        >
          Hanneke <br />
          <span className="text-accent italic font-normal lowercase tracking-normal">Tree Service</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12"
        >
          Providing expert tree care and landscaping services in the St. Louis area. 
          Honest, dependable, and family-owned for over 20 years.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="tel:3149609797"
            className="group relative flex items-center gap-3 bg-white text-ink px-10 py-5 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-14"
          >
            <Phone size={20} className="text-accent" />
            <span>(314) 960-9797</span>
            <div className="absolute right-6 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              <ChevronDown size={20} className="-rotate-90" />
            </div>
          </a>
          
          <a 
            href="#services"
            className="text-white/70 hover:text-white font-medium uppercase tracking-widest transition-colors border-b border-white/20 hover:border-white pb-1"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Side Label */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono">
          St. Louis • Kirkwood • Webster • Ladue
        </span>
      </div>
    </section>
  );
};

export default Hero;

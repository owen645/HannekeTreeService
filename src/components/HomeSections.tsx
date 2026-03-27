import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, ChevronDown, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, FAQS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://hanneketreeservice.com/wp-content/uploads/2023/12/Untitled-32.png"
        >
          <source src="https://hanneketreeservice.com/wp-content/uploads/2024/01/DJI_0079_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-steel-black via-steel-black/60 to-transparent" />
      </div>


      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-20 bg-rust-orange" />
            <span className="font-heading text-xl text-sawdust-gold tracking-[0.3em]">ESTABLISHED 2005</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading text-white leading-[0.85] mb-8 reveal-cut">
            HANNEKE <br />
            <span className="text-rust-orange">TREE SERVICE</span>
          </h1>
          
          <div className="mb-12 space-y-4">
            <p className="serif text-3xl md:text-4xl text-morning-mist italic">
              Where Steel Meets Timber
            </p>
            <p className="text-xl text-morning-mist/80 max-w-xl leading-relaxed">
              St. Louis's premier tree care specialists. Capturing the raw power of chainsaw steel meeting ancient oak for over 20 years.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link to="/contact" className="btn-primary flex items-center gap-3">
              GET FREE QUOTE <ArrowRight size={20} />
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-outline flex items-center gap-3">
              <Phone size={20} /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-sm tracking-widest">SCROLL TO EXPLORE</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export const ServicesPreview = () => {
  return (
    <section className="section-padding bg-steel-black relative overflow-hidden">
      <div className="absolute inset-0 steel-mesh opacity-20 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-white mb-4">THE ARSENAL</h2>
          <div className="h-1 w-24 bg-rust-orange mx-auto" />
          <p className="text-morning-mist/60 mt-6 max-w-2xl mx-auto text-lg">
            Professional-grade equipment paired with decades of expertise to handle any tree challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-iron-gray p-8 border border-white/5 hover:border-rust-orange/50 transition-all duration-500"
              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)' }}
            >
              <div className="mb-8 text-rust-orange group-hover:scale-110 transition-transform duration-500">
                {/* Placeholder for custom icons */}
                <div className="w-16 h-16 bg-steel-black flex items-center justify-center rounded-sm">
                  <TreePine size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl text-white mb-4 group-hover:text-rust-orange transition-colors">{service.title}</h3>
              <div className="h-[2px] w-12 bg-rust-orange mb-6" />
              <p className="text-morning-mist/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Link 
                to={`/services/${service.slug}`} 
                className="inline-flex items-center gap-2 text-sawdust-gold font-heading tracking-widest hover:gap-4 transition-all"
              >
                LEARN MORE <ArrowRight size={16} />
              </Link>

              {/* Hover Background Image Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <img 
                  src={service.image} 
                  alt="" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutPreview = () => {
  return (
    <section className="section-padding bg-canopy-cream relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-30 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 space-y-8">
            <div>
              <span className="font-heading text-xl text-rust-orange tracking-widest">SINCE 2005</span>
              <h2 className="text-5xl md:text-7xl text-steel-black mt-2 leading-none">
                FAMILY ROOTS. <br />
                <span className="text-bark-brown">IRONCLAD WORK.</span>
              </h2>
            </div>
            
            <p className="text-xl text-iron-gray/80 leading-relaxed">
              What started as a landscaping dream grew into St. Louis's most trusted tree care specialists. Founded by Matt Hanneke, our company is built on the values of honesty, hard work, and community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "20+ Years Experience",
                "Family Owned & Operated",
                "Fully Insured",
                "24/7 Emergency Service"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-pine-green rounded-full flex items-center justify-center text-white">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="font-bold text-steel-black">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-block">
              MEET THE TEAM
            </Link>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/tree-removal-stihl.png" 
                alt="Team at work" 
                className="w-full h-[480px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Ring Overlay */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[20px] border-rust-orange/10 rounded-full pointer-events-none" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-[10px] border-bark-brown/10 rounded-full pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-[150px] font-heading text-steel-black/5 select-none">2005</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GalleryPreview = () => {
  const images = [
    { src: "/images/tree-removal-crane.png", size: "large", title: "Tree Removal" },
    { src: "/images/tree-removal-log.png", size: "medium", title: "Log Processing" },
    { src: "https://hanneketreeservice.com/wp-content/uploads/2023/12/stumpgrinding.png", size: "small", title: "Stump Grinding" },
    { src: "/images/tree-removal-trunk.png", size: "small", title: "Precision Cutting" },
    { src: "/images/tree-removal-truck.png", size: "medium", title: "Equipment" },
  ];

  return (
    <section className="section-padding bg-steel-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl text-white">THE PROOF</h2>
            <p className="text-morning-mist/50 mt-4 max-w-xl">
              A visual legacy of precision, safety, and transformation across the St. Louis metropolitan area.
            </p>
          </div>
          <Link to="/projects" className="btn-outline">VIEW ALL PROJECTS</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative overflow-hidden group rounded-sm",
                img.size === 'large' ? "md:col-span-2 md:row-span-2 min-h-[400px]" : "aspect-square"
              )}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-steel-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="bg-rust-orange text-white text-xs font-heading px-3 py-1 tracking-widest uppercase">
                    {img.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQPreview = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="section-padding bg-canopy-cream">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl text-steel-black">QUICK ANSWERS</h2>
          <p className="serif italic text-2xl text-bark-brown mt-2">Common questions from our customers</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-bark-brown/20 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="text-2xl font-heading text-steel-black group-hover:text-rust-orange transition-colors">
                  {openIndex === i ? '⊖' : '⊕'} {faq.question}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="text-lg text-iron-gray/80 pb-4 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 font-heading text-xl tracking-widest text-rust-orange hover:text-chainsaw-orange transition-colors"
          >
            GOT MORE QUESTIONS? CONTACT US <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ContactPreview = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://hanneketreeservice.com/wp-content/uploads/2023/12/Untitled-33.png" 
          alt="Forest background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-steel-black/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-white mb-2">READY TO GET STARTED?</h2>
            <div className="h-1 w-20 bg-rust-orange mx-auto" />
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white/5 border border-white/20 text-white px-6 py-4 rounded-sm focus:outline-none focus:border-rust-orange transition-colors w-full"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="bg-white/5 border border-white/20 text-white px-6 py-4 rounded-sm focus:outline-none focus:border-rust-orange transition-colors w-full"
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows={4}
              className="bg-white/5 border border-white/20 text-white px-6 py-4 rounded-sm focus:outline-none focus:border-rust-orange transition-colors w-full"
            />
            <button className="btn-primary w-full py-5 text-2xl">SEND MESSAGE</button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-morning-mist/60 mb-4 uppercase tracking-widest text-sm">OR CALL DIRECTLY</p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl md:text-4xl font-heading text-rust-orange hover:text-sawdust-gold transition-colors">
              📞 {BUSINESS_INFO.phone}
            </a>
            <p className="text-morning-mist/40 mt-2">24 Hour Emergency Service Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="section-padding bg-morning-mist relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-20 pointer-events-none" />
      <div className="container-custom text-center">
        <h2 className="text-5xl text-steel-black mb-4">WHAT PEOPLE ARE SAYING</h2>
        <div className="h-1 w-24 bg-rust-orange mx-auto mb-8" />
        <p className="serif italic text-2xl text-bark-brown mb-12">
          Trusted by homeowners across the St. Louis area since 2005.
        </p>
        <a
          href="https://www.google.com/search?q=Hanneke+Tree+Service+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3"
        >
          READ OUR GOOGLE REVIEWS
        </a>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '@/src/constants';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-steel-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sawdust-gold font-heading tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={20} /> BACK TO SERVICES
          </Link>
          <h1 className="text-6xl md:text-9xl text-white mb-6">{service.title}</h1>
          <p className="text-2xl text-morning-mist/90 max-w-2xl serif italic leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-canopy-cream">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl text-steel-black">PROFESSIONAL {service.title}</h2>
                <p className="text-xl text-iron-gray/80 leading-relaxed">
                  At Hanneke Tree Service, we combine state-of-the-art equipment with decades of hands-on experience to provide the highest quality {service.title.toLowerCase()} in the St. Louis area. Our team is trained in the latest safety protocols and arboricultural techniques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-rust-orange">
                  <h4 className="text-2xl mb-4">WHY CHOOSE US</h4>
                  <ul className="space-y-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-pine-green shrink-0 mt-1" size={20} />
                        <span className="text-iron-gray/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-iron-gray p-8 rounded-sm shadow-lg text-white">
                  <h4 className="text-2xl mb-4 text-sawdust-gold">OUR PROCESS</h4>
                  <ol className="space-y-4 list-decimal list-inside opacity-80">
                    <li>Initial On-Site Assessment</li>
                    <li>Detailed Quote & Planning</li>
                    <li>Safe Execution of Work</li>
                    <li>Thorough Site Cleanup</li>
                  </ol>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl">EQUIPMENT & SAFETY</h3>
                <p className="text-lg text-iron-gray/70 leading-relaxed">
                  We use professional-grade machinery specifically designed for {service.title.toLowerCase()}. Our equipment is regularly maintained to ensure peak performance and safety. Every job site is managed by an experienced foreman to ensure all protocols are followed.
                </p>
                <img 
                  src={service.image} 
                  alt={`${service.title} equipment`} 
                  className="w-full h-80 object-cover rounded-sm shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-steel-black p-10 rounded-sm text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none wood-texture" />
                  <h3 className="text-3xl mb-6 relative z-10">GET A FREE QUOTE</h3>
                  <p className="text-morning-mist/60 mb-8 relative z-10">
                    Ready to transform your landscape? Contact us today for a no-obligation estimate.
                  </p>
                  <Link to="/contact" className="btn-primary w-full block text-center mb-6 relative z-10">
                    REQUEST QUOTE
                  </Link>
                  <div className="text-center relative z-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-morning-mist/40 mb-2">OR CALL DIRECTLY</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-heading text-rust-orange hover:text-sawdust-gold transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-morning-mist p-8 rounded-sm border border-bark-brown/10">
                  <h4 className="text-xl mb-4">OTHER SERVICES</h4>
                  <ul className="space-y-3">
                    {SERVICES.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`} className="flex items-center justify-between group hover:text-rust-orange transition-colors">
                          {s.title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

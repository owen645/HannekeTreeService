import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '@/src/constants';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://hanneketreeservice.com/wp-content/uploads/2023/12/Untitled-32.png" 
            alt="Services background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-steel-black/70" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl text-white mb-4">OUR SERVICES</h1>
          <div className="h-1 w-32 bg-rust-orange mx-auto mb-8" />
          <p className="text-2xl text-morning-mist/80 serif italic">Professional Care for Every Canopy</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-canopy-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-sm overflow-hidden shadow-xl border-b-8 border-iron-gray hover:border-rust-orange transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-steel-black/20 group-hover:bg-steel-black/0 transition-colors" />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl text-steel-black mb-4">{service.title}</h3>
                  <p className="text-lg text-iron-gray/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-bark-brown">
                        <div className="w-2 h-2 bg-rust-orange rotate-45" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    LEARN MORE <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-steel-black text-white relative overflow-hidden">
        <div className="absolute inset-0 steel-mesh opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-4">WHY CHOOSE HANNEKE?</h2>
            <div className="h-1 w-24 bg-rust-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-rust-orange/20 rounded-full flex items-center justify-center mx-auto text-rust-orange">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-2xl">FULLY INSURED</h4>
              <p className="text-morning-mist/60 leading-relaxed">
                We carry comprehensive liability and workers' compensation insurance to protect your property and our team.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-rust-orange/20 rounded-full flex items-center justify-center mx-auto text-rust-orange">
                <Clock size={40} />
              </div>
              <h4 className="text-2xl">24/7 EMERGENCY</h4>
              <p className="text-morning-mist/60 leading-relaxed">
                Storm damage doesn't wait for business hours. We're available around the clock for urgent tree hazards.
              </p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-rust-orange/20 rounded-full flex items-center justify-center mx-auto text-rust-orange">
                <MapPin size={40} />
              </div>
              <h4 className="text-2xl">LOCAL EXPERTISE</h4>
              <p className="text-morning-mist/60 leading-relaxed">
                Serving St. Louis since 2005, we understand the local climate and native tree species better than anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-rust-orange py-12">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-2">NEED EMERGENCY SERVICE?</h2>
            <p className="text-xl opacity-90">Available 24/7 for storm damage and hazardous removals.</p>
          </div>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-rust-orange px-10 py-4 font-heading text-2xl tracking-widest hover:bg-morning-mist transition-colors">
            CALL (314) 960-9797
          </a>
        </div>
      </section>
    </motion.div>
  );
}

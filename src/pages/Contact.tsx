import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Send } from 'lucide-react';
import { BUSINESS_INFO } from '@/src/constants';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Hero */}
      <section className="bg-steel-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl text-white mb-4">LET'S TALK TREES</h1>
          <div className="h-1 w-32 bg-rust-orange mx-auto mb-8" />
          <p className="text-2xl text-morning-mist/80 serif italic">Get your free quote or ask us anything</p>
        </div>
      </section>

      <section className="section-padding bg-canopy-cream">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border-t-8 border-rust-orange">
                <h2 className="text-4xl text-steel-black mb-10">REQUEST A FREE QUOTE</h2>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Full Name</label>
                      <input type="text" className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Phone Number</label>
                      <input type="tel" className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl" placeholder="(314) 000-0000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Email Address</label>
                      <input type="email" className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Service Needed</label>
                      <select className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl bg-transparent">
                        <option>Tree Removal</option>
                        <option>Tree Trimming</option>
                        <option>Stump Grinding</option>
                        <option>Mulching</option>
                        <option>Emergency Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Property Address</label>
                    <input type="text" className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl" placeholder="123 Maple St, St. Louis, MO" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading text-sm tracking-widest text-iron-gray/60 uppercase">Project Details</label>
                    <textarea rows={4} className="w-full border-b-2 border-morning-mist focus:border-rust-orange py-3 outline-none transition-colors text-xl resize-none" placeholder="Tell us about your trees..." />
                  </div>
                  <button className="btn-primary w-full flex items-center justify-center gap-4 py-5 text-2xl">
                    SEND REQUEST <Send size={24} />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-2/5 space-y-12">
              <div className="space-y-8">
                <h3 className="text-4xl text-steel-black">DIRECT CONTACT</h3>
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-rust-orange/10 rounded-full flex items-center justify-center text-rust-orange group-hover:bg-rust-orange group-hover:text-white transition-all duration-500">
                      <Phone size={32} />
                    </div>
                    <div>
                      <p className="font-heading text-sm tracking-widest text-iron-gray/40 uppercase mb-1">Call or Text</p>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-heading text-steel-black hover:text-rust-orange transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-sm text-leaf-red font-bold mt-1">24/7 Emergency Service Available</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-rust-orange/10 rounded-full flex items-center justify-center text-rust-orange group-hover:bg-rust-orange group-hover:text-white transition-all duration-500">
                      <Mail size={32} />
                    </div>
                    <div>
                      <p className="font-heading text-sm tracking-widest text-iron-gray/40 uppercase mb-1">Email Us</p>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-2xl font-heading text-steel-black hover:text-rust-orange transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-rust-orange/10 rounded-full flex items-center justify-center text-rust-orange group-hover:bg-rust-orange group-hover:text-white transition-all duration-500">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <p className="font-heading text-sm tracking-widest text-iron-gray/40 uppercase mb-1">Main Office</p>
                      <p className="text-xl font-bold text-steel-black">{BUSINESS_INFO.office}</p>
                      <p className="text-iron-gray/60">St. Louis, MO 63128</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-rust-orange/10 rounded-full flex items-center justify-center text-rust-orange group-hover:bg-rust-orange group-hover:text-white transition-all duration-500">
                      <Clock size={32} />
                    </div>
                    <div>
                      <p className="font-heading text-sm tracking-widest text-iron-gray/40 uppercase mb-1">Operating Hours</p>
                      <p className="text-xl font-bold text-steel-black">Mon - Sat: 7am - 7pm</p>
                      <p className="text-iron-gray/60">Sunday: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-iron-gray rounded-sm text-white">
                <h4 className="text-2xl mb-4 text-sawdust-gold">FOLLOW OUR WORK</h4>
                <p className="text-morning-mist/60 mb-6">See our latest projects and storm updates on Facebook.</p>
                <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white hover:text-rust-orange transition-colors font-heading text-xl tracking-widest">
                  <Facebook size={24} /> VISIT OUR PAGE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-iron-gray relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white/20">
          <div className="text-center">
            <MapPin size={100} className="mx-auto mb-4 opacity-10" />
            <p className="font-heading text-4xl tracking-[0.2em]">ST. LOUIS SERVICE AREA</p>
          </div>
        </div>
        {/* In a real app, embed Google Maps here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202674.5504285743!2d-90.5342416!3d38.6531004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39767365e7a8!2sSt.%20Louis%2C%20MO!5e0!3m2!1sen!2sus!4v1711380000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </motion.div>
  );
}

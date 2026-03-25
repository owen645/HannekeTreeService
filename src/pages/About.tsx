import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Heart, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/src/constants';

export default function AboutPage() {
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
            src="https://hanneketreeservice.com/wp-content/uploads/2023/04/DSC04122-scaled.jpeg" 
            alt="About Hanneke" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-steel-black/70" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl text-white mb-4">THE HANNEKE STORY</h1>
          <div className="h-1 w-32 bg-rust-orange mx-auto mb-8" />
          <p className="text-2xl text-morning-mist/80 serif italic">Rooted in St. Louis, Built on Trust</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-canopy-cream relative">
        <div className="absolute inset-0 wood-texture opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl text-steel-black">A LEGACY OF CARE</h2>
              <p className="text-xl text-iron-gray/80 leading-relaxed">
                Founded in 2005 by Matt Hanneke, Hanneke Tree Service began with a single truck and a commitment to providing honest, professional tree care. Over the past two decades, we've grown into one of the most respected names in the St. Louis metropolitan area.
              </p>
              <p className="text-lg text-iron-gray/70 leading-relaxed">
                We believe that every tree tells a story, and our job is to ensure that story continues safely and beautifully. Whether it's preserving a century-old oak or safely removing a hazardous limb, we bring the same level of mechanical precision and organic respect to every project.
              </p>
              
              <div className="flex items-center gap-6 p-6 bg-white rounded-sm shadow-xl border-l-4 border-rust-orange">
                <div className="bg-rust-orange/10 p-4 rounded-full text-rust-orange">
                  <Award size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">20+ YEARS OF EXCELLENCE</h4>
                  <p className="text-sm opacity-60">Serving St. Louis families since 2005</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://hanneketreeservice.com/wp-content/uploads/2023/04/IMG_2992-scaled.jpeg" 
                  alt="Matt Hanneke" 
                  className="rounded-sm shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-steel-black text-white p-8 rounded-sm shadow-2xl">
                  <p className="font-heading text-3xl text-rust-orange">MATT HANNEKE</p>
                  <p className="text-sm uppercase tracking-widest opacity-60">Founder & Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-steel-black text-white relative">
        <div className="absolute inset-0 steel-mesh opacity-10 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-4">OUR CORE VALUES</h2>
            <div className="h-1 w-24 bg-rust-orange mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "HONESTY", desc: "Transparent pricing and honest assessments. We only recommend what's truly needed." },
              { icon: Users, title: "COMMUNITY", desc: "We're your neighbors. We care about the safety and beauty of our St. Louis streets." },
              { icon: Heart, title: "HARD WORK", desc: "We don't leave until the job is done right and the site is perfectly clean." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto text-rust-orange group-hover:bg-rust-orange group-hover:text-white transition-all duration-500">
                  <value.icon size={48} />
                </div>
                <h4 className="text-3xl tracking-widest">{value.title}</h4>
                <p className="text-morning-mist/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="bg-white p-12 rounded-sm shadow-2xl border-t-8 border-rust-orange">
                <h2 className="text-4xl text-steel-black mb-8">WHERE WE WORK</h2>
                <div className="grid grid-cols-2 gap-4">
                  {BUSINESS_INFO.serviceArea.map((area, i) => (
                    <div key={i} className="flex items-center gap-3 text-iron-gray/80">
                      <MapPin size={16} className="text-rust-orange" />
                      <span className="font-bold">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-morning-mist">
                  <p className="text-iron-gray/60 italic">Don't see your area? Give us a call—we often travel for larger projects.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-4xl">CERTIFIED & INSURED</h3>
              <p className="text-xl text-iron-gray/70 leading-relaxed">
                Your peace of mind is our priority. Hanneke Tree Service is fully licensed and insured, meeting all state and local requirements for professional tree care.
              </p>
              <div className="space-y-4">
                {[
                  "General Liability Insurance",
                  "Workers' Compensation",
                  "Licensed St. Louis Contractor",
                  "Safety Certified Crew"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-pine-green" size={24} />
                    <span className="text-lg font-bold text-steel-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

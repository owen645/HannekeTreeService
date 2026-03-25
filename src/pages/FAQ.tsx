import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, Minus, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS } from '@/src/constants';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-6xl md:text-8xl text-white mb-6">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="h-1 w-32 bg-rust-orange mx-auto mb-12" />
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-morning-mist/40" size={24} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white pl-16 pr-6 py-5 rounded-sm focus:outline-none focus:border-rust-orange transition-colors text-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-canopy-cream">
        <div className="container-custom max-w-4xl">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-6">
              {filteredFaqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-sm shadow-md overflow-hidden border border-bark-brown/5">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <span className="text-2xl font-heading text-steel-black group-hover:text-rust-orange transition-colors">
                      {faq.question}
                    </span>
                    <div className="text-rust-orange">
                      {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-lg text-iron-gray/70 leading-relaxed border-t border-morning-mist">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-iron-gray/50 italic">No questions found matching your search.</p>
            </div>
          )}

          <div className="mt-20 bg-iron-gray p-12 rounded-sm text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 wood-texture opacity-10 pointer-events-none" />
            <MessageSquare className="mx-auto mb-6 text-sawdust-gold" size={48} />
            <h3 className="text-4xl mb-4">STILL HAVE QUESTIONS?</h3>
            <p className="text-morning-mist/60 mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Our team is ready to help with any specific inquiries about your tree care needs.
            </p>
            <Link to="/contact" className="btn-primary">
              CONTACT US DIRECTLY
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

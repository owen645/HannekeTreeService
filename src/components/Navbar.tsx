import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://hanneketreeservice.com/wp-content/uploads/2023/12/Hanneke.png" 
            alt="Hanneke Tree Service" 
            className={`h-12 w-auto transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent ${
                isScrolled ? 'text-ink' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:3149609797"
            className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            <Phone size={16} />
            (314) 960-9797
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-ink' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif italic text-ink border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="tel:3149609797"
                className="flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-lg font-bold uppercase tracking-widest"
              >
                <Phone size={18} />
                Call Now
              </a>
              <div className="flex justify-center gap-6 pt-2">
                <a href="https://www.facebook.com/profile.php?id=100063540852464" className="text-primary hover:text-accent transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="mailto:matthanneke@gmail.com" className="text-primary hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

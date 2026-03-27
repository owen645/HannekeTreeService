import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { BUSINESS_INFO, SERVICES } from '@/src/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-steel-black py-3 shadow-2xl border-b border-rust-orange/30" : "bg-steel-black/80 backdrop-blur-sm py-5"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-rust-orange p-2 rounded-sm transform group-hover:rotate-12 transition-transform">
            <TreePine className="text-white w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl leading-none text-white tracking-tighter">HANNEKE</span>
            <span className="font-heading text-sm text-sawdust-gold tracking-[0.2em]">TREE SERVICE</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.name === 'Services' ? (
              <div key="services" className="relative group">
                <Link
                  to="/services"
                  className={cn(
                    "font-heading text-lg tracking-widest text-white/80 hover:text-rust-orange transition-colors relative flex items-center gap-1",
                    location.pathname.startsWith('/services') && "text-rust-orange"
                  )}
                >
                  Services
                  <svg className="w-3 h-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </Link>
                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-52 bg-steel-black border border-rust-orange/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-5 py-3 font-heading text-sm tracking-widest text-white/70 hover:text-rust-orange hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-heading text-lg tracking-widest text-white/80 hover:text-rust-orange transition-colors relative group",
                  location.pathname === link.path && "text-rust-orange"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-rust-orange transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            )
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-lg">
            FREE QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-steel-black z-40 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none wood-texture" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl text-white hover:text-rust-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-4"
            >
              FREE QUOTE
            </Link>
            <div className="flex items-center gap-2 text-sawdust-gold font-heading text-xl">
              <Phone size={20} />
              {BUSINESS_INFO.phone}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-steel-black text-morning-mist pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none wood-texture" />
      
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <TreePine className="text-rust-orange w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-heading text-3xl leading-none text-white">HANNEKE</span>
              <span className="font-heading text-sm text-sawdust-gold tracking-[0.2em]">TREE SERVICE</span>
            </div>
          </Link>
          <p className="text-morning-mist/70 leading-relaxed">
            St. Louis's most trusted tree care specialists since 2005. Family owned, ironclad work, and a legacy of professional service.
          </p>
          <div className="flex gap-4">
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="bg-iron-gray p-3 rounded-sm hover:bg-rust-orange transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8 border-b border-rust-orange/30 pb-2 inline-block">Services</h4>
          <ul className="space-y-4">
            {SERVICES.map(service => (
              <li key={service.id}>
                <Link to={`/services/${service.slug}`} className="hover:text-rust-orange transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8 border-b border-rust-orange/30 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-rust-orange transition-colors">About Our Legacy</Link></li>
            <li><Link to="/projects" className="hover:text-rust-orange transition-colors">Past Projects</Link></li>
            <li><Link to="/contact" className="hover:text-rust-orange transition-colors">Get A Free Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl mb-8 border-b border-rust-orange/30 pb-2 inline-block">Contact</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <Phone className="text-rust-orange shrink-0" />
              <div>
                <p className="font-bold text-white">{BUSINESS_INFO.phone}</p>
                <p className="text-sm opacity-60">24/7 Emergency Service</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="text-rust-orange shrink-0">📍</div>
              <div>
                <p className="text-sm">{BUSINESS_INFO.office}</p>
                <p className="text-sm opacity-60">St. Louis, MO</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/10 flex items-center justify-center text-sm opacity-50">
        <p>© {new Date().getFullYear()} Hanneke Tree Service. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

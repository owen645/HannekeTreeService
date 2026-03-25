import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TreePine, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-steel-black text-white p-6"
    >
      <div className="absolute inset-0 wood-texture opacity-10 pointer-events-none" />
      <div className="text-center relative z-10">
        <div className="bg-rust-orange p-6 rounded-sm inline-block mb-8 rotate-12">
          <TreePine size={64} />
        </div>
        <h1 className="text-9xl font-heading mb-4">404</h1>
        <h2 className="text-4xl font-heading text-sawdust-gold mb-8">TIMBER! PAGE NOT FOUND</h2>
        <p className="text-xl text-morning-mist/60 max-w-md mx-auto mb-12">
          It looks like the page you're looking for has been cleared. Let's get you back to the forest.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-3">
          <ArrowLeft size={20} /> BACK TO HOME
        </Link>
      </div>
    </motion.div>
  );
}

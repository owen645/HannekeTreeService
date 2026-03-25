import React from 'react';
import { Hero, ServicesPreview, AboutPreview, GalleryPreview, FAQPreview, ContactPreview, Testimonials } from '@/src/components/HomeSections';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <ContactPreview />
    </motion.div>
  );
}

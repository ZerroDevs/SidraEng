"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';

export default function Projects() {
  const t = useTranslations('Projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const projects = [
    "/assets/Works/portfolio2-1.jpg",
    "/assets/Works/portfolio6-1.jpg",
    "/assets/Works/portfolio7-1.jpg",
    "/assets/Works/portfolio9-1.jpg",
    "/assets/Works/portfolio10-1.jpg",
    "/assets/Works/personal_gift-1.jpg",
    "/assets/images/tabahee/portfolio3-1-600x600.jpg",
    "/assets/images/tabahee/tick_tock-1-1-600x600.jpg"
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#090D16]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] dark:text-white mb-4">
              {t('title')}
            </h2>
            <div className="w-24 h-1.5 bg-[#D97706] mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 md:pb-0 px-4 -mx-4 lg:px-0 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((src, index) => (
            <motion.div 
              key={index}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer min-w-[75%] sm:min-w-[40%] md:min-w-0 snap-center shrink-0"
            >
              <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-[#D97706]/40 group-active:bg-[#D97706]/40 transition-colors duration-300 z-10 opacity-0 group-hover:opacity-100 group-active:opacity-100 mix-blend-overlay" />
              <Image 
                src={src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={projects}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}

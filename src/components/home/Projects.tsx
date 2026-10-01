"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from '@/components/ui/Lightbox';
import { Building2, HardHat, Droplet, PlaneTakeoff, Flame, Zap, Plane, Building, Droplets, PlaneLanding, ArrowRight, Grid, Briefcase } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function Projects() {
  const t = useTranslations('Projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const projects = [
    { src: "/assets/projects/project_housing_1790878217415.jpg", Icon: Building2 }, // 1. Housing 1000
    { src: "/assets/projects/project_infrastructure_1790878227198.jpg", Icon: HardHat }, // 2. Infrastructure
    { src: "/assets/projects/project_water_tanks_1790878237749.jpg", Icon: Droplet }, // 3. Water Tanks
    { src: "/assets/projects/project_airport_runway_1790878261978.jpg", Icon: PlaneTakeoff }, // 4. Tripoli Airport
    { src: "/assets/projects/project_gas_pipeline_1790878273081.jpg", Icon: Flame }, // 5. Gas Pipeline
    { src: "/assets/projects/project_power_line_1790878283861.jpg", Icon: Zap }, // 6. Power Line
    { src: "/assets/projects/project_field_airport_1790878308370.jpg", Icon: Plane }, // 7. Al-Samah Airport
    { src: "/assets/projects/project_commercial_complex_1790878318323.jpg", Icon: Building }, // 8. Commercial Complex
    { src: "/assets/projects/infrastructure_1790878097977.jpg", Icon: Droplets }, // 9. Pumping System (Reused)
    { src: "/assets/projects/project_airport_runway_1790878261978.jpg", Icon: PlaneLanding }, // 10. Al-Wafa (Reused)
    { src: "/assets/projects/project_field_airport_1790878308370.jpg", Icon: Plane } // 11. El Sharara (Reused)
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
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer min-w-[75%] sm:min-w-[40%] md:min-w-0 snap-center shrink-0"
            >
              <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-[#0F172A]/80 transition-colors duration-300 z-10 opacity-0 group-hover:opacity-100 mix-blend-normal flex flex-col items-center justify-center p-6 text-center">
                <project.Icon className="w-10 h-10 text-[#D97706] mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {t(`items.${index}.title`)}
                </h3>
              </div>
              <Image 
                src={project.src}
                alt={t(`items.${index}.title`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}

          {/* Call to action tile for the 12th slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 11 * 0.1 }}
            className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-[#121721] border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col justify-center items-center gap-6 group hover:border-[#D97706] hover:bg-[#D97706]/5 transition-all duration-300 snap-center shrink-0 min-w-[75%] sm:min-w-[40%] md:min-w-0"
          >
            <Link href="/projects" className="flex items-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-md shadow-[#D97706]/20">
              <Grid size={20} />
              {t('viewAllProjects')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
            <div className="w-16 h-px bg-gray-200 dark:bg-gray-800" />
            <Link href="/services" className="flex items-center gap-3 bg-white dark:bg-[#121721] border-2 border-[#0F172A] dark:border-gray-600 text-[#0F172A] dark:text-white hover:border-[#D97706] hover:text-[#D97706] px-6 py-3 rounded-lg font-bold transition-all hover:scale-105">
              <Briefcase size={20} />
              {t('viewAllServices')}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </motion.div>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={projects.map(p => p.src)}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}

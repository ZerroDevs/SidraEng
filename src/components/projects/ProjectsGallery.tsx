"use client";

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';
import { useTranslations } from 'next-intl';
import { Building2, HardHat, Droplet, PlaneTakeoff, Flame, Zap, Plane, Building, Droplets, PlaneLanding } from 'lucide-react';

export default function ProjectsGallery() {
  const t = useTranslations('Projects');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const projectsList = [
    { src: "/assets/projects/project_housing_1790878217415.jpg", Icon: Building2 },
    { src: "/assets/projects/project_infrastructure_1790878227198.jpg", Icon: HardHat },
    { src: "/assets/projects/project_water_tanks_1790878237749.jpg", Icon: Droplet },
    { src: "/assets/projects/project_airport_runway_1790878261978.jpg", Icon: PlaneTakeoff },
    { src: "/assets/projects/project_gas_pipeline_1790878273081.jpg", Icon: Flame },
    { src: "/assets/projects/project_power_line_1790878283861.jpg", Icon: Zap },
    { src: "/assets/projects/project_field_airport_1790878308370.jpg", Icon: Plane },
    { src: "/assets/projects/project_commercial_complex_1790878318323.jpg", Icon: Building },
    { src: "/assets/projects/infrastructure_1790878097977.jpg", Icon: Droplets },
    { src: "/assets/projects/project_airport_runway_1790878261978.jpg", Icon: PlaneLanding },
    { src: "/assets/projects/project_field_airport_1790878308370.jpg", Icon: Plane }
  ];

  return (
    <>
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-8 md:pb-0 px-4 -mx-4 lg:px-0 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {projectsList.map((project, idx) => (
          <div 
            key={idx} 
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[75%] sm:min-w-[40%] md:min-w-0 snap-center shrink-0"
          >
            <Image
              src={project.src}
              alt={t(`items.${idx}.title`)}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-sidra-charcoal/90 via-sidra-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 flex flex-col">
                <project.Icon className="w-8 h-8 text-sidra-amber mb-3" />
                <h3 className="text-sidra-white text-lg font-bold leading-tight">{t(`items.${idx}.title`)}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={projectsList.map(p => p.src)}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

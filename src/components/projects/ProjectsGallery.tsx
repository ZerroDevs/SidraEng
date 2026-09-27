"use client";

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/ui/Lightbox';

interface ProjectsGalleryProps {
  projects: string[];
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-8 md:pb-0 px-4 -mx-4 lg:px-0 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {projects.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[75%] sm:min-w-[40%] md:min-w-0 snap-center shrink-0"
          >
            <Image
              src={img}
              alt={`Project ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-sidra-charcoal/90 via-sidra-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-sidra-amber text-sidra-white text-xs font-bold rounded-full mb-3">
                  SIDRA
                </span>
                <h3 className="text-sidra-white text-lg font-bold">Project #{idx + 1}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={projects}
        initialIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

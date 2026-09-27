"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ isOpen, images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <>
              {/* LTR Prev / RTL Next */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 rtl:hidden"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden rtl:flex"
              >
                <ChevronRight size={32} />
              </button>

              {/* LTR Next / RTL Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 rtl:hidden"
              >
                <ChevronRight size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden rtl:flex"
              >
                <ChevronLeft size={32} />
              </button>
            </>
          )}

          <div 
            className="relative w-full max-w-6xl h-[70vh] md:h-[85vh] px-4 md:px-20 flex flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  if (Math.abs(swipe) > 50) {
                    const isRTL = document.documentElement.dir === 'rtl';
                    if (swipe < 0) {
                      if (isRTL) {
                        handlePrev();
                      } else {
                        handleNext();
                      }
                    } else {
                      if (isRTL) {
                        handleNext();
                      } else {
                        handlePrev();
                      }
                    }
                  }
                }}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Project Image ${currentIndex + 1}`}
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-[-40px] md:bottom-2 left-0 right-0 text-center text-white/70 font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

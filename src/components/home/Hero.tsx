"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F8FAFC] dark:bg-[#0B0F17] overflow-hidden pt-20 lg:pt-0">
      {/* Light/Pale Geometric Backdrop (Behind) */}
      <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-full lg:w-[60%] h-full bg-[#E58A1F]/20 dark:bg-[#E58A1F]/10 clip-path-hero-light z-0 hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center h-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pt-10 pb-16 lg:py-0 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E58A1F]/10 dark:bg-[#E58A1F]/20 text-[#D97706] font-bold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              SIDRA Engineering & Construction
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0F172A] dark:text-white leading-[1.1] mb-6">
              {t('title')}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg shadow-[#D97706]/30"
              >
                {t('startProject')}
                <ArrowRight size={20} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Right Content - Model Image */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[90vh] flex items-end justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2 },
              x: { duration: 1, delay: 0.2, type: "spring", bounce: 0.2 },
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.2
              }
            }}
            className="relative w-full h-full max-w-lg lg:max-w-none lg:w-full lg:h-[110%] lg:-translate-x-40 rtl:lg:translate-x-40"
          >
            {/* Mobile background (since clip-path is hidden on mobile) */}
            <div className="absolute inset-0 bg-[#E58A1F] rounded-t-full lg:hidden z-0 scale-95 origin-bottom" />
            
            <Image
              src="/assets/model/man-model.png"
              alt="Engineering Professional"
              fill
              priority
              className="object-contain object-bottom z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] rtl:scale-x-[-1]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
        
      </div>
      
      {/* Amber Geometric Backdrop (Front) - Layered OVER the model's shoulder */}
      <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto w-full lg:w-[32%] h-full bg-[#ECA13A] dark:bg-[#D97706] clip-path-hero-main z-20 pointer-events-none hidden lg:block" />

      <style jsx global>{`
        .clip-path-hero-light {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
        [dir="rtl"] .clip-path-hero-light {
          clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
        }
        .clip-path-hero-main {
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
        }
        [dir="rtl"] .clip-path-hero-main {
          clip-path: polygon(0 0, 75% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
}

"use client";

import { useTranslations } from 'next-intl';
import { Building2, Pickaxe, HardHat, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';

export default function Services() {
  const t = useTranslations('Services');
  const commonT = useTranslations('Common');

  const services = [
    {
      icon: Building2,
      title: t('civil'),
      isHighlight: false,
      delay: 0.1
    },
    {
      icon: Pickaxe,
      title: t('road'),
      isHighlight: true,
      delay: 0.2
    },
    {
      icon: HardHat,
      title: t('management'),
      isHighlight: false,
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-gray-50 dark:text-gray-900/50 whitespace-nowrap z-0 pointer-events-none select-none opacity-50">
        SIDRA ENG
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 px-2 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className={clsx(
                  "p-10 rounded-2xl flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center shrink-0",
                  service.isHighlight 
                    ? "bg-[#D97706] text-white shadow-xl shadow-[#D97706]/20 scale-105 z-10" 
                    : "bg-gray-50 dark:bg-[#121721] text-[#0F172A] dark:text-white border border-gray-100 dark:border-gray-800 hover:shadow-xl"
                )}
              >
                <div className={clsx(
                  "w-20 h-20 rounded-full flex items-center justify-center mb-6",
                  service.isHighlight ? "bg-white/20" : "bg-[#D97706]/10 text-[#D97706]"
                )}>
                  <Icon size={40} className={service.isHighlight ? "text-white" : "text-[#D97706]"} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">
                  {service.title}
                </h3>
                
                <Link 
                  href="/services" 
                  className={clsx(
                    "mt-auto flex items-center gap-2 font-bold group",
                    service.isHighlight ? "text-white" : "text-[#D97706]"
                  )}
                >
                  {commonT('readMore')}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

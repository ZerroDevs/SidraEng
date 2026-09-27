"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Target, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Highlights() {
  const t = useTranslations('Highlights');

  const highlights = [
    { icon: Target, title: t('precision'), delay: 0.1 },
    { icon: Truck, title: t('machinery'), delay: 0.2 },
    { icon: ShieldCheck, title: t('hse'), delay: 0.3 }
  ];

  return (
    <section className="bg-sidra-charcoal py-16 relative z-20 -mt-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl shadow-2xl border border-border-silver/20 dark:border-sidra-charcoal-border overflow-hidden">
      {/* Background Banner */}
      <Image 
        src="/assets/banner/image.png"
        alt="Background Pattern"
        fill
        className="object-cover opacity-50 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-sidra-charcoal/70" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x md:rtl:divide-x-reverse divide-border-silver/20 dark:divide-sidra-charcoal-border">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="flex items-center gap-6 pt-8 md:pt-0 first:pt-0 md:px-8"
              >
                <div className="w-16 h-16 rounded-full bg-sidra-amber/10 flex items-center justify-center shrink-0">
                  <Icon size={32} className="text-sidra-amber" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sidra-white mb-2">{item.title}</h3>
                  <div className="w-12 h-1 bg-sidra-amber rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

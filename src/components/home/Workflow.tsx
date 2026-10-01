"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Workflow() {
  const t = useTranslations('Workflow');

  const steps = [
    { num: '01', title: t('step1') },
    { num: '02', title: t('step2') },
    { num: '03', title: t('step3') }
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[#E58A1F]/20 mix-blend-overlay z-10" />
            <Image 
              src="/assets/images/tabahee/process.jpg"
              alt="Construction Process"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Steps */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                {t('title')}
              </h2>
              <div className="w-20 h-1.5 bg-[#D97706] rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0">
                    <div className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-[#0F172A] group-hover:from-[#D97706] group-hover:to-[#B45309] transition-all duration-500 select-none">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-2 lg:pt-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D97706] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

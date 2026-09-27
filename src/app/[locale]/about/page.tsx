import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('Navigation');
  const t = await getTranslations('AboutPage');
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Page Header */}
      <div className="pt-32 pb-20 bg-sidra-charcoal text-center relative overflow-hidden">
        <Image 
          src="/assets/banner/image.png"
          alt="Banner"
          fill
          priority
          className="object-cover opacity-50 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-sidra-charcoal/50 dark:bg-sidra-charcoal/70" />
        <div className="absolute inset-0 bg-sidra-amber/5 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-black text-sidra-white relative z-10">{tNav('about')}</h1>
        <div className="w-24 h-1 bg-sidra-amber mx-auto mt-6 rounded-full relative z-10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <Image 
              src="/assets/Works/portfolio10-1.jpg" 
              alt="About SIDRA" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sidra-charcoal/80 to-transparent flex items-end p-8">
              <div className="text-sidra-white border-l-4 rtl:border-r-4 rtl:border-l-0 border-sidra-amber pl-4 rtl:pr-4">
                <p className="text-2xl font-bold">{t('title')}</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl lg:text-4xl font-black text-content-primary">
              {t('title')}
            </h2>
            <p className="text-lg text-content-secondary leading-relaxed">
              {t('description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              {/* Mission */}
              <div className="bg-surface-card p-6 rounded-xl border border-border-base shadow-sm hover:border-sidra-amber transition-colors">
                <div className="w-12 h-12 bg-sidra-amber-soft rounded-lg flex items-center justify-center mb-4">
                  <Target size={24} className="text-sidra-amber-hover dark:text-sidra-amber" />
                </div>
                <h3 className="text-xl font-bold text-content-primary mb-2">{t('missionTitle')}</h3>
                <p className="text-content-secondary leading-relaxed">
                  {t('missionDesc')}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-surface-card p-6 rounded-xl border border-border-base shadow-sm hover:border-sidra-amber transition-colors">
                <div className="w-12 h-12 bg-sidra-amber-soft rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb size={24} className="text-sidra-amber-hover dark:text-sidra-amber" />
                </div>
                <h3 className="text-xl font-bold text-content-primary mb-2">{t('visionTitle')}</h3>
                <p className="text-content-secondary leading-relaxed">
                  {t('visionDesc')}
                </p>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="bg-sidra-charcoal p-8 rounded-xl mt-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-sidra-amber rounded-lg">
                  <ShieldCheck size={28} className="text-sidra-white" />
                </div>
                <h3 className="text-2xl font-bold text-sidra-white">{t('valuesTitle')}</h3>
              </div>
              <p className="text-content-secondary dark:text-content-secondary leading-relaxed text-lg">
                {t('valuesDesc')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import { Compass, Microscope, Building2, Waves, Plane, Droplets, Zap, Building, Palmtree, Trophy, Wrench } from 'lucide-react';

export default async function ServicesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('Navigation');
  const t = await getTranslations('ServicesPage');
  
  const services = [
    { id: 1, icon: Compass, img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" }, // Engineering
    { id: 2, icon: Microscope, img: "/assets/Works/portfolio6-1.jpg" }, // Geotechnical
    { id: 3, icon: Building2, img: "/assets/Works/portfolio2-1.jpg" }, // Concrete
    { id: 4, icon: Waves, img: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800" }, // Dams
    { id: 5, icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" }, // Airports
    { id: 6, icon: Droplets, img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800" }, // Oil Fields
    { id: 7, icon: Zap, img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" }, // Electromechanical
    { id: 8, icon: Building, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }, // Towers
    { id: 9, icon: Palmtree, img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800" }, // Resorts
    { id: 10, icon: Trophy, img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800" }, // Stadiums
    { id: 11, icon: Wrench, img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" } // Metal Structures
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background-subtle dark:bg-background">
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
        <h1 className="text-4xl md:text-5xl font-black text-sidra-white relative z-10">{tNav('services')}</h1>
        <div className="w-24 h-1 bg-sidra-amber mx-auto mt-6 rounded-full relative z-10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-content-primary mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-content-secondary leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 px-4 -mx-4 lg:px-0 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-surface-card rounded-2xl overflow-hidden shadow-lg border border-border-base hover:shadow-2xl hover:border-sidra-amber/30 active:shadow-2xl active:border-sidra-amber/30 transition-all duration-300 group min-w-[85%] sm:min-w-[320px] md:min-w-0 snap-center shrink-0">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-sidra-charcoal/20 group-hover:bg-transparent group-active:bg-transparent transition-colors z-10" />
                  <Image 
                    src={service.img} 
                    alt={t(`items.${index}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-4 right-4 rtl:left-4 rtl:right-auto z-20 bg-surface-card p-4 rounded-xl shadow-lg transform translate-y-16 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300">
                    <Icon size={24} className="text-sidra-amber-hover dark:text-sidra-amber" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-content-primary mb-4">
                    {t(`items.${index}.title`)}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">
                    {t(`items.${index}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

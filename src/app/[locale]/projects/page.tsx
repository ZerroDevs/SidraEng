import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import ProjectsGallery from '@/components/projects/ProjectsGallery';

export default async function ProjectsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('Navigation');
  const t = await getTranslations('ProjectsPage');
  
  const projects = [
    "/assets/Works/portfolio2-1.jpg",
    "/assets/Works/portfolio6-1.jpg",
    "/assets/Works/portfolio7-1.jpg",
    "/assets/Works/portfolio9-1.jpg",
    "/assets/Works/portfolio10-1.jpg",
    "/assets/Works/personal_gift-1.jpg",
    "/assets/images/tabahee/portfolio3-1-600x600.jpg",
    "/assets/images/tabahee/tick_tock-1-1-600x600.jpg",
    "/assets/Works/portfolio7-1.jpg" // Using one duplicate to make it a nice 9 grid, or 8 works too. Let's stick to 8.
  ];

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
        <h1 className="text-4xl md:text-5xl font-black text-sidra-white relative z-10">{tNav('projects')}</h1>
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

        <ProjectsGallery projects={projects.slice(0, 8)} />
      </div>
    </div>
  );
}

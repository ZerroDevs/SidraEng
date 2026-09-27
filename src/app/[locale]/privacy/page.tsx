import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function PrivacyPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Privacy');
  
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
        <h1 className="text-4xl md:text-5xl font-black text-sidra-white relative z-10">{t('title')}</h1>
        <div className="w-24 h-1 bg-sidra-amber mx-auto mt-6 rounded-full relative z-10" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 max-w-4xl">
        <div className="prose dark:prose-invert max-w-none text-content-secondary space-y-6">
          <p className="text-lg">
            {t('description')}
          </p>
          
          <h2 className="text-2xl font-bold text-content-primary mt-8">{t('section1Title')}</h2>
          <p>
            {t('section1Desc')}
          </p>

          <h2 className="text-2xl font-bold text-content-primary mt-8">{t('section2Title')}</h2>
          <p>
            {t('section2Desc')}
          </p>
          <ul className="list-disc pl-6 space-y-2 rtl:pr-6 rtl:pl-0">
            <li>{t('section2List1')}</li>
            <li>{t('section2List2')}</li>
            <li>{t('section2List3')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-content-primary mt-8">{t('section3Title')}</h2>
          <p>
            {t('section3Desc')}
          </p>

          <h2 className="text-2xl font-bold text-content-primary mt-8">{t('section4Title')}</h2>
          <p>
            {t('section4Desc')}
          </p>

          <h2 className="text-2xl font-bold text-content-primary mt-8">{t('section5Title')}</h2>
          <p>
            {t('section5Desc')} <a href="mailto:info@sidraeng.ly" className="text-sidra-amber hover:underline" dir="ltr">info@sidraeng.ly</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit, Alexandria, Geist_Mono } from 'next/font/google';
import '../globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

import { Toaster } from 'react-hot-toast';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  const title = isAr ? 'شركة سدرة للهندسة والمقاولات' : 'SIDRA Engineering & Construction Company';
  const description = isAr 
    ? 'شركة سدرة للهندسة والمقاولات تقدم التميز في كل مشروع، وتضع معايير جديدة في الجودة والسلامة.' 
    : 'SIDRA Engineering & Construction Company delivers excellence in every project, setting new standards in quality and safety.';
    
  return {
    title,
    description,
    metadataBase: new URL('https://sidraeng.ly'),
    openGraph: {
      title,
      description,
      url: `https://sidraeng.ly/${locale}`,
      siteName: isAr ? 'سدرة للهندسة' : 'SIDRA Engineering',
      images: [
        {
          url: '/assets/images/logo-bg.jpeg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'ar' ? 'ar_LY' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/logo-bg.jpeg'],
    },
    icons: {
      apple: '/assets/images/logo-bg.ico',
      icon: '/assets/images/logo-bg.ico',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  if (!(routing.locales as unknown as string[]).includes(locale)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const messages = await getMessages();

  const isAr = locale === 'ar';

  return (
    <html 
      lang={locale} 
      dir={isAr ? 'rtl' : 'ltr'} 
      suppressHydrationWarning 
      className={`${plusJakartaSans.variable} ${outfit.variable} ${alexandria.variable} ${geistMono.variable}`}
    >
      <head />
      <body className={isAr ? 'font-arabic' : 'font-sans'}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Toaster position="bottom-center" />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

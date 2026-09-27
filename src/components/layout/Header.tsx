"use client";

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, Home, Info, Phone, Globe, MapPin, Wrench, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';


export default function Header() {
  const t = useTranslations('Navigation');
  const headerT = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('about'), icon: Info },
    { href: '/services', label: t('services'), icon: Wrench },
    { href: '/projects', label: t('projects'), icon: Briefcase },
    { href: '/contact', label: t('contact'), icon: Phone }
  ];


  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#0F172A] text-white/90 text-sm py-2 px-4 hidden lg:block border-b border-gray-800 relative z-[60]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} className="text-[#D97706]" />
              <span>{headerT('location')}</span>
            </div>
          </div>
          <div className="flex items-center gap-6" dir="ltr">
            <a href="https://wa.me/218924295050" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Phone size={14} className="text-[#D97706]" />
              <span>+218 92 429 5050</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
            <a href="https://wa.me/218916141616" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Phone size={14} className="text-[#D97706]" />
              <span>+218 91 614 1616</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
            <a href="https://wa.me/218922117555" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
              <Phone size={14} className="text-[#D97706]" />
              <span>+218 92 211 7555</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={clsx(
        "fixed w-full z-50 transition-all duration-500 border-b",
        isScrolled ? "top-0 bg-white/90 dark:bg-[#0B0F17]/90 backdrop-blur-xl shadow-md border-gray-200 dark:border-gray-800" : "top-0 lg:top-[36px] bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-md border-transparent"
      )}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/assets/images/logo-nobg.png" 
                alt="SIDRA Logo" 
                width={200} 
                height={60} 
                className="object-contain h-12 lg:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={clsx(
                    "font-semibold text-base transition-colors",
                    pathname === link.href 
                      ? "text-[#D97706]" 
                      : "text-gray-800 dark:text-gray-200 hover:text-[#D97706] dark:hover:text-[#D97706]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle isTransparent={false} />
              <button 
                onClick={switchLocale}
                className="font-semibold text-sm border-2 border-gray-300 dark:border-gray-700 px-3 py-1.5 rounded-md hover:border-[#D97706] hover:text-[#D97706] transition-colors"
              >
                {locale === 'en' ? 'عربي' : 'EN'}
              </button>
              <Link 
                href="/contact"
                className="bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-2.5 rounded-md font-bold transition-colors shadow-sm"
              >
                {t('freeConsultation')}
              </Link>
            </div>

            {/* Mobile Actions Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle isTransparent={false} />
              <button 
                className="p-2 text-gray-800 dark:text-gray-200"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-sm z-[9998]"
            />
            <motion.div 
              initial={{ x: locale === 'ar' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: locale === 'ar' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 start-0 w-[85%] max-w-sm bg-white dark:bg-[#0F172A] shadow-2xl z-[9999] flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
                <Image 
                  src="/assets/images/logo-nobg.png" 
                  alt="Logo" 
                  width={150} 
                  height={50} 
                  className="h-10 w-auto" 
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col p-6 gap-2 overflow-y-auto flex-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={clsx(
                        "text-lg font-bold py-3 px-4 rounded-xl flex items-center gap-4 transition-colors",
                        isActive 
                          ? "bg-[#D97706]/10 text-[#D97706]" 
                          : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={20} className={isActive ? "text-[#D97706]" : "text-gray-500"} />
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-4">
                <Link 
                  href="/contact"
                  className="w-full py-3 rounded-lg bg-[#D97706] text-white font-bold text-center hover:bg-[#B45309] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('freeConsultation')}
                </Link>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      switchLocale();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2"
                  >
                    <Globe size={18} />
                    {locale === 'en' ? 'العربية' : 'English'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

const WhatsAppIcon = ({ className = "w-5 h-5 text-current" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

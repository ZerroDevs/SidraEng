import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const commonT = useTranslations('Common');
  const navT = useTranslations('Navigation');
  const footerT = useTranslations('Footer');

  const navLinks = [
    { href: '/', label: navT('home') },
    { href: '/about', label: navT('about') },
    { href: '/services', label: navT('services') },
    { href: '/projects', label: navT('projects') },
    { href: '/contact', label: navT('contact') }
  ];

  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16 pb-8 border-t-4 border-[#D97706]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Bio */}
          <div className="space-y-6">
            <div className="inline-block mb-4 relative">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 blur-2xl rounded-full pointer-events-none" />
              <Image 
                src="/assets/images/logo-nobg.png" 
                alt="SIDRA Logo" 
                width={200} 
                height={70} 
                className="h-14 w-auto object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {footerT('bio')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-800 pb-3">{commonT('quickLinks')}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
                    <ChevronRight size={16} className="rtl:rotate-180 text-[#D97706]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-800 pb-3">{commonT('contactWithUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#D97706] shrink-0 mt-1" />
                <span>{footerT('officeLocation')}:<br/>Ain Zara - Tripoli, Libya<br/>عين زارة - طرابلس، ليبيا</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#D97706] shrink-0" />
                <a href="mailto:info@sidraeng.ly" className="hover:text-[#D97706] transition-colors">info@sidraeng.ly</a>
              </li>
            </ul>
          </div>

          {/* Phone Numbers */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-gray-800 pb-3">{commonT('callUs')}</h3>
            <ul className="space-y-3" dir="ltr">
              <li>
                <div className="flex items-center gap-3">
                  <a href="https://wa.me/218924295050" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D97706] transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                    <Phone size={18} className="text-[#D97706]" />
                    <span className="font-mono text-sm">+218 92 429 5050</span>
                  </a>
                  <a href="https://wa.me/218924295050" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform">
                    <WhatsAppIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <a href="https://wa.me/218916141616" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D97706] transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                    <Phone size={18} className="text-[#D97706]" />
                    <span className="font-mono text-sm">+218 91 614 1616</span>
                  </a>
                  <a href="https://wa.me/218916141616" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform">
                    <WhatsAppIcon />
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <a href="https://wa.me/218922117555" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D97706] transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                    <Phone size={18} className="text-[#D97706]" />
                    <span className="font-mono text-sm">+218 92 211 7555</span>
                  </a>
                  <a href="https://wa.me/218922117555" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform">
                    <WhatsAppIcon />
                  </a>
                </div>
              </li>
              <li>
                <a href="tel:+218915520267" className="flex items-center gap-3 hover:text-[#D97706] transition-colors p-2 rounded-lg hover:bg-gray-800/50">
                  <Phone size={18} className="text-gray-500" />
                  <span className="font-mono text-sm">+218 91 552 0267</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 {commonT('brandName')}. {commonT('allRightsReserved')}</p>
          <p>
            Developed by <a href="https://api.whatsapp.com/send/?phone=218916808225" target="_blank" rel="noreferrer" className="text-[#D97706] hover:underline font-bold">ZeroNux Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

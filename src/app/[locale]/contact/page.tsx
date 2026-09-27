import {setRequestLocale, getTranslations} from 'next-intl/server';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

import ContactForm from '@/components/contact/ContactForm';
import AnimatedCompass from '@/components/contact/AnimatedCompass';

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');
  const tNav = await getTranslations('Navigation');
  const tCommon = await getTranslations('Common');
  const tQuote = await getTranslations('Quote');
  const tPrivacy = await getTranslations('Privacy');

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F8F9FA] dark:bg-[#0B132B]">
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
        <h1 className="text-4xl md:text-5xl font-black text-sidra-white relative z-10">{tNav('contact')}</h1>
        <div className="w-24 h-1 bg-sidra-amber mx-auto mt-6 rounded-full relative z-10" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info (Left) */}
          <div className="w-full lg:w-1/3 bg-[#0F172A] text-white p-10 flex flex-col relative overflow-hidden">
            <AnimatedCompass />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-[#D97706] mb-8">{t('title')}</h2>
            </div>
            
            <div className="space-y-8 flex-1 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-[#D97706] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">{t('locationLabel')}</h3>
                  <p className="font-medium" dir="ltr">{t('locationValue')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-[#D97706] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">{t('emailLabel')}</h3>
                  <a href="mailto:info@sidraeng.ly" className="font-medium hover:text-[#D97706] transition-colors" dir="ltr">
                    info@sidraeng.ly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-[#D97706] shrink-0">
                  <Phone size={24} />
                </div>
                <div className="w-full">
                  <h3 className="text-gray-400 text-sm mb-2">{t('phoneLabel')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span dir="ltr" className="font-medium">+218 92 429 5050</span>
                      <a href="https://wa.me/218924295050" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" title="WhatsApp" aria-label="Contact via WhatsApp">
                        <WhatsAppIcon />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span dir="ltr" className="font-medium">+218 91 614 1616</span>
                      <a href="https://wa.me/218916141616" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" title="WhatsApp" aria-label="Contact via WhatsApp">
                        <WhatsAppIcon />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span dir="ltr" className="font-medium">+218 92 211 7555</span>
                      <a href="https://wa.me/218922117555" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" title="WhatsApp" aria-label="Contact via WhatsApp">
                        <WhatsAppIcon />
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span dir="ltr" className="font-medium">+218 91 552 0267</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="w-full lg:w-2/3 p-10 lg:p-16 bg-white dark:bg-[#0B0F17] transition-colors">
            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-8">{tCommon('contactWithUs')}</h2>
            <ContactForm tDict={{
              formName: t('formName'),
              formEmail: t('formEmail'),
              formPhone: t('formPhone'),
              formSubject: t('formSubject'),
              formMessage: t('formMessage'),
              formNamePlaceholder: t('formNamePlaceholder'),
              formEmailPlaceholder: t('formEmailPlaceholder'),
              formPhonePlaceholder: t('formPhonePlaceholder'),
              formSubjectPlaceholder: t('formSubjectPlaceholder'),
              formMessagePlaceholder: t('formMessagePlaceholder'),
              formAgreeCheck: t('formAgreeCheck'),
              privacyPolicyLabel: tPrivacy('privacyPolicyLabel'),
              formService: tQuote('formService'),
              send: tCommon('send')
            }} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

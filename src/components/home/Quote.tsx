"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShieldCheck, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from '@/i18n/routing';

export default function Quote() {
  const t = useTranslations('Quote');
  const tPrivacy = useTranslations('Privacy');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Civil & Structural Construction',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    if (!formData.agree) {
      toast.error('Please agree to the privacy policy.');
      return;
    }

    // Construct Mailto Link
    const mailtoLink = `mailto:info@sidraeng.ly?subject=${encodeURIComponent(formData.subject || `New Quote Request: ${formData.service}`)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success toast
    toast.success('Quote Request Prepared! Check your email client.', {
      duration: 5000,
      position: 'bottom-center',
      style: {
        background: '#0F172A',
        color: '#fff',
        border: '1px solid #D97706',
      }
    });
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
          
          {/* Left Form Panel (Amber) */}
          <div className="w-full lg:w-3/5 bg-[#D97706] p-8 lg:p-16 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-black mb-8">
                {t('title')}
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/90" htmlFor="name">{t('formName')}</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                      placeholder={t('formName')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/90" htmlFor="email">{t('formEmail')}</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                      placeholder={t('formEmail')}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/90" htmlFor="service">{t('formService')}</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white transition-all [&>option]:text-black"
                  >
                    <option value="Civil & Structural Construction">Civil & Structural Construction</option>
                    <option value="Road & Infrastructure Engineering">Road & Infrastructure Engineering</option>
                    <option value="Project Management & Supervision">Project Management & Supervision</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/90" htmlFor="subject">{t('formSubject')}</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    placeholder={t('formSubject')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/90" htmlFor="message">{t('formMessage')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white transition-all resize-none"
                    placeholder={t('formMessage')}
                    required
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input 
                    type="checkbox" 
                    name="agree"
                    id="agreeTerms" 
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-sidra-charcoal bg-white/20 border-white/30 rounded focus:ring-white cursor-pointer"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-white/80 cursor-pointer select-none leading-relaxed">
                    {t('agreeTerms')} <Link href="/privacy" target="_blank" className="underline hover:text-white transition-colors">{tPrivacy('privacyPolicyLabel')}</Link>.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="bg-white text-sidra-amber hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto mt-2"
                >
                  {t('formSubmit')}
                  <Send size={18} className="rtl:-scale-x-100" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Assurance Panel (Dark) */}
          <div className="w-full lg:w-2/5 bg-[#0F172A] p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={200} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E58A1F]/10 flex items-center justify-center mb-8">
                <ShieldCheck size={32} className="text-[#E58A1F]" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                {t('assurance')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E58A1F]/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E58A1F]" />
                  </div>
                  <span className="text-gray-300 font-semibold">100% Quality Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E58A1F]/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E58A1F]" />
                  </div>
                  <span className="text-gray-300 font-semibold">Expert Engineering Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E58A1F]/20 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E58A1F]" />
                  </div>
                  <span className="text-gray-300 font-semibold">On-Time Project Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

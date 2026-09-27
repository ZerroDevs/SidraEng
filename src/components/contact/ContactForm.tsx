"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from '@/i18n/routing';

interface ContactFormProps {
  tDict: Record<string, string>;
}

export default function ContactForm({ tDict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Civil & Structural Construction',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
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
    const mailtoLink = `mailto:info@sidraeng.ly?subject=${encodeURIComponent(formData.subject || `New Contact Inquiry: ${formData.service}`)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Requested: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success toast
    toast.success('Message Prepared! Check your email client.', {
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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formName}</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={tDict.formNamePlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white placeholder-content-secondary" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formEmail}</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={tDict.formEmailPlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white placeholder-content-secondary" 
            required 
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formService}</label>
        <select 
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white [&>option]:text-black"
        >
          <option value="Civil & Structural Construction">Civil & Structural Construction</option>
          <option value="Road & Infrastructure Engineering">Road & Infrastructure Engineering</option>
          <option value="Project Management & Supervision">Project Management & Supervision</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formPhone}</label>
          <input 
            type="text" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={tDict.formPhonePlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white placeholder-content-secondary" 
            dir="ltr" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formSubject}</label>
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={tDict.formSubjectPlaceholder} 
            className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white placeholder-content-secondary" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{tDict.formMessage}</label>
        <textarea 
          name="message"
          rows={5} 
          value={formData.message}
          onChange={handleChange}
          placeholder={tDict.formMessagePlaceholder} 
          className="w-full px-4 py-3 bg-gray-50 dark:bg-background-subtle border border-border-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sidra-amber focus:border-transparent transition-all dark:text-white resize-none placeholder-content-secondary"
          required
        ></textarea>
      </div>

      <div className="flex items-start gap-3 mt-4">
        <input 
          type="checkbox" 
          name="agree"
          id="agreeTerms" 
          checked={formData.agree}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-sidra-amber bg-gray-100 border-gray-300 rounded focus:ring-sidra-amber dark:bg-sidra-charcoal dark:border-gray-600 cursor-pointer"
        />
        <label htmlFor="agreeTerms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none leading-relaxed">
          {tDict.formAgreeCheck} <Link href="/privacy" target="_blank" className="text-sidra-amber hover:underline ml-1">{tDict.privacyPolicyLabel}</Link>
        </label>
      </div>

      <button type="submit" className="bg-sidra-charcoal hover:bg-sidra-amber text-sidra-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full md:w-auto min-w-[200px] mt-6">
        {tDict.send}
      </button>
    </form>
  );
}

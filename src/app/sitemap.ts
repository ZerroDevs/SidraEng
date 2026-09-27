import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

// TODO: Replace with your actual production domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sidraeng.ly';

export default function sitemap(): MetadataRoute.Sitemap {
  // Define all the core pages of the application
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/privacy',
  ];

  // Map each route to a Sitemap entry, including multi-language alternate links
  return routes.map((route) => ({
    // Using English as the default base URL for the sitemap entry
    url: `${baseUrl}/en${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
    
    // Crucial for SEO: telling Google about the Arabic and English versions
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${baseUrl}/${locale}${route}`
        ])
      ),
    },
  }));
}

import type { MetadataRoute } from 'next';

import { locales } from '@/i18n/request';
import { vehicles } from '@/data/vehicles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rentacarvenezia.it';
  const routes = [
    '',
    '/fleet',
    '/book',
    '/book/confirmation',
    '/locations',
    '/faq',
    '/terms',
    '/guide',
    '/contact',
    '/privacy',
    '/cookies',
  ];

  const localeRoutes = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  const vehicleRoutes = locales.flatMap((locale) =>
    vehicles.map((vehicle) => ({
      url: `${baseUrl}/${locale}/fleet/${vehicle.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...localeRoutes, ...vehicleRoutes];
}

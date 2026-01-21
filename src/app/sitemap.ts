import type { MetadataRoute } from 'next';

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

  const localeRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const vehicleRoutes = vehicles.map((vehicle) => ({
    url: `${baseUrl}/fleet/${vehicle.slug}`,
    lastModified: new Date(),
  }));

  return [...localeRoutes, ...vehicleRoutes];
}

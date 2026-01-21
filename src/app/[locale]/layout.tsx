import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsappFab } from '@/components/whatsapp-fab';
import { locales } from '@/i18n/request';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = locales.includes(params.locale as (typeof locales)[number])
    ? params.locale
    : 'en';
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    metadataBase: new URL('https://rentacarvenezia.it'),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        it: '/it',
        ro: '/ro',
        ru: '/ru',
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: `https://rentacarvenezia.it/${locale}`,
      siteName: 'rentacarvenezia.it',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as (typeof locales)[number])) {
    notFound();
  }
  const messages = useMessages();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'rentacarvenezia.it',
    telephone: '+39 344 506 8823',
    email: 'info@rentacarvenezia.it',
    areaServed: ['Treviso', 'Venice', 'Venice Marco Polo Airport'],
    url: 'https://rentacarvenezia.it',
    sameAs: ['https://instagram.com/', 'https://facebook.com/', 'https://linkedin.com/'],
  };

  return (
    <html lang={params.locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <div className="min-h-screen bg-background font-sans text-foreground">
            <Header />
            {children}
            <Footer />
            <WhatsappFab />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {/* TODO: Add GA4 analytics integration for production. */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

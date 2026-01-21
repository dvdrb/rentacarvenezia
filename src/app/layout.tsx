import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsappFab } from '@/components/whatsapp-fab';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://rentacarvenezia.it'),
    title: 'Noleggio auto premium a Treviso e Venezia | rentacarvenezia.it',
    description:
      'Noleggio auto di lusso a Treviso e Venezia Marco Polo. Nessun pagamento anticipato, carta di debito accettata, pagamento al ritiro.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Noleggio auto premium a Treviso e Venezia | rentacarvenezia.it',
      description:
        'Noleggio auto di lusso a Treviso e Venezia Marco Polo. Nessun pagamento anticipato, carta di debito accettata, pagamento al ritiro.',
      url: 'https://rentacarvenezia.it',
      siteName: 'rentacarvenezia.it',
      locale: 'it-IT',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Noleggio auto premium a Treviso e Venezia | rentacarvenezia.it',
      description:
        'Noleggio auto di lusso a Treviso e Venezia Marco Polo. Nessun pagamento anticipato, carta di debito accettata, pagamento al ritiro.',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body>
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
      </body>
    </html>
  );
}

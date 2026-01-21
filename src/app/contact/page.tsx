import type { Metadata } from 'next';
import Link from 'next/link';

import { ContactForm } from '@/components/contact-form';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contatti | rentacarvenezia.it',
    description: 'Contatta rentacarvenezia.it per assistenza premium sul noleggio.',
    alternates: { canonical: '/contact' },
  };
}

export default function ContactPage() {
  return (
    <main className="container py-14 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Contatti</p>
          <h1 className="mt-2 text-3xl font-serif md:text-4xl">Pianifichiamo il tuo arrivo</h1>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Chiama, scrivi su WhatsApp o invia un’email per supporto immediato. Rispondiamo rapidamente
            in orario ufficio.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <Link href="tel:+393445068823" className="text-accent hover:underline">
              +39 344 506 8823 (Telefono / WhatsApp)
            </Link>
            <Link href="mailto:info@rentacarvenezia.it" className="text-accent hover:underline">
              info@rentacarvenezia.it
            </Link>
            <div className="mt-4 rounded-xl border border-border bg-muted/60 p-4 text-sm text-[#c0b6a8]">
              <p>Lun–Ven 08:00–17:00</p>
              <p>Ordini online 24/7</p>
              <p>Assistenza emergenze 24/7</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}

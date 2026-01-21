import type { Metadata } from 'next';
import Link from 'next/link';

import { ContactForm } from '@/components/contact-form';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Contact | rentacarvenezia.it',
    description: 'Contact rentacarvenezia.it for premium rental assistance.',
    alternates: { canonical: `/${params.locale}/contact` },
  };
}

export default function ContactPage() {
  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Contact</p>
          <h1 className="mt-2 text-4xl font-serif">Let’s plan your arrival</h1>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Call, WhatsApp, or email for immediate support. We respond quickly during business hours.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <Link href="tel:+393445068823" className="text-accent hover:underline">
              +39 344 506 8823 (Phone / WhatsApp)
            </Link>
            <Link href="mailto:info@rentacarvenezia.it" className="text-accent hover:underline">
              info@rentacarvenezia.it
            </Link>
            <div className="mt-4 rounded-xl border border-border bg-muted/60 p-4 text-sm text-[#c0b6a8]">
              <p>Mon–Fri 08:00–17:00</p>
              <p>Online orders 24/7</p>
              <p>Emergency 24/7 assistance</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Conferma richiesta | rentacarvenezia.it',
    description: 'La tua richiesta di prenotazione è stata ricevuta.',
    alternates: { canonical: '/book/confirmation' },
  };
}

export default function ConfirmationPage() {
  return (
    <main className="container py-20">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/60 p-10 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-3xl font-serif">Richiesta ricevuta</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Il nostro team concierge confermerà a breve la disponibilità e invierà il riepilogo. Per
          assistenza immediata contattaci direttamente.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a href="tel:+393445068823" className="text-accent hover:underline">
            Chiama +39 344 506 8823
          </a>
          <a href="https://wa.me/393445068823" className="text-accent hover:underline">
            Chat WhatsApp
          </a>
          <a href="mailto:info@rentacarvenezia.it" className="text-accent hover:underline">
            info@rentacarvenezia.it
          </a>
        </div>
        <Button asChild className="mt-8">
          <Link href="/">Torna alla home</Link>
        </Button>
      </div>
    </main>
  );
}

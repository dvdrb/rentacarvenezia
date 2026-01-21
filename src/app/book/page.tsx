import type { Metadata } from 'next';

import { BookingWidget } from '@/components/booking-widget';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Prenotazione | rentacarvenezia.it',
    description: 'Richiedi disponibilità e ricevi conferma concierge per il tuo noleggio.',
    alternates: { canonical: '/book' },
  };
}

export default function BookPage() {
  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Prenotazione</p>
          <h1 className="mt-2 text-4xl font-serif">Disponibilità e preventivo</h1>
          <p className="mt-4 text-sm text-[#c0b6a8]">
            Invia la richiesta e ricevi conferma concierge via WhatsApp, telefono o email.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { title: '1. Richiesta', detail: 'Seleziona date, veicolo e copertura.' },
              { title: '2. Conferma', detail: 'Confermiamo disponibilità e prezzo finale.' },
              { title: '3. Ritiro', detail: 'Pagamento al ritiro. Nessun anticipo richiesto.' },
            ].map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-muted/60 p-5">
                <p className="text-sm font-semibold">{step.title}</p>
                <p className="text-sm text-[#c0b6a8]">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <BookingWidget />
      </div>
    </main>
  );
}

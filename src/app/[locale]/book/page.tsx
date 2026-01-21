import type { Metadata } from 'next';

import { BookingWidget } from '@/components/booking-widget';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Book | rentacarvenezia.it',
    description: 'Request availability and receive a concierge confirmation for your rental.',
    alternates: { canonical: `/${params.locale}/book` },
  };
}

export default function BookPage() {
  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Book</p>
          <h1 className="mt-2 text-4xl font-serif">Availability & quote</h1>
          <p className="mt-4 text-sm text-[#c0b6a8]">
            Send a concise request and receive a concierge confirmation by WhatsApp, phone, or email.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { title: '1. Request', detail: 'Select dates, vehicle, and insurance tier.' },
              { title: '2. Confirm', detail: 'We confirm availability and final price.' },
              { title: '3. Pick up', detail: 'Pay on pickup. No advance payment required.' },
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

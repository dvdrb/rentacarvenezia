import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

import { BookingWidget } from '@/components/booking-widget';
import { FleetCard } from '@/components/fleet-card';
import { HeroContent } from '@/components/hero-content';
import { vehicles } from '@/data/vehicles';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Noleggio auto premium a Treviso e Venezia | rentacarvenezia.it',
    description:
      'Noleggio auto di lusso a Treviso e Venezia Marco Polo. Nessun pagamento anticipato, carta di debito accettata, pagamento al ritiro.',
    alternates: { canonical: '/' },
  };
}

const testimonials = [
  {
    name: 'A. Romano',
    quote: 'Ritiro impeccabile a Marco Polo. Un servizio da veri VIP.',
  },
  {
    name: 'I. Novak',
    quote: 'Auto eleganti e zero stress. Pagare al ritiro è un sollievo.',
  },
  {
    name: 'M. Petrov',
    quote: 'Prenotazione fluida, risposta rapida e auto perfette. Consigliatissimo.',
  },
];

const faqs = [
  {
    question: 'È necessaria la carta di credito?',
    answer: 'No. Accettiamo carte di debito e pagamento al ritiro senza anticipo.',
  },
  {
    question: 'Posso aggiungere una copertura completa?',
    answer: 'Sì, scegli tra Basic, Medium o Premium in base alle tue esigenze.',
  },
  {
    question: 'Dove incontro il team in aeroporto?',
    answer: 'Ti incontriamo al Venice Marco Polo Arrivi 1 o agli arrivi di Treviso.',
  },
  {
    question: 'Quanto velocemente ricevo conferma?',
    answer: 'Confermiamo via WhatsApp, telefono o email poco dopo la richiesta.',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <Image
            src="/images/venice-hero.svg"
            alt="Venice skyline"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative">
          <div className="container grid gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <HeroContent
              headline="Noleggio auto premium a Treviso e Venezia"
              subhead="Nessun pagamento anticipato. Carte di debito accettate. Conferma rapida."
              primaryCtaLabel="Verifica disponibilità"
              secondaryCtaLabel="Esplora la flotta"
              trustItems={[
                'Nessun pagamento anticipato',
                'Carte di debito accettate / senza carta di credito',
                'Coperture assicurative complete',
                'Ritiro in aeroporto: Treviso e Venezia Marco Polo',
              ]}
            />
            <BookingWidget className="bg-background/90" />
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Flotta in evidenza</p>
            <h2 className="mt-2 text-2xl font-serif md:text-3xl">Veicoli selezionati</h2>
          </div>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <Link href="/fleet">Vedi tutti</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.slice(0, 6).map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      <section className="bg-muted py-14 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Come funziona</p>
            <h2 className="mt-2 text-2xl font-serif md:text-3xl">Un percorso concierge</h2>
            <p className="mt-4 text-sm text-[#c0b6a8]">
              Studiato per rapidità, chiarezza e un’esperienza di viaggio raffinata.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Scegli l’auto', detail: 'Seleziona il veicolo e le date.' },
              { title: 'Invia la richiesta', detail: 'Confermiamo la disponibilità in poche ore.' },
              { title: 'Conferma con il team', detail: 'Supporto via WhatsApp, telefono o email.' },
            ].map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border bg-background p-5 md:p-6">
                <p className="text-xs uppercase tracking-widest text-accent">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[#c0b6a8]">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
            <p className="text-xs uppercase tracking-widest text-accent">Promessa luxury</p>
            <h3 className="mt-2 text-lg font-serif md:text-xl">Pronti al tuo arrivo</h3>
            <p className="mt-2 text-sm text-[#c0b6a8]">
              Programmiamo il ritiro a Venezia Marco Polo e Treviso con coordinamento in tempo reale.
            </p>
            <Button asChild className="mt-6 w-full md:w-auto" variant="outline">
              <Link href="/locations">Vedi i punti di ritiro</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Testimonianze</p>
            <h2 className="mt-2 text-2xl font-serif md:text-3xl">Ospiti che viaggiano con noi</h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-xl border border-border bg-muted/60 p-5 md:p-6"
                >
                  <p className="text-sm text-[#c0b6a8]">“{testimonial.quote}”</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-accent">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">FAQ</p>
            <h2 className="mt-2 text-2xl font-serif md:text-3xl">Risposte prima del viaggio</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild variant="outline" className="mt-6 w-full md:w-auto">
              <Link href="/faq">Vai alle FAQ complete</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

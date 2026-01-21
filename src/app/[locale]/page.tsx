import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { BookingWidget } from '@/components/booking-widget';
import { FleetCard } from '@/components/fleet-card';
import { HeroContent } from '@/components/hero-content';
import { vehicles } from '@/data/vehicles';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Premium Car Rental in Treviso & Venice | rentacarvenezia.it',
    description:
      'Luxury car rental in Treviso and Venice Marco Polo Airport. No advance payment, debit cards accepted, pay on pickup.',
    alternates: { canonical: `/${params.locale}` },
  };
}

const testimonials = [
  {
    name: 'A. Romano',
    quote: 'Flawless pickup at Marco Polo. The concierge treated us like VIPs.',
  },
  {
    name: 'I. Novak',
    quote: 'Elegant cars and zero stress. The no-advance payment policy is refreshing.',
  },
  {
    name: 'M. Petrov',
    quote: 'Smooth booking, quick response, and pristine vehicles. Highly recommended.',
  },
];

const faqs = [
  {
    question: 'Is a credit card required?',
    answer: 'No. We accept debit cards and payment on pickup with no advance payment.',
  },
  {
    question: 'Can I add full insurance?',
    answer: 'Yes, choose Basic, Medium, or Premium tiers depending on your comfort level.',
  },
  {
    question: 'Where do I meet the team at the airport?',
    answer: 'We greet you at Venice Marco Polo Arrival Hall 1 or Treviso arrivals.',
  },
  {
    question: 'How quickly can I confirm?',
    answer: 'We confirm by WhatsApp, phone, or email shortly after your request.',
  },
];

export default async function HomePage({ params }: { params: { locale: string } }) {
  const t = await getTranslations();

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
          <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <HeroContent
              locale={params.locale}
              headline={t('hero.headline')}
              subhead={t('hero.subhead')}
              primaryCtaLabel={t('cta.checkAvailability')}
              secondaryCtaLabel="Browse fleet"
              trustItems={[
                t('trust.noAdvance'),
                t('trust.debitAccepted'),
                t('trust.insurance'),
                t('trust.airportPickup'),
              ]}
            />
            <BookingWidget className="bg-background/90" />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Featured fleet</p>
            <h2 className="mt-2 text-3xl font-serif">Signature vehicles</h2>
          </div>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/fleet`}>View all</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vehicles.slice(0, 6).map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} locale={params.locale} />
          ))}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">How it works</p>
            <h2 className="mt-2 text-3xl font-serif">A concierge-style booking flow</h2>
            <p className="mt-4 text-sm text-[#c0b6a8]">
              Designed for speed, clarity, and a refined travel experience.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Choose your car', detail: 'Select the vehicle and travel dates.' },
              { title: 'Send your request', detail: 'We confirm availability within hours.' },
              { title: 'Confirm with our team', detail: 'WhatsApp, phone, or email support.' },
            ].map((step, index) => (
              <div key={step.title} className="rounded-xl border border-border bg-background p-6">
                <p className="text-xs uppercase tracking-widest text-accent">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[#c0b6a8]">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="text-xs uppercase tracking-widest text-accent">Luxury promise</p>
            <h3 className="mt-2 text-xl font-serif">Always ready on arrival</h3>
            <p className="mt-2 text-sm text-[#c0b6a8]">
              We schedule pickups at Venice Marco Polo and Treviso airports with real-time coordination.
            </p>
            <Button asChild className="mt-6" variant="outline">
              <Link href={`/${params.locale}/locations`}>View pickup points</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Testimonials</p>
            <h2 className="mt-2 text-3xl font-serif">Guests who travel with us</h2>
            <div className="mt-6 space-y-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-xl border border-border bg-muted/60 p-6"
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
            <h2 className="mt-2 text-3xl font-serif">Answers before you arrive</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild variant="outline" className="mt-6">
              <Link href={`/${params.locale}/faq`}>Visit full FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

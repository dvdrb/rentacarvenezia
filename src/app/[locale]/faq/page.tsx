import type { Metadata } from 'next';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'FAQ | rentacarvenezia.it',
    description: 'Answers to common questions about luxury car rental in Venice and Treviso.',
    alternates: { canonical: `/${params.locale}/faq` },
  };
}

const faqItems = [
  {
    question: 'Is any advance payment required?',
    answer: 'No. We confirm your booking with no advance payment and you pay on pickup.'
  },
  {
    question: 'Do I need a credit card?',
    answer: 'No. Debit cards are accepted and credit cards are not required.'
  },
  {
    question: 'What is the minimum age?',
    answer: 'Drivers must be at least 23 years old with a valid license held for 3+ years.'
  },
  {
    question: 'Is there a mileage limit?',
    answer: 'Yes. The daily allowance is 200 km/day with an extra fee of €0.20 per km.'
  },
  {
    question: 'Which insurance tiers are available?',
    answer: 'Basic (€0/day), Medium (€15/day), and Premium (€25/day). Terms detail deposits and excess.'
  },
  {
    question: 'Where do I meet the concierge at Venice Airport?',
    answer: 'We meet at Venice Marco Polo Airport, Arrival Hall 1, at your confirmed time.'
  },
  {
    question: 'Can I change my booking after submitting?',
    answer: 'Yes. Reply to the confirmation message by WhatsApp, phone, or email for updates.'
  },
  {
    question: 'Are there hidden fees?',
    answer: 'No. We provide transparent pricing and confirm any extras before pickup.'
  },
  {
    question: 'Is roadside assistance included?',
    answer: 'Yes. Emergency assistance is available 24/7 during your rental.'
  },
  {
    question: 'Is airport pickup available in Treviso?',
    answer: 'Yes. We coordinate Treviso Airport Arrivals pickups with advance notice.'
  },
  {
    question: 'Can I add a second driver?',
    answer: 'Yes. Provide details in the booking notes and we will confirm availability.'
  },
  {
    question: 'How long does confirmation take?',
    answer: 'We typically respond within hours during business hours, with 24/7 online requests.'
  }
];

export default function FaqPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">FAQ</p>
        <h1 className="mt-2 text-4xl font-serif">Answers with clarity</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Every detail is designed to keep your journey effortless.
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-10">
        {faqItems.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

import type { Metadata } from 'next';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FAQ | rentacarvenezia.it',
    description: 'Risposte alle domande più comuni sul noleggio auto a Venezia e Treviso.',
    alternates: { canonical: '/faq' },
  };
}

const faqItems = [
  {
    question: 'È richiesto un pagamento anticipato?',
    answer: 'No. Confermiamo la prenotazione senza anticipo e paghi al ritiro.',
  },
  {
    question: 'Serve la carta di credito?',
    answer: 'No. Accettiamo carte di debito e non richiediamo la carta di credito.',
  },
  {
    question: 'Qual è l’età minima?',
    answer: 'Il conducente deve avere almeno 23 anni con patente valida da 3+ anni.',
  },
  {
    question: 'C’è un limite di chilometraggio?',
    answer: 'Sì. Il limite giornaliero è 200 km/giorno con extra di €0,20/km.',
  },
  {
    question: 'Quali coperture assicurative sono disponibili?',
    answer: 'Basic (€0/giorno), Medium (€15/giorno) e Premium (€25/giorno). Nei termini trovi deposito e franchigia.',
  },
  {
    question: 'Dove incontro il concierge a Venezia?',
    answer: 'Ti incontriamo al Venice Marco Polo, Arrivi 1, all’orario concordato.',
  },
  {
    question: 'Posso modificare la prenotazione dopo l’invio?',
    answer: 'Sì. Rispondi al messaggio di conferma via WhatsApp, telefono o email.',
  },
  {
    question: 'Ci sono costi nascosti?',
    answer: 'No. Prezzi trasparenti e ogni extra viene confermato prima del ritiro.',
  },
  {
    question: 'È inclusa l’assistenza stradale?',
    answer: 'Sì. Assistenza di emergenza 24/7 durante il noleggio.',
  },
  {
    question: 'È disponibile il ritiro in aeroporto a Treviso?',
    answer: 'Sì. Coordiniamo i ritiri agli Arrivi di Treviso con preavviso.',
  },
  {
    question: 'Posso aggiungere un secondo conducente?',
    answer: 'Sì. Inserisci i dettagli nelle note e confermeremo la disponibilità.',
  },
  {
    question: 'Quanto tempo serve per la conferma?',
    answer: 'Rispondiamo entro poche ore in orario ufficio, con richieste online 24/7.',
  }
];

export default function FaqPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">FAQ</p>
        <h1 className="mt-2 text-4xl font-serif">Risposte con chiarezza</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Ogni dettaglio è pensato per rendere il viaggio senza pensieri.
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

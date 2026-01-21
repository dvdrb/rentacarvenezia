import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { InsuranceTabs } from '@/components/insurance-tabs';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Termini | rentacarvenezia.it',
    description: 'Condizioni di noleggio, coperture assicurative e chilometraggio.',
    alternates: { canonical: '/terms' },
  };
}

export default function TermsPage() {
  return (
    <main className="container py-14 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Termini</p>
        <h1 className="mt-2 text-3xl font-serif md:text-4xl">Condizioni di noleggio</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Sintesi chiara per decidere con serenità.
        </p>
      </div>

      <Card className="mt-8 p-5 text-sm text-[#c0b6a8] md:mt-10 md:p-6">
        <h2 className="text-base font-semibold text-foreground">Sintesi in italiano</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Età minima: 23 anni. Patente posseduta da almeno 3 anni.</li>
          <li>Chilometraggio: 200 km/giorno con extra €0,20/km.</li>
          <li>Coperture: Basic (€0/giorno), Medium (€15/giorno), Premium (€25/giorno).</li>
          <li>Pagamento al ritiro. Nessun anticipo richiesto.</li>
          <li>Possibile monitoraggio GPS/satellitare per protezione del veicolo.</li>
        </ul>
      </Card>

      <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-2">
        <Card className="p-5 md:p-6">
          <h2 className="text-lg font-semibold">Requisiti</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Età minima 23 anni. Il conducente principale deve avere una patente valida da almeno 3
            anni.
          </p>
        </Card>
        <Card className="p-5 md:p-6">
          <h2 className="text-lg font-semibold">Chilometraggio</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Inclusi 200 km/giorno. Chilometri aggiuntivi a €0,20/km.
          </p>
        </Card>
        <Card className="p-5 md:p-6">
          <h2 className="text-lg font-semibold">Coperture assicurative</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Basic (€0/giorno), Medium (€15/giorno), Premium (€25/giorno). Depositi e franchigie
            vengono comunicati in fase di conferma.
          </p>
          <InsuranceTabs />
        </Card>
        <Card className="p-5 md:p-6">
          <h2 className="text-lg font-semibold">Monitoraggio sicurezza</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            I veicoli possono essere dotati di monitoraggio GPS/satellitare antifurto per esigenze
            operative e di sicurezza.
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm text-[#c0b6a8]">
        Per i dettagli contrattuali completi richiedi il contratto via email o al ritiro.{' '}
        <Link href="/contact" className="text-accent hover:underline">
          Contattaci
        </Link>
        .
      </p>
    </main>
  );
}

import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { FleetFilterGrid } from '@/components/fleet-filter-grid';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Flotta | rentacarvenezia.it',
    description:
      'Esplora la flotta premium disponibile a Treviso e all’aeroporto di Venezia Marco Polo.',
    alternates: { canonical: '/fleet' },
  };
}

export default function FleetPage() {
  return (
    <main className="container py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Flotta</p>
          <h1 className="mt-2 text-3xl font-serif">Scegli il tuo veicolo</h1>
          <p className="mt-3 max-w-2xl text-sm text-[#c0b6a8]">
            Filtra per categoria, trasmissione, posti e prezzo per trovare l’auto ideale per i tuoi
            itinerari in Veneto.
          </p>
        </div>
        <Button variant="outline">Consigliate per i ritiri in aeroporto</Button>
      </div>

      <FleetFilterGrid />
    </main>
  );
}

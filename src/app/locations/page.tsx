import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { locations } from '@/data/locations';
import { Card } from '@/components/ui/card';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sedi | rentacarvenezia.it',
    description: 'Punti di ritiro presso Venezia Marco Polo e Treviso.',
    alternates: { canonical: '/locations' },
  };
}

export default function LocationsPage() {
  return (
    <main className="container py-16">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-widest text-accent">Sedi</p>
        <h1 className="text-4xl font-serif">Punti di ritiro a Venezia e Treviso</h1>
        <p className="max-w-2xl text-sm text-[#c0b6a8]">
          Venezia Marco Polo Arrivi 1 e l’ufficio di Treviso garantiscono consegne rapide e senza
          attese.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {locations.slice(0, 2).map((location) => (
          <Card key={location.id} className="p-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">{location.name}</h3>
                <p className="mt-2 text-sm text-[#c0b6a8]">{location.address}</p>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  className="mt-3 inline-flex text-sm text-accent hover:underline"
                >
                  Apri in Google Maps
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-border bg-muted/60 p-6 text-sm text-[#c0b6a8]">
        <p className="text-xs uppercase tracking-widest text-accent">Contesto ritiro</p>
        <p className="mt-3">
          I ritiri a Venezia Marco Polo sono coordinati presso Arrivi 1. Le prenotazioni di Treviso
          sono gestite dal nostro ufficio in Via Le Canevare, 30, 31100 Treviso TV.
        </p>
      </div>
    </main>
  );
}

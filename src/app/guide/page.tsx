import type { Metadata } from 'next';
import Image from 'next/image';

import { guideEntries } from '@/data/guide';
import { Card } from '@/components/ui/card';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Guida | rentacarvenezia.it',
    description: 'Guida boutique a Venezia, Treviso e alle Dolomiti.',
    alternates: { canonical: '/guide' },
  };
}

export default function GuidePage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Guida</p>
        <h1 className="mt-2 text-4xl font-serif">Luoghi da visitare</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Itinerari curati per Venezia, Treviso, le colline del Prosecco e le Dolomiti.
        </p>
      </div>

      <div className="mt-12 grid gap-10">
        {guideEntries.map((entry, index) => (
          <Card key={entry.slug} className="grid gap-6 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
            <div className={`relative min-h-[260px] ${index % 2 ? 'lg:order-2' : ''}`}>
              <Image src={entry.image} alt={entry.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-accent">{index + 1}</p>
              <h2 className="mt-2 text-2xl font-serif">{entry.title}</h2>
              <p className="mt-3 text-sm text-[#c0b6a8]">{entry.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#c0b6a8]">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

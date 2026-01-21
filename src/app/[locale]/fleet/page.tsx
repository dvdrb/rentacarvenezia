import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { FleetFilterGrid } from '@/components/fleet-filter-grid';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Fleet | rentacarvenezia.it',
    description: 'Explore the premium fleet available in Treviso and Venice Marco Polo Airport.',
    alternates: { canonical: `/${params.locale}/fleet` },
  };
}

export default function FleetPage({ params }: { params: { locale: string } }) {
  return (
    <main className="container py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent">Fleet</p>
          <h1 className="mt-2 text-3xl font-serif">Choose your signature vehicle</h1>
          <p className="mt-3 max-w-2xl text-sm text-[#c0b6a8]">
            Filter by category, transmission, seating, and price to find the perfect fit for Veneto
            drives.
          </p>
        </div>
        <Button variant="outline">Recommended for airport pickups</Button>
      </div>

      <FleetFilterGrid locale={params.locale} />
    </main>
  );
}

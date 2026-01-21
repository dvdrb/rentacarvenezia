import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { vehicles } from '@/data/vehicles';
import { BookingWidget } from '@/components/booking-widget';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { insuranceRates } from '@/lib/pricing';

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const vehicle = vehicles.find((item) => item.slug === params.slug);
  if (!vehicle) {
    return {
      title: 'Vehicle not found | rentacarvenezia.it',
    };
  }
  return {
    title: `${vehicle.name} | rentacarvenezia.it`,
    description: `Premium ${vehicle.category} rental: ${vehicle.name}.`,
    alternates: { canonical: `/${params.locale}/fleet/${vehicle.slug}` },
  };
}

export default function VehicleDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const vehicle = vehicles.find((item) => item.slug === params.slug);

  if (!vehicle) {
    notFound();
  }

  const priceRange = `${Math.min(...vehicle.rates.map((rate) => rate.pricePerDay))}-${Math.max(
    ...vehicle.rates.map((rate) => rate.pricePerDay)
  )}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: vehicle.name,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: Math.min(...vehicle.rates.map((rate) => rate.pricePerDay)),
      highPrice: Math.max(...vehicle.rates.map((rate) => rate.pricePerDay)),
    },
  };

  return (
    <main>
      <section className="relative h-[420px]">
        <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-background/90" />
        <div className="container relative flex h-full items-end pb-12">
          <div>
            <Badge variant="muted">{vehicle.category}</Badge>
            <h1 className="mt-4 text-4xl font-serif">{vehicle.name}</h1>
            <p className="mt-2 text-sm text-[#c0b6a8]">
              {vehicle.transmission} • {vehicle.passengers} seats • {vehicle.doors} doors •{' '}
              {vehicle.airConditioning ? 'A/C' : 'No A/C'}
            </p>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10">
          <div className="grid gap-4 md:grid-cols-2">
            {vehicle.gallery.map((image) => (
              <div key={image} className="relative h-56 overflow-hidden rounded-xl border border-border">
                <Image src={image} alt={vehicle.name} fill className="object-cover" />
              </div>
            ))}
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Pricing tiers</h2>
            <p className="mt-2 text-sm text-[#c0b6a8]">Rates per day based on rental duration.</p>
            <div className="mt-6 grid gap-4">
              {vehicle.rates.map((rate) => (
                <div
                  key={rate.label}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{rate.label}</p>
                    {rate.note && <p className="text-xs text-[#c0b6a8]">{rate.note}</p>}
                  </div>
                  <p className="text-lg font-semibold">€{rate.pricePerDay}/day</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Insurance options</h2>
            <p className="mt-2 text-sm text-[#c0b6a8]">
              Choose the protection tier that matches your travel style.
            </p>
            <div className="mt-4 grid gap-3">
              {Object.entries(insuranceRates).map(([tier, rate]) => (
                <div
                  key={tier}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{tier}</p>
                    <p className="text-xs text-[#c0b6a8]">Deposit & excess details in terms.</p>
                  </div>
                  <p className="text-sm font-semibold">€{rate}/day</p>
                </div>
              ))}
            </div>
            <Link
              href={`/${params.locale}/terms`}
              className="mt-4 inline-flex text-sm text-accent hover:underline"
            >
              View terms
            </Link>
          </Card>
        </div>

        <div className="space-y-6">
          <BookingWidget vehicleSlug={vehicle.slug} requireVehicle />
          <Card className="p-6 text-sm text-[#c0b6a8]">
            <p className="text-xs uppercase tracking-widest text-accent">Pricing overview</p>
            <p className="mt-3">
              From €{Math.min(...vehicle.rates.map((rate) => rate.pricePerDay))}/day — transparent
              pricing based on duration. Range: €{priceRange} per day.
            </p>
          </Card>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

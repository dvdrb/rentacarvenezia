'use client';

import * as React from 'react';

import { vehicles } from '@/data/vehicles';
import { FleetCard } from '@/components/fleet-card';

const categories = ['All', 'City', 'Compact', 'SUV', 'Hybrid'] as const;
const transmissions = ['All', 'Manual', 'Automatic'] as const;

const categoryLabels: Record<(typeof categories)[number], string> = {
  All: 'Tutte',
  City: 'City',
  Compact: 'Compatte',
  SUV: 'SUV',
  Hybrid: 'Hybrid',
};

const transmissionLabels: Record<(typeof transmissions)[number], string> = {
  All: 'Tutte',
  Manual: 'Manuale',
  Automatic: 'Automatica',
};

export function FleetFilterGrid() {
  const [category, setCategory] = React.useState<(typeof categories)[number]>('All');
  const [transmission, setTransmission] =
    React.useState<(typeof transmissions)[number]>('All');
  const [minSeats, setMinSeats] = React.useState(0);
  const [sort, setSort] = React.useState<'recommended' | 'price-low'>('recommended');
  const [priceRange, setPriceRange] = React.useState<'all' | 'under-70' | '70-85' | '85-plus'>(
    'all'
  );

  const filtered = React.useMemo(() => {
    return vehicles
      .filter((vehicle) => (category === 'All' ? true : vehicle.category === category))
      .filter((vehicle) =>
        transmission === 'All' ? true : vehicle.transmission === transmission
      )
      .filter((vehicle) => (minSeats ? vehicle.passengers >= minSeats : true))
      .filter((vehicle) => {
        if (priceRange === 'all') {
          return true;
        }
        const minRate = Math.min(...vehicle.rates.map((rate) => rate.pricePerDay));
        if (priceRange === 'under-70') {
          return minRate < 70;
        }
        if (priceRange === '70-85') {
          return minRate >= 70 && minRate <= 85;
        }
        return minRate > 85;
      })
      .sort((a, b) => {
        if (sort === 'price-low') {
          const minA = Math.min(...a.rates.map((rate) => rate.pricePerDay));
          const minB = Math.min(...b.rates.map((rate) => rate.pricePerDay));
          return minA - minB;
        }
        return 0;
      });
  }, [category, transmission, minSeats, priceRange, sort]);

  return (
    <div>
      <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-muted/60 p-5 md:mt-10 md:grid-cols-5 md:p-6">
        <label className="flex flex-col gap-2 text-sm">
          Categoria
          <select
            className="h-11 rounded-full border border-border bg-background px-4"
            value={category}
            onChange={(event) => setCategory(event.target.value as typeof category)}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {categoryLabels[option]}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Trasmissione
          <select
            className="h-11 rounded-full border border-border bg-background px-4"
            value={transmission}
            onChange={(event) => setTransmission(event.target.value as typeof transmission)}
          >
            {transmissions.map((option) => (
              <option key={option} value={option}>
                {transmissionLabels[option]}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Posti (minimo)
          <select
            className="h-11 rounded-full border border-border bg-background px-4"
            value={minSeats}
            onChange={(event) => setMinSeats(Number(event.target.value))}
          >
            {[0, 4, 5, 7].map((option) => (
              <option key={option} value={option}>
                {option === 0 ? 'Qualsiasi' : option}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Ordina per
          <select
            className="h-11 rounded-full border border-border bg-background px-4"
            value={sort}
            onChange={(event) => setSort(event.target.value as typeof sort)}
          >
            <option value="recommended">Consigliati</option>
            <option value="price-low">Prezzo basso → alto</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Fascia prezzo
          <select
            className="h-11 rounded-full border border-border bg-background px-4"
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value as typeof priceRange)}
          >
            <option value="all">Qualsiasi</option>
            <option value="under-70">Sotto €70/giorno</option>
            <option value="70-85">€70–€85/giorno</option>
            <option value="85-plus">€85+/giorno</option>
          </select>
        </label>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((vehicle) => (
          <FleetCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

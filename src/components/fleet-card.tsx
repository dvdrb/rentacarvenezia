import Image from 'next/image';
import Link from 'next/link';

import type { Vehicle } from '@/data/vehicles';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const categoryLabel: Record<Vehicle['category'], string> = {
  City: 'City',
  Compact: 'Compact',
  SUV: 'SUV',
  Hybrid: 'Hybrid',
};

type FleetCardProps = {
  vehicle: Vehicle;
};

export function FleetCard({ vehicle }: FleetCardProps) {
  const minRate = Math.min(...vehicle.rates.map((rate) => rate.pricePerDay));
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full bg-muted">
        <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
      </div>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{vehicle.name}</h3>
          <Badge variant="muted">{categoryLabel[vehicle.category]}</Badge>
        </div>
        <div className="text-sm text-[#c0b6a8]">
          {vehicle.transmission} • {vehicle.passengers} posti • {vehicle.doors} porte
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c0b6a8]">Da</p>
            <p className="text-xl font-semibold">€{minRate}/giorno</p>
          </div>
          <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
            <Link href={`/fleet/${vehicle.slug}`}>Dettagli</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

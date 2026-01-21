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
  locale: string;
};

export function FleetCard({ vehicle, locale }: FleetCardProps) {
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
          {vehicle.transmission} • {vehicle.passengers} seats • {vehicle.doors} doors
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c0b6a8]">From</p>
            <p className="text-xl font-semibold">€{minRate}/day</p>
          </div>
          <Button asChild size="sm" variant="outline">
            <Link href={`/${locale}/fleet/${vehicle.slug}`}>View details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

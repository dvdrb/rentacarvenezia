export type RateBucket = {
  label: string;
  minDays: number;
  maxDays?: number;
  pricePerDay: number;
  note?: string;
};

export type Vehicle = {
  id: string;
  slug: string;
  name: string;
  category: 'City' | 'Compact' | 'SUV' | 'Hybrid';
  image: string;
  gallery: string[];
  transmission: 'Manual' | 'Automatic';
  airConditioning: boolean;
  passengers: number;
  doors: number;
  fuel?: string;
  rates: RateBucket[];
};

// TODO: replace placeholder imagery with real fleet photography.
export const vehicles: Vehicle[] = [
  {
    id: 'fiat-500-diesel',
    slug: 'fiat-500-1-3-diesel',
    name: 'Fiat 500 1.3 Diesel',
    category: 'City',
    image: '/images/vehicle-fiat-500.svg',
    gallery: ['/images/vehicle-fiat-500.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 4,
    doors: 3,
    fuel: 'Diesel',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 58 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 52 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 45 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 39 }
    ]
  },
  {
    id: 'ford-fiesta',
    slug: 'ford-fiesta-1-4',
    name: 'Ford Fiesta 1.4',
    category: 'Compact',
    image: '/images/vehicle-ford-fiesta.svg',
    gallery: ['/images/vehicle-ford-fiesta.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 62 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 55 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 48 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 42 }
    ]
  },
  {
    id: 'vw-golf',
    slug: 'vw-golf-1-4',
    name: 'VW Golf 1.4',
    category: 'Compact',
    image: '/images/vehicle-vw-golf.svg',
    gallery: ['/images/vehicle-vw-golf.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 75 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 68 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 60 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 52 }
    ]
  },
  {
    id: 'fiat-panda',
    slug: 'fiat-panda',
    name: 'Fiat Panda',
    category: 'City',
    image: '/images/vehicle-fiat-panda.svg',
    gallery: ['/images/vehicle-fiat-panda.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 4,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 55 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 48 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 42 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 36 }
    ]
  },
  {
    id: 'fiat-tipo',
    slug: 'fiat-tipo',
    name: 'Fiat Tipo',
    category: 'Compact',
    image: '/images/vehicle-fiat-tipo.svg',
    gallery: ['/images/vehicle-fiat-tipo.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Diesel',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 68 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 60 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 52 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 46 }
    ]
  },
  {
    id: 'toyota-yaris-hybrid',
    slug: 'toyota-yaris-hybrid',
    name: 'Toyota Yaris Hybrid',
    category: 'Hybrid',
    image: '/images/vehicle-toyota-yaris.svg',
    gallery: ['/images/vehicle-toyota-yaris.svg', '/images/vehicle-interior.svg'],
    transmission: 'Automatic',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Hybrid',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 82 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 74 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 66 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 58 }
    ]
  },
  {
    id: 'opel-corsa',
    slug: 'opel-corsa',
    name: 'Opel Corsa',
    category: 'City',
    image: '/images/vehicle-opel-corsa.svg',
    gallery: ['/images/vehicle-opel-corsa.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 60 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 53 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 47 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 40 }
    ]
  },
  {
    id: 'citroen-c3',
    slug: 'citroen-c3',
    name: 'Citroën C3',
    category: 'City',
    image: '/images/vehicle-citroen-c3.svg',
    gallery: ['/images/vehicle-citroen-c3.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 64 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 57 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 49 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 42 }
    ]
  },
  {
    id: 'renault-captur',
    slug: 'renault-captur',
    name: 'Renault Captur',
    category: 'SUV',
    image: '/images/vehicle-renault-captur.svg',
    gallery: ['/images/vehicle-renault-captur.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Petrol',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 88 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 78 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 70 },
      { label: '30+ giorni', minDays: 30, pricePerDay: 62 }
    ]
  },
  {
    id: 'dacia-duster',
    slug: 'dacia-duster',
    name: 'Dacia Duster',
    category: 'SUV',
    image: '/images/vehicle-dacia-duster.svg',
    gallery: ['/images/vehicle-dacia-duster.svg', '/images/vehicle-interior.svg'],
    transmission: 'Manual',
    airConditioning: true,
    passengers: 5,
    doors: 5,
    fuel: 'Diesel',
    rates: [
      { label: '3-5 giorni', minDays: 3, maxDays: 5, pricePerDay: 92 },
      { label: '6-14 giorni', minDays: 6, maxDays: 14, pricePerDay: 82 },
      { label: '15-29 giorni', minDays: 15, maxDays: 29, pricePerDay: 74 },
      {
        label: '30+ giorni',
        minDays: 30,
        pricePerDay: 66,
        note: 'TODO: confermare la tariffa 30+ giorni per Dacia Duster.'
      }
    ]
  }
];

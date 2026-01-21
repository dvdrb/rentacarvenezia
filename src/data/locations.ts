export type LocationOption = {
  id: string;
  name: string;
  address: string;
};

export const locations: LocationOption[] = [
  {
    id: 'venice-airport',
    name: 'Airport Venice Marco Polo',
    address: 'Viale Galileo Galilei, 30/1, 30173 Venice VE, Italy'
  },
  {
    id: 'treviso-airport',
    name: 'Treviso Airport Arrivals',
    address: 'Via Le Canevare, 30, 31100 Treviso TV, Italy'
  },
  {
    id: 'treviso-office',
    name: 'Treviso Office',
    address: 'Via Le Canevare, 30, 31100 Treviso TV, Italy'
  }
];

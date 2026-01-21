export type GuideEntry = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  highlights: string[];
};

// TODO: replace editorial placeholders with licensed travel photography.
export const guideEntries: GuideEntry[] = [
  {
    slug: 'venice',
    title: 'Venice',
    summary: 'Arrive early, drift through the lagoon, and let the city reveal itself at golden hour.',
    image: '/images/guide-venice.svg',
    highlights: ['St. Mark’s Basilica', 'Rialto markets', 'Sunset vaporetto ride']
  },
  {
    slug: 'treviso',
    title: 'Treviso',
    summary: 'A refined city of canals, palazzi, and espresso rituals minutes from our office.',
    image: '/images/guide-treviso.svg',
    highlights: ['Piazza dei Signori', 'Sile river walk', 'Local prosecco bars']
  },
  {
    slug: 'valdobbiadene',
    title: 'Valdobbiadene',
    summary: 'Vineyards stretch over rolling hills—ideal for a curated Prosecco route.',
    image: '/images/guide-valdobbiadene.svg',
    highlights: ['Cartizze hill', 'Boutique tastings', 'Scenic ridge drives']
  },
  {
    slug: 'dolomites',
    title: 'Dolomites',
    summary: 'Epic alpine panoramas and sophisticated resorts within a comfortable drive.',
    image: '/images/guide-dolomites.svg',
    highlights: ['Alpe di Siusi', 'Lake Misurina', 'Luxury mountain spas']
  },
  {
    slug: 'cortina',
    title: 'Cortina d’Ampezzo',
    summary: 'Italy’s most elegant alpine retreat—boutiques, cafés, and world-class trails.',
    image: '/images/guide-cortina.svg',
    highlights: ['Corso Italia', 'Tofana cable car', 'Après-ski lounges']
  }
];

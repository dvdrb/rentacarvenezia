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
    title: 'Venezia',
    summary: 'Arriva presto, attraversa la laguna e lascia che la città si riveli alla luce dorata.',
    image: '/images/guide-venice.svg',
    highlights: ['Basilica di San Marco', 'Mercati di Rialto', 'Giro in vaporetto al tramonto']
  },
  {
    slug: 'treviso',
    title: 'Treviso',
    summary: 'Una città elegante di canali, palazzi e rituali dell’espresso a pochi minuti dal nostro ufficio.',
    image: '/images/guide-treviso.svg',
    highlights: ['Piazza dei Signori', 'Passeggiata sul Sile', 'Enoteche di prosecco locali']
  },
  {
    slug: 'valdobbiadene',
    title: 'Valdobbiadene',
    summary: 'Vigneti che si estendono sulle colline, ideali per una rotta del Prosecco su misura.',
    image: '/images/guide-valdobbiadene.svg',
    highlights: ['Colle di Cartizze', 'Degustazioni boutique', 'Strade panoramiche di cresta']
  },
  {
    slug: 'dolomites',
    title: 'Dolomiti',
    summary: 'Panorami alpini iconici e resort raffinati a distanza comoda.',
    image: '/images/guide-dolomites.svg',
    highlights: ['Alpe di Siusi', 'Lago di Misurina', 'Spa di montagna di lusso']
  },
  {
    slug: 'cortina',
    title: 'Cortina d’Ampezzo',
    summary: 'Il rifugio alpino più elegante d’Italia tra boutique, caffè e sentieri iconici.',
    image: '/images/guide-cortina.svg',
    highlights: ['Corso Italia', 'Funivia Tofana', 'Après-ski lounge']
  }
];

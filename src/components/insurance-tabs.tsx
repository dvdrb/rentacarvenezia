'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tiers = [
  {
    value: 'basic',
    label: 'Basic',
    price: '€0/giorno',
    description: 'Copertura essenziale con deposito e franchigia standard.'
  },
  {
    value: 'medium',
    label: 'Medium',
    price: '€15/giorno',
    description: 'Franchigia ridotta e maggiore tranquillità sui percorsi lunghi.'
  },
  {
    value: 'premium',
    label: 'Premium',
    price: '€25/giorno',
    description: 'Copertura massima per viaggi senza stress.'
  }
];

export function InsuranceTabs() {
  return (
    <Tabs defaultValue="basic" className="mt-6">
      <TabsList>
        {tiers.map((tier) => (
          <TabsTrigger key={tier.value} value={tier.value}>
            {tier.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tiers.map((tier) => (
        <TabsContent key={tier.value} value={tier.value}>
          <div className="rounded-xl border border-border bg-muted/60 p-4 text-sm text-[#c0b6a8]">
            <p className="text-base font-semibold text-foreground">{tier.price}</p>
            <p className="mt-2">{tier.description}</p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

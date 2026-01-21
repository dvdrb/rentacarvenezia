'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const tiers = [
  {
    value: 'basic',
    label: 'Basic',
    price: '€0/day',
    description: 'Essential coverage with standard deposit and excess policies.'
  },
  {
    value: 'medium',
    label: 'Medium',
    price: '€15/day',
    description: 'Reduced excess and added peace of mind for longer routes.'
  },
  {
    value: 'premium',
    label: 'Premium',
    price: '€25/day',
    description: 'Maximum coverage for stress-free luxury travel.'
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

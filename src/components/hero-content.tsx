'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type HeroContentProps = {
  headline: string;
  subhead: string;
  trustItems: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export function HeroContent({
  headline,
  subhead,
  trustItems,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroContentProps) {
  return (
    <motion.div
      className="space-y-6 md:space-y-7"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Badge>Viaggi di lusso in Italia</Badge>
      <h1 className="text-balance font-serif text-3xl font-semibold md:text-5xl">{headline}</h1>
      <p className="max-w-xl text-base text-[#c0b6a8] md:text-lg">{subhead}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/book">{primaryCtaLabel}</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link href="/fleet">{secondaryCtaLabel}</Link>
        </Button>
      </div>
      <div className="mt-6 grid gap-3 text-sm text-[#c0b6a8] md:mt-8 md:grid-cols-2">
        {trustItems.map((item) => (
          <div key={item} className="rounded-xl border border-border bg-muted/70 px-4 py-3">
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

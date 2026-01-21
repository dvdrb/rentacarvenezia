'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type HeroContentProps = {
  locale: string;
  headline: string;
  subhead: string;
  trustItems: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export function HeroContent({
  locale,
  headline,
  subhead,
  trustItems,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroContentProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Badge>Italian luxury travel</Badge>
      <h1 className="text-balance font-serif text-4xl font-semibold md:text-5xl">{headline}</h1>
      <p className="max-w-xl text-lg text-[#c0b6a8]">{subhead}</p>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link href={`/${locale}/book`}>{primaryCtaLabel}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={`/${locale}/fleet`}>{secondaryCtaLabel}</Link>
        </Button>
      </div>
      <div className="mt-8 grid gap-3 text-sm text-[#c0b6a8] md:grid-cols-2">
        {trustItems.map((item) => (
          <div key={item} className="rounded-xl border border-border bg-muted/70 px-4 py-3">
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

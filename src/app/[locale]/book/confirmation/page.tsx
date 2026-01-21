import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Confirmation | rentacarvenezia.it',
    description: 'Your booking request has been received.',
    alternates: { canonical: `/${params.locale}/book/confirmation` },
  };
}

export default function ConfirmationPage({ params }: { params: { locale: string } }) {
  return (
    <main className="container py-20">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/60 p-10 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-3xl font-serif">Request received</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Our concierge team will confirm availability shortly and send your request summary. For
          immediate assistance, contact us directly.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm">
          <a href="tel:+393445068823" className="text-accent hover:underline">
            Call +39 344 506 8823
          </a>
          <a href="https://wa.me/393445068823" className="text-accent hover:underline">
            WhatsApp chat
          </a>
          <a href="mailto:info@rentacarvenezia.it" className="text-accent hover:underline">
            info@rentacarvenezia.it
          </a>
        </div>
        <Button asChild className="mt-8">
          <Link href={`/${params.locale}`}>Return home</Link>
        </Button>
      </div>
    </main>
  );
}

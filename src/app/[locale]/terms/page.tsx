import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { InsuranceTabs } from '@/components/insurance-tabs';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Terms | rentacarvenezia.it',
    description: 'Rental conditions, insurance tiers, and mileage policy.',
    alternates: { canonical: `/${params.locale}/terms` },
  };
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Terms</p>
        <h1 className="mt-2 text-4xl font-serif">Rental conditions</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          Plain-English summary for confident travel decisions.
        </p>
      </div>

      <Card className="mt-10 p-6 text-sm text-[#c0b6a8]">
        <h2 className="text-base font-semibold text-foreground">Plain-English summary</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Minimum age: 23 years. Driver’s license held for at least 3 years.</li>
          <li>Daily mileage: 200 km/day with €0.20 per extra km.</li>
          <li>Insurance tiers: Basic (€0/day), Medium (€15/day), Premium (€25/day).</li>
          <li>Payment on pickup. No advance payment required.</li>
          <li>We may use GPS/satellite anti-theft monitoring for vehicle protection.</li>
        </ul>
      </Card>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Eligibility</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Minimum age is 23. The primary driver must hold a valid driving license for at least 3
            years.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Mileage policy</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            200 km/day included. Additional kilometers are charged at €0.20/km.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Insurance tiers</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Basic (€0/day), Medium (€15/day), Premium (€25/day). Deposits and excesses are
            communicated during confirmation.
          </p>
          <InsuranceTabs />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold">Security monitoring</h2>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Vehicles may be equipped with GPS/satellite anti-theft monitoring for operational and
            security compliance.
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm text-[#c0b6a8]">
        For full contractual details, please request the complete rental agreement by email or during
        pickup.{' '}
        <Link href={`/${params.locale}/contact`} className="text-accent hover:underline">
          Contact us
        </Link>
        .
      </p>
    </main>
  );
}

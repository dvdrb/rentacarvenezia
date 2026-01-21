import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Privacy | rentacarvenezia.it',
    description: 'Privacy policy for rentacarvenezia.it.',
    alternates: { canonical: `/${params.locale}/privacy` },
  };
}

export default function PrivacyPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Privacy</p>
        <h1 className="mt-2 text-4xl font-serif">Privacy policy</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          TODO: Insert the full privacy policy text and GDPR compliance details.
        </p>
      </div>
    </main>
  );
}

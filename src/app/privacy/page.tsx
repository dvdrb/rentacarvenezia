import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy | rentacarvenezia.it',
    description: 'Informativa privacy per rentacarvenezia.it.',
    alternates: { canonical: '/privacy' },
  };
}

export default function PrivacyPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Privacy</p>
        <h1 className="mt-2 text-4xl font-serif">Informativa privacy</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          TODO: Inserire il testo completo dell’informativa privacy e i dettagli GDPR.
        </p>
      </div>
    </main>
  );
}

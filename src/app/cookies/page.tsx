import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Cookies | rentacarvenezia.it',
    description: 'Informativa cookie per rentacarvenezia.it.',
    alternates: { canonical: '/cookies' },
  };
}

export default function CookiesPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Cookies</p>
        <h1 className="mt-2 text-4xl font-serif">Informativa cookie</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          TODO: Inserire le informazioni dettagliate sull’uso dei cookie e la gestione del consenso.
        </p>
      </div>
    </main>
  );
}

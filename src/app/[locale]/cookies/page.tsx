import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: 'Cookies | rentacarvenezia.it',
    description: 'Cookie policy for rentacarvenezia.it.',
    alternates: { canonical: `/${params.locale}/cookies` },
  };
}

export default function CookiesPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">Cookies</p>
        <h1 className="mt-2 text-4xl font-serif">Cookie policy</h1>
        <p className="mt-3 text-sm text-[#c0b6a8]">
          TODO: Provide detailed cookie usage information and consent management.
        </p>
      </div>
    </main>
  );
}

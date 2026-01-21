import Link from 'next/link';

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'LinkedIn', href: '#' }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold">rentacarvenezia.it</h3>
          <p className="mt-3 text-sm text-[#c0b6a8]">
            Premium rentals across Treviso and Venice Marco Polo Airport. Pay on pickup. No
            advance payment. Debit cards accepted.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>Phone / WhatsApp: +39 344 506 8823</p>
            <p>Email: info@rentacarvenezia.it</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Locations</h4>
          <p>Venice Marco Polo Airport, Arrival Hall 1</p>
          <p>Treviso Office: Via Le Canevare, 30, 31100 Treviso TV</p>
          <p>Treviso Airport Arrivals</p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Opening hours</h4>
          <p>Mon–Fri 08:00–17:00</p>
          <p>Online orders 24/7</p>
          <p>Emergency assistance 24/7</p>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-xs uppercase tracking-widest text-[#c0b6a8] hover:text-accent"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/80 py-6 text-center text-xs text-[#c0b6a8]">
        © {new Date().getFullYear()} rentacarvenezia.it — Luxury car rental in Veneto.
      </div>
    </footer>
  );
}

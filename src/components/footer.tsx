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
            Noleggio premium tra Treviso e Venezia Marco Polo. Pagamento al ritiro. Nessun
            anticipo. Carte di debito accettate.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>Telefono / WhatsApp: +39 344 506 8823</p>
            <p>Email: info@rentacarvenezia.it</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Sedi</h4>
          <p>Venezia Marco Polo, Arrivi 1</p>
          <p>Ufficio Treviso: Via Le Canevare, 30, 31100 Treviso TV</p>
          <p>Arrivi Aeroporto Treviso</p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold">Orari</h4>
          <p>Lun–Ven 08:00–17:00</p>
          <p>Ordini online 24/7</p>
          <p>Assistenza emergenze 24/7</p>
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
        © {new Date().getFullYear()} rentacarvenezia.it — Noleggio auto premium in Veneto.
      </div>
    </footer>
  );
}

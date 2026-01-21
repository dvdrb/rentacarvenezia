import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function WhatsappFab() {
  return (
    <Link
      href="https://wa.me/393445068823"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black shadow-soft transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  );
}

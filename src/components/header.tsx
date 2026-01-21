'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Flotta', href: '/fleet' },
  { label: 'Sedi', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Guida', href: '/guide' },
  { label: 'Contatti', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const normalizedPath = pathname === '' ? '/' : pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          rentacarvenezia<span className="text-accent">.it</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'text-sm text-[#c0b6a8] transition hover:text-accent',
                normalizedPath === item.href && 'text-accent'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link href="/book">Prenota ora</Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild variant="outline" size="sm">
            <Link href="/book">Prenota ora</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigazione</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'text-base text-[#c0b6a8] transition hover:text-accent',
                      normalizedPath === item.href && 'text-accent'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

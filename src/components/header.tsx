'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { locales } from '@/i18n/request';
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
  { key: 'home', href: '/' },
  { key: 'fleet', href: '/fleet' },
  { key: 'locations', href: '/locations' },
  { key: 'faq', href: '/faq' },
  { key: 'guide', href: '/guide' },
  { key: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const locale = pathname.split('/')[1] || 'en';
  const normalizedPath = `/${pathname.split('/').slice(2).join('/')}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          rentacarvenezia<span className="text-accent">.it</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className={cn(
                'text-sm text-[#c0b6a8] transition hover:text-accent',
                normalizedPath === item.href && 'text-accent'
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs uppercase tracking-widest text-[#c0b6a8]">
            <Globe className="h-3.5 w-3.5" />
            <select
              aria-label="Select language"
              className="bg-transparent text-xs uppercase tracking-widest text-[#c0b6a8] focus:outline-none"
              value={locale}
              onChange={(event) => {
                const newLocale = event.target.value;
                window.location.href = `/${newLocale}${normalizedPath}`;
              }}
            >
              {locales.map((loc) => (
                <option key={loc} value={loc} className="bg-background text-foreground">
                  {loc.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <Button asChild size="sm">
            <Link href={`/${locale}/book`}>{t('book')}</Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild variant="outline" size="sm">
            <Link href={`/${locale}/book`}>{t('book')}</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className={cn(
                      'text-base text-[#c0b6a8] transition hover:text-accent',
                      normalizedPath === item.href && 'text-accent'
                    )}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <div className="mt-6 flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs uppercase tracking-widest text-[#c0b6a8]">
                  <Globe className="h-3.5 w-3.5" />
                  <select
                    aria-label="Select language"
                    className="bg-transparent text-xs uppercase tracking-widest text-[#c0b6a8] focus:outline-none"
                    value={locale}
                    onChange={(event) => {
                      const newLocale = event.target.value;
                      window.location.href = `/${newLocale}${normalizedPath}`;
                    }}
                  >
                    {locales.map((loc) => (
                      <option key={loc} value={loc} className="bg-background text-foreground">
                        {loc.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

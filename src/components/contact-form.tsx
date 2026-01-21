'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, 'Inserisci il tuo nome.'),
  email: z.string().email('Inserisci un’email valida.'),
  message: z.string().min(10, 'Raccontaci la tua richiesta.'),
  honey: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '', honey: '' },
  });

  const onSubmit = async (values: ContactValues) => {
    if (values.honey) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    form.reset();
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold">Invia un messaggio</h2>
      <p className="mt-2 text-sm text-[#c0b6a8]">TODO: collegare email/CRM in produzione.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <label className="flex flex-col gap-2 text-sm">
          Nome
          <input
            className="h-11 rounded-full border border-border bg-background px-4"
            {...form.register('name')}
          />
          <span className="text-xs text-[#c0b6a8]">{form.formState.errors.name?.message}</span>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            type="email"
            className="h-11 rounded-full border border-border bg-background px-4"
            {...form.register('email')}
          />
          <span className="text-xs text-[#c0b6a8]">{form.formState.errors.email?.message}</span>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Messaggio
          <textarea
            rows={4}
            className="rounded-2xl border border-border bg-background px-4 py-3"
            {...form.register('message')}
          />
          <span className="text-xs text-[#c0b6a8]">{form.formState.errors.message?.message}</span>
        </label>
        <input type="text" className="hidden" tabIndex={-1} {...form.register('honey')} />
        <Button type="submit">Invia messaggio</Button>
      </form>
    </Card>
  );
}

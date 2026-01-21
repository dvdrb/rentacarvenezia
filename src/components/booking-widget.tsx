'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { vehicles } from '@/data/vehicles';
import { locations } from '@/data/locations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { estimateTotal, insuranceRates, type InsuranceTier } from '@/lib/pricing';

const bookingSchema = z
  .object({
    pickupLocation: z.string().min(1, 'Seleziona il luogo di ritiro.'),
    dropoffLocation: z.string().min(1, 'Seleziona il luogo di consegna.'),
    pickupDate: z.string().min(1, 'Seleziona la data di ritiro.'),
    pickupTime: z.string().min(1, 'Seleziona l’orario di ritiro.'),
    dropoffDate: z.string().min(1, 'Seleziona la data di consegna.'),
    dropoffTime: z.string().min(1, 'Seleziona l’orario di consegna.'),
    driverAge: z.coerce.number().min(23, 'Il conducente deve avere almeno 23 anni.'),
    vehicle: z.string().optional(),
    insurance: z.enum(['Basic', 'Medium', 'Premium']),
    notes: z.string().optional(),
    honey: z.string().optional(),
  })
  .refine(
    (data) => {
      const pickup = new Date(`${data.pickupDate}T${data.pickupTime}`);
      const dropoff = new Date(`${data.dropoffDate}T${data.dropoffTime}`);
      return dropoff > pickup;
    },
    {
      message: 'La consegna deve essere successiva al ritiro.',
      path: ['dropoffDate'],
    }
  );

export type BookingFormValues = z.infer<typeof bookingSchema>;

const timeOptions = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];

type BookingWidgetProps = {
  vehicleSlug?: string;
  className?: string;
  requireVehicle?: boolean;
};

export function BookingWidget({ vehicleSlug, className, requireVehicle = false }: BookingWidgetProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(
      bookingSchema.refine(
        (values) => (requireVehicle ? Boolean(values.vehicle) : true),
        { message: 'Seleziona un veicolo.', path: ['vehicle'] }
      )
    ),
    defaultValues: {
      pickupLocation: locations[0]?.id ?? '',
      dropoffLocation: locations[0]?.id ?? '',
      pickupTime: '10:00',
      dropoffTime: '10:00',
      driverAge: 23,
      vehicle: vehicleSlug ?? '',
      insurance: 'Basic',
      notes: '',
      honey: '',
    },
  });

  const { watch } = form;
  const watchValues = watch();
  const selectedVehicle = vehicles.find((vehicle) => vehicle.slug === watchValues.vehicle);

  const estimate = React.useMemo(() => {
    if (!selectedVehicle || !watchValues.pickupDate || !watchValues.dropoffDate) {
      return null;
    }
    const pickup = new Date(`${watchValues.pickupDate}T${watchValues.pickupTime}`);
    const dropoff = new Date(`${watchValues.dropoffDate}T${watchValues.dropoffTime}`);
    if (Number.isNaN(pickup.getTime()) || Number.isNaN(dropoff.getTime())) {
      return null;
    }
    const rentalDays = Math.max(
      1,
      Math.ceil((dropoff.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24))
    );
    return estimateTotal(selectedVehicle, rentalDays, watchValues.insurance as InsuranceTier);
  }, [selectedVehicle, watchValues]);

  const onSubmit = async (values: BookingFormValues) => {
    if (values.honey) {
      return;
    }
    await fetch('/api/booking-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    window.location.href = '/book/confirmation';
  };

  return (
    <Card className={cn('p-6', className)}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Richiedi disponibilità</h3>
        <p className="text-sm text-[#c0b6a8]">
          Nessun pagamento anticipato. Conferma rapida via WhatsApp, telefono o email.
        </p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Luogo di ritiro
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('pickupLocation')}
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Luogo di consegna
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('dropoffLocation')}
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Data ritiro
            <input
              type="date"
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('pickupDate')}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Orario ritiro
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('pickupTime')}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Data consegna
            <input
              type="date"
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('dropoffDate')}
            />
            <span className="text-xs text-[#c0b6a8]">{form.formState.errors.dropoffDate?.message}</span>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Orario consegna
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('dropoffTime')}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-2 text-sm">
            Età conducente
            <input
              type="number"
              min={23}
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('driverAge')}
            />
            <span className="text-xs text-[#c0b6a8]">{form.formState.errors.driverAge?.message}</span>
          </label>
          <label className="flex flex-col gap-2 text-sm md:col-span-2">
            Veicolo
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('vehicle')}
            >
              <option value="">Seleziona un veicolo</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.slug}>
                  {vehicle.name}
                </option>
              ))}
            </select>
            <span className="text-xs text-[#c0b6a8]">{form.formState.errors.vehicle?.message}</span>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            Assicurazione
            <select
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('insurance')}
            >
              {Object.entries(insuranceRates).map(([tier, rate]) => (
                <option key={tier} value={tier}>
                  {tier} (+€{rate}/giorno)
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Note
            <input
              type="text"
              placeholder="Numero volo, note di consegna"
              className="h-11 rounded-full border border-border bg-background px-4"
              {...form.register('notes')}
            />
          </label>
        </div>
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register('honey')} />
        <div className="rounded-xl border border-border bg-muted/60 p-4 text-sm">
          <div className="flex items-center justify-between text-base font-semibold">
            <span>Totale stimato</span>
            <span>{estimate ? `€${estimate.total.toFixed(0)}` : '—'}</span>
          </div>
          <p className="mt-2 text-xs text-[#c0b6a8]">
            Conferma finale da parte del team. Pagamento al ritiro, nessun anticipo.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#c0b6a8]">
            <span>Il deposito varia in base a veicolo e copertura.</span>
            <Dialog>
              <DialogTrigger className="text-accent hover:underline">Guida deposito</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Guida deposito</DialogTitle>
                  <DialogDescription>
                    Deposito e franchigia variano in base alla classe del veicolo e al livello di
                    copertura. Comunichiamo sempre gli importi esatti prima del ritiro.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Button type="submit" size="lg">
          Invia richiesta
        </Button>
      </form>
    </Card>
  );
}

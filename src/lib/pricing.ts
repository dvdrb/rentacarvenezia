import type { RateBucket, Vehicle } from '@/data/vehicles';

export type InsuranceTier = 'Basic' | 'Medium' | 'Premium';

export const insuranceRates: Record<InsuranceTier, number> = {
  Basic: 0,
  Medium: 15,
  Premium: 25,
};

export function calculateRentalDays(start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.max(days, 1);
}

export function selectRateBucket(rates: RateBucket[], rentalDays: number) {
  return (
    rates.find((rate) => {
      if (rate.maxDays === undefined) {
        return rentalDays >= rate.minDays;
      }
      return rentalDays >= rate.minDays && rentalDays <= rate.maxDays;
    }) ?? rates[0]
  );
}

export function estimateTotal(
  vehicle: Vehicle,
  rentalDays: number,
  insuranceTier: InsuranceTier
) {
  const bucket = selectRateBucket(vehicle.rates, rentalDays);
  const base = bucket.pricePerDay * rentalDays;
  const insurance = insuranceRates[insuranceTier] * rentalDays;
  return {
    bucket,
    base,
    insurance,
    total: base + insurance,
  };
}

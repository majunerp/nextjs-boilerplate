import type { TipCalculation } from '@/types';

/**
 * Calculate tip amount and totals
 * @param billAmount - The bill amount before tip
 * @param tipPercentage - The tip percentage (0-100)
 * @param numberOfPeople - Number of people to split the bill
 * @returns Calculation results
 */
export function calculateTip(
  billAmount: number,
  tipPercentage: number,
  numberOfPeople: number = 1
): TipCalculation {
  // Validate inputs
  const validBill = Math.max(0, billAmount);
  const validTip = Math.max(0, Math.min(100, tipPercentage));
  const validPeople = Math.max(1, Math.floor(numberOfPeople));

  // Calculate tip and totals
  const tipAmount = (validBill * validTip) / 100;
  const totalAmount = validBill + tipAmount;
  const perPersonBill = validBill / validPeople;
  const perPersonTip = tipAmount / validPeople;
  const perPersonTotal = totalAmount / validPeople;

  return {
    billAmount: round(validBill),
    tipPercentage: validTip,
    tipAmount: round(tipAmount),
    totalAmount: round(totalAmount),
    numberOfPeople: validPeople,
    perPersonBill: round(perPersonBill),
    perPersonTip: round(perPersonTip),
    perPersonTotal: round(perPersonTotal),
  };
}

/**
 * Round a number to 2 decimal places
 */
function round(value: number): number {
  return Math.round(value * 100) / 100;
}

/**
 * Calculate tip percentage from tip amount and bill
 */
export function calculateTipPercentage(
  billAmount: number,
  tipAmount: number
): number {
  if (billAmount <= 0) return 0;
  return round((tipAmount / billAmount) * 100);
}

/**
 * Quick tip calculation shortcuts
 */
export const quickTipCalculations = {
  // Calculate 10% tip (move decimal one place)
  tip10: (amount: number) => round(amount * 0.1),

  // Calculate 15% tip (10% + half of 10%)
  tip15: (amount: number) => round(amount * 0.15),

  // Calculate 20% tip (10% doubled)
  tip20: (amount: number) => round(amount * 0.2),
};

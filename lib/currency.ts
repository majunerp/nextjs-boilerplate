import type { Currency, CurrencyConfig } from '@/types';

/**
 * Currency configurations
 */
export const currencies: Record<Currency, CurrencyConfig> = {
  USD: {
    symbol: '$',
    code: 'USD',
    name: 'US Dollar',
    decimals: 2,
  },
  EUR: {
    symbol: '€',
    code: 'EUR',
    name: 'Euro',
    decimals: 2,
  },
  GBP: {
    symbol: '£',
    code: 'GBP',
    name: 'British Pound',
    decimals: 2,
  },
  CAD: {
    symbol: 'C$',
    code: 'CAD',
    name: 'Canadian Dollar',
    decimals: 2,
  },
  AUD: {
    symbol: 'A$',
    code: 'AUD',
    name: 'Australian Dollar',
    decimals: 2,
  },
  JPY: {
    symbol: '¥',
    code: 'JPY',
    name: 'Japanese Yen',
    decimals: 0,
  },
};

/**
 * Format amount as currency
 */
export function formatCurrency(
  amount: number,
  currency: Currency = 'USD'
): string {
  const config = currencies[currency];

  // For JPY (no decimals), round to nearest integer
  if (config.decimals === 0) {
    return `${config.symbol}${Math.round(amount).toLocaleString()}`;
  }

  // For other currencies, format with 2 decimals
  return `${config.symbol}${amount.toFixed(config.decimals)}`;
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency: Currency): string {
  return currencies[currency].symbol;
}

/**
 * Parse currency input string to number
 */
export function parseCurrencyInput(input: string): number {
  // Remove currency symbols and whitespace
  const cleaned = input.replace(/[$€£¥,\s]/g, '');
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

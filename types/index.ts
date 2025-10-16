// Type definitions for Tip Calculator

export interface TipCalculation {
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  numberOfPeople: number;
  perPersonTotal: number;
  perPersonTip: number;
  perPersonBill: number;
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  numberOfPeople: number;
  currency: Currency;
  scene: TipScene;
}

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY';

export type TipScene = 'restaurant' | 'delivery' | 'taxi' | 'beauty';

export interface CurrencyConfig {
  symbol: string;
  code: string;
  name: string;
  decimals: number;
}

export interface SceneConfig {
  key: TipScene;
  name: string;
  description: string;
  recommendedPercentages: number[];
  defaultPercentage: number;
}

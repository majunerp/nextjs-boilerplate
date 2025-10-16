'use client';

import React, { useState, useEffect } from 'react';
import type { Currency, TipScene, TipCalculation } from '@/types';
import { calculateTip } from '@/lib/calculations';
import { formatCurrency, currencies } from '@/lib/currency';
import { saveToHistory } from '@/lib/storage';
import { scenes } from '@/lib/scenes';
import { Button } from '@/components/ui/Button';

interface TipCalculatorProps {
  initialScene?: TipScene;
  showHistory?: boolean;
}

export function TipCalculator({ initialScene = 'restaurant', showHistory = true }: TipCalculatorProps) {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<number>(18);
  const [customTip, setCustomTip] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [scene, setScene] = useState<TipScene>(initialScene);
  const [result, setResult] = useState<TipCalculation | null>(null);

  // Update tip percentage when scene changes
  useEffect(() => {
    setTipPercentage(scenes[scene].defaultPercentage);
  }, [scene]);

  // Calculate results whenever inputs change
  useEffect(() => {
    const amount = parseFloat(billAmount) || 0;
    if (amount > 0) {
      const calc = calculateTip(amount, tipPercentage, numberOfPeople);
      setResult(calc);
    } else {
      setResult(null);
    }
  }, [billAmount, tipPercentage, numberOfPeople]);

  const handleTipPercentageChange = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip('');
  };

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value);
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      setTipPercentage(num);
    }
  };

  const handleSave = () => {
    if (result) {
      saveToHistory({
        billAmount: result.billAmount,
        tipPercentage: result.tipPercentage,
        tipAmount: result.tipAmount,
        totalAmount: result.totalAmount,
        numberOfPeople: result.numberOfPeople,
        currency,
        scene,
      });
    }
  };

  const sceneConfig = scenes[scene];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {/* Scene Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scene
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.values(scenes).map((s) => (
              <button
                key={s.key}
                onClick={() => setScene(s.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scene === s.key
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bill Amount Input */}
        <div className="mb-6">
          <label htmlFor="billAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Bill Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              {currencies[currency].symbol}
            </span>
            <input
              id="billAmount"
              type="number"
              step="0.01"
              min="0"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-10 pr-24 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="absolute right-2 top-1/2 -translate-y-1/2 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {Object.values(currencies).map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tip Percentage Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tip Percentage
          </label>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {sceneConfig.recommendedPercentages.map((pct) => (
              <button
                key={pct}
                onClick={() => handleTipPercentageChange(pct)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  tipPercentage === pct && !customTip
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={customTip}
              onChange={(e) => handleCustomTipChange(e.target.value)}
              placeholder="Custom %"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="text-gray-500">%</span>
          </div>
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
            Split Between
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
              className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-medium"
            >
              −
            </button>
            <input
              id="numberOfPeople"
              type="number"
              min="1"
              max="99"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1))}
              className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={() => setNumberOfPeople(Math.min(99, numberOfPeople + 1))}
              className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl font-medium"
            >
              +
            </button>
            <span className="text-gray-600 min-w-[60px]">
              {numberOfPeople === 1 ? 'person' : 'people'}
            </span>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Tip Amount</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(result.tipAmount, currency)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-3xl font-bold text-gray-900">
                  {formatCurrency(result.totalAmount, currency)}
                </span>
              </div>
            </div>

            {numberOfPeople > 1 && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <h3 className="font-medium text-gray-900 mb-3">Per Person</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Bill</span>
                  <span className="font-medium">{formatCurrency(result.perPersonBill, currency)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tip</span>
                  <span className="font-medium">{formatCurrency(result.perPersonTip, currency)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-900 font-medium">Total</span>
                  <span className="text-xl font-bold text-gray-900">
                    {formatCurrency(result.perPersonTotal, currency)}
                  </span>
                </div>
              </div>
            )}

            {showHistory && (
              <Button onClick={handleSave} className="w-full" variant="outline">
                Save to History
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

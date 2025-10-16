'use client';

import React, { useState, useEffect } from 'react';
import type { HistoryItem } from '@/types';
import { getHistory, deleteHistoryItem, clearHistory } from '@/lib/storage';
import { formatCurrency } from '@/lib/currency';
import { Button } from '@/components/ui/Button';

export function HistoryList() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    setHistory(getHistory());
  };

  const handleDelete = (id: string) => {
    deleteHistoryItem(id);
    loadHistory();
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      clearHistory();
      loadHistory();
    }
  };

  if (history.length === 0) {
    return null;
  }

  const displayHistory = showAll ? history : history.slice(0, 5);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Calculation History</h2>
          {history.length > 0 && (
            <Button
              onClick={handleClearAll}
              variant="ghost"
              size="sm"
              className="text-red-600 hover:bg-red-50"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-3">
          {displayHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(item.totalAmount, item.currency)}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({item.tipPercentage}% tip)
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Bill: {formatCurrency(item.billAmount, item.currency)} •
                  Tip: {formatCurrency(item.tipAmount, item.currency)}
                  {item.numberOfPeople > 1 && ` • ${item.numberOfPeople} people`}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(item.timestamp).toLocaleDateString()} {new Date(item.timestamp).toLocaleTimeString()}
                </div>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="ml-4 text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Delete"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {history.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-4 text-green-600 hover:text-green-700 font-medium text-sm"
          >
            {showAll ? 'Show Less' : `Show All (${history.length} items)`}
          </button>
        )}
      </div>
    </div>
  );
}

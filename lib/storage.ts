import type { HistoryItem } from '@/types';

const STORAGE_KEY = 'tip_calculator_history';
const MAX_HISTORY_ITEMS = 20;

/**
 * Get calculation history from localStorage
 */
export function getHistory(): HistoryItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const history = JSON.parse(stored) as HistoryItem[];
    return history.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    console.error('Error reading history:', error);
    return [];
  }
}

/**
 * Save calculation to history
 */
export function saveToHistory(item: Omit<HistoryItem, 'id' | 'timestamp'>): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getHistory();

    const newItem: HistoryItem = {
      ...item,
      id: generateId(),
      timestamp: Date.now(),
    };

    // Add to beginning, keep only MAX_HISTORY_ITEMS
    const updated = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving to history:', error);
  }
}

/**
 * Delete a history item by ID
 */
export function deleteHistoryItem(id: string): void {
  if (typeof window === 'undefined') return;

  try {
    const history = getHistory();
    const updated = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error deleting history item:', error);
  }
}

/**
 * Clear all history
 */
export function clearHistory(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing history:', error);
  }
}

/**
 * Generate a unique ID for history items
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Scene preferences
 */
const SCENE_KEY = 'tip_calculator_scene';

export function getLastScene(): string {
  if (typeof window === 'undefined') return 'restaurant';

  try {
    return localStorage.getItem(SCENE_KEY) || 'restaurant';
  } catch {
    return 'restaurant';
  }
}

export function saveLastScene(scene: string): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(SCENE_KEY, scene);
  } catch (error) {
    console.error('Error saving scene:', error);
  }
}

import type { SceneConfig, TipScene } from '@/types';

export const scenes: Record<TipScene, SceneConfig> = {
  restaurant: {
    key: 'restaurant',
    name: 'Restaurant',
    description: 'For dining in restaurants',
    recommendedPercentages: [15, 18, 20, 25],
    defaultPercentage: 18,
  },
  delivery: {
    key: 'delivery',
    name: 'Delivery',
    description: 'For food delivery services',
    recommendedPercentages: [10, 15, 18, 20],
    defaultPercentage: 15,
  },
  taxi: {
    key: 'taxi',
    name: 'Taxi/Ride',
    description: 'For taxi and rideshare services',
    recommendedPercentages: [10, 15, 18, 20],
    defaultPercentage: 15,
  },
  beauty: {
    key: 'beauty',
    name: 'Beauty/Spa',
    description: 'For salon and spa services',
    recommendedPercentages: [15, 18, 20, 25],
    defaultPercentage: 20,
  },
};

export function getSceneConfig(scene: TipScene): SceneConfig {
  return scenes[scene];
}

export function getAllScenes(): SceneConfig[] {
  return Object.values(scenes);
}

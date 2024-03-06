import { Category } from '@/types/definitions';

import categoriesMockData from '@/data/categories/categories.json';

export async function getCategoriesService(): Promise<Category[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return categoriesMockData;
}

import { Category, Movie } from '@/types/definitions';
import { getRandomNumber } from '@/utils/utils';

import adventureMovies from '@/data/categories/12.json';
import animationMovies from '@/data/categories/16.json';
import actionMovies from '@/data/categories/28.json';
import comedyMovies from '@/data/categories/35.json';
import historyMovies from '@/data/categories/36.json';
import categoriesMockData from '@/data/categories/categories.json';

export async function getCategoriesService(): Promise<Category[]> {
  await new Promise((resolve) =>
    setTimeout(resolve, getRandomNumber({ min: 200, max: 500 })),
  );

  return categoriesMockData;
}

type categoryMockData = {
  id: number;
  name: string;
  pages: Movie[][];
};

const categoriesMoviesMockData: Record<string, categoryMockData> = {
  '12': adventureMovies,
  '16': animationMovies,
  '28': actionMovies,
  '35': comedyMovies,
  '36': historyMovies,
};

interface CategoryMoviesResponse {
  id: string;
  name: string;
  movies: Movie[];
  next: number | null;
}

export async function getMoviesByCategoryService(
  categoryId: string,
  page: number = 1,
): Promise<CategoryMoviesResponse> {
  await new Promise((resolve) =>
    setTimeout(resolve, getRandomNumber({ min: 200, max: 500 })),
  );

  if (!categoriesMoviesMockData[categoryId]) {
    throw new Error('Category not found');
  }

  const categoryData = categoriesMoviesMockData[categoryId];

  const requiredPageExists = categoryData.pages.length >= page;
  if (!requiredPageExists) throw new Error('Page not found');

  const movies = categoryData.pages[page - 1];
  const hasNextPage = categoryData.pages.length > page;

  return {
    id: categoryId,
    name: categoryData.name,
    movies,
    next: hasNextPage ? page + 1 : null,
  };
}

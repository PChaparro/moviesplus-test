import { Category, Movie } from '@/types/definitions';
import { getRandomNumber, randomizeArray } from '@/utils/utils';

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
    throw new Error(
      'The category you are looking for does not exist. Check all available categories and try again.',
    );
  }

  const categoryData = categoriesMoviesMockData[categoryId];

  const requiredPageExists = categoryData.pages.length >= page;

  if (!requiredPageExists) {
    throw new Error(
      'The page you are looking for does not exist. Check all available pages or explore other categories.',
    );
  }

  const movies = categoryData.pages[page - 1];
  const hasNextPage = categoryData.pages.length > page;

  return {
    id: categoryId,
    name: categoryData.name,
    movies,
    next: hasNextPage ? page + 1 : null,
  };
}

export async function getMovieByIdService(movieId: string): Promise<Movie> {
  // Merge all categories (Since we don't know the category of the movie)
  const allCategoriesPages = Object.values(categoriesMoviesMockData).map(
    (category) => category.pages,
  );
  const allMovies = allCategoriesPages.flat(2);

  // Find the movie
  const movie = allMovies.find((movie) => String(movie.id) === movieId);

  if (!movie) {
    throw new Error(
      'We could not find the movie you are looking for. Explore other movies from our categories instead.',
    );
  }

  return movie;
}

export async function getRandomMoviesByCategoryService(categoryId: string) {
  if (!categoriesMoviesMockData[categoryId]) {
    throw new Error(
      'The category you are looking for does not exist. Check all available categories and try again.',
    );
  }

  const allMoviesInCategory =
    categoriesMoviesMockData[categoryId].pages.flat(2);

  const randomMovies = randomizeArray(allMoviesInCategory).slice(0, 10);
  return randomMovies;
}

export async function getSimilarMoviesService(
  movieId: string,
): Promise<Movie[]> {
  // Find the category of the movie
  const allCategoriesPages = Object.values(categoriesMoviesMockData);

  const movieCategory = allCategoriesPages.find((category) =>
    category.pages.flat(2).some((movie) => String(movie.id) === movieId),
  );

  if (!movieCategory) {
    throw new Error(
      'We could not find the category of the movie you are looking for. Explore other movies from our categories instead.',
    );
  }

  return getRandomMoviesByCategoryService(String(movieCategory.id));
}

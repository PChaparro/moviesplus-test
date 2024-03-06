import { getMoviesByCategoryService } from '@/services/categories.services';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseCategoryMoviesProps {
  categoryId: string;
}

export const useCategoryMovies = ({ categoryId }: UseCategoryMoviesProps) => {
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['category-movies', categoryId],
    queryFn: ({ pageParam }) =>
      getMoviesByCategoryService(categoryId, pageParam),
    getNextPageParam: (lastPage) => lastPage.next,
    initialPageParam: 1,
  });

  const movies = data?.pages.flatMap((page) => page.movies);
  const categoryName = data?.pages[0].name;

  return {
    isLoading,
    movies,
    category: {
      id: categoryId,
      name: categoryName,
    },
    hasNextPage,
    fetchNextPage,
  };
};

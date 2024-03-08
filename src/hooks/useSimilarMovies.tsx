import { getSimilarMoviesService } from '@/services/categories.services';
import { useQuery } from '@tanstack/react-query';

export const useSimilarMovies = (movieId: string) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['similarMovies', movieId],
    queryFn: () => getSimilarMoviesService(movieId),
  });

  return {
    isLoading,
    isError,
    error,
    similarMovies: data,
  };
};

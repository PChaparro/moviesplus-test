import { getMovieByIdService } from '@/services/categories.services';
import { useQuery } from '@tanstack/react-query';

export const useMovie = (movieId: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieByIdService(movieId),
  });

  return {
    movie: data,
    isLoading,
    isError,
    error,
  };
};

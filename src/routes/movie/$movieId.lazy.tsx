import { createLazyFileRoute } from '@tanstack/react-router';

import { useMovie } from '@/hooks/useMovie';
import { useSimilarMovies } from '@/hooks/useSimilarMovies';

import { ContentDetails } from '@/components/movie/ContentDetails';
import { MoviePageSkeleton } from '@/components/movie/MoviePageSkeleton';
import { CustomError } from '@/components/shared/error/CustomError';
import { MoviesSliderSection } from '@/components/shared/moviesSlider/MoviesSliderSection';
import { AuthenticationMiddleware } from '@/components/shared/session/AuthenticationMiddleware';

export const Route = createLazyFileRoute('/movie/$movieId')({
  component: () => (
    <AuthenticationMiddleware isExclusiveForLoggedUsers>
      <Page />
    </AuthenticationMiddleware>
  ),
  pendingComponent: MoviePageSkeleton,
});

function Page() {
  const { movieId } = Route.useParams();

  // Get the movie data
  const {
    movie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie,
  } = useMovie(movieId);

  // Get similar movies
  const {
    similarMovies,
    isLoading: isLoadingSimilarMovies,
    isError: isErrorSimilarMovies,
  } = useSimilarMovies(movieId);

  if (isErrorMovie) return <CustomError message={errorMovie?.message} />;

  return (
    <main className='container'>
      <ContentDetails isLoading={isLoadingMovie} movie={movie} />
      <MoviesSliderSection
        isLoading={isLoadingSimilarMovies}
        isError={isErrorSimilarMovies}
        movies={similarMovies}
        title='Similar movies'
      />
    </main>
  );
}

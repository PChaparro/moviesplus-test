import { createLazyFileRoute } from '@tanstack/react-router';

import { useMovie } from '@/hooks/useMovie';
import { useSimilarMovies } from '@/hooks/useSimilarMovies';

import { ContentDetails } from '@/components/movie/ContentDetails';
import { MoviePageSkeleton } from '@/components/movie/MoviePageSkeleton';
import { CustomError } from '@/components/shared/error/CustomError';
import { MoviesSliderSection } from '@/components/shared/moviesSlider/MoviesSliderSection';

export const Route = createLazyFileRoute('/movie/$movieId')({
  component: Page,
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
  const { similarMovies, isLoading: isLoadingSimilarMovies } =
    useSimilarMovies(movieId);

  if (isErrorMovie) return <CustomError message={errorMovie?.message} />;

  return (
    <main className='container'>
      <ContentDetails isLoading={isLoadingMovie} movie={movie} />
      <MoviesSliderSection
        isLoading={isLoadingSimilarMovies}
        movies={similarMovies}
        title='Similar movies'
      />
    </main>
  );
}

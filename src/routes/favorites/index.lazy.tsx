import { createLazyFileRoute } from '@tanstack/react-router';

import { useFavoriteMovies } from '@/hooks/useFavoriteMovies';

import { CustomError } from '@/components/shared/error/CustomError';
import { MovieCard } from '@/components/shared/movieCard/MovieCard';
import { AuthenticationMiddleware } from '@/components/shared/session/AuthenticationMiddleware';

export const Route = createLazyFileRoute('/favorites/')({
  component: () => (
    <AuthenticationMiddleware isExclusiveForLoggedUsers>
      <Page />
    </AuthenticationMiddleware>
  ),
  // pendingComponent: MoviePageSkeleton,
});

function Page() {
  const { favorites } = useFavoriteMovies();
  const hasFavorites = favorites.length > 0;

  if (!hasFavorites) {
    return (
      <CustomError
        title="You don't have any favorite movies yet"
        message='Explore our catalog and mark the movies you like as favorites to see them here.'
      />
    );
  }

  return (
    <main className='container'>
      <h1 className='text-4xl font-semibold text-white'>
        Your Favorite Movies
      </h1>
      <ul className='cards-grid mt-8'>
        {favorites.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}

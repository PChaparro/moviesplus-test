import { Movie } from '@/types/definitions';
import { HeartIcon } from 'lucide-react';

import { useFavoriteMovies } from '@/hooks/useFavoriteMovies';

interface MovieFavoriteButtonProps {
  movie: Movie;
}

export const MovieFavoriteButton = ({ movie }: MovieFavoriteButtonProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavoriteMovies();
  const isMovieFavorite = isFavorite(String(movie.id));

  return (
    <button
      className='absolute right-2 top-2 z-10 rounded-full bg-brand-bg/35 p-2'
      onClick={(event) => {
        // Since the button is inside a link, instead of stopping the event propagation
        // we prevent the default behavior to avoid the navigation.
        event.preventDefault();

        if (isMovieFavorite) {
          removeFavorite(String(movie.id));
        } else {
          addFavorite(movie);
        }
      }}
      aria-label={
        isMovieFavorite
          ? `Remove ${movie.title} from favorites`
          : `Add ${movie.title} to favorites`
      }
    >
      <HeartIcon fill={isMovieFavorite ? '#f51434' : 'transparent'} size={28} />
    </button>
  );
};

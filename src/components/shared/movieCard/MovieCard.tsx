import { Movie } from '@/types/definitions';
import { getPosterUrlByPath, roundDecimal } from '@/utils/utils';
import { Link } from '@tanstack/react-router';
import { Rating } from 'react-simple-star-rating';

import { useSession } from '@/hooks/useSession';

import { MovieFavoriteButton } from './MovieFavoriteButton';

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const { isLoggedIn } = useSession();
  const parsedVoteAverage = roundDecimal(movie.vote_average / 2, 2);

  return (
    <Link to='/movie/$movieId' params={{ movieId: String(movie.id) }}>
      <article className='group relative w-full overflow-hidden rounded-md text-white'>
        <img
          className='aspect-[2/3] w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105'
          src={getPosterUrlByPath(movie.poster_path)}
          alt={movie.title}
        />
        {isLoggedIn && <MovieFavoriteButton movie={movie} />}
        <div className='absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-b from-transparent from-50% to-brand-bg/85 to-75% p-8'>
          <h2 className='text-xl font-semibold'>{movie.title}</h2>
          <div className='flex flex-wrap justify-between gap-2'>
            <Rating
              SVGclassName='inline-block'
              initialValue={parsedVoteAverage}
              size={20}
              readonly
              allowFraction
            />
            <span>
              {parsedVoteAverage} ({movie.vote_count})
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

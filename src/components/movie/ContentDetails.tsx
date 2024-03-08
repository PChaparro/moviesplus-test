import { Movie } from '@/types/definitions';

import { MovieHeader } from './MovieHeader';

export const ContentDetails = ({ movie }: { movie: Movie }) => {
  const genresNames = movie.genres.map((genre) => genre.name);

  return (
    <article>
      <MovieHeader
        backdrop_path={movie.backdrop_path}
        overview={movie.overview}
        title={movie.title}
        votes={{
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        }}
      >
        <p className='text-lg text-white/85'>{genresNames.join(', ')}.</p>
      </MovieHeader>
    </article>
  );
};

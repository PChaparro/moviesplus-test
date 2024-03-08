import { Movie } from '@/types/definitions';
import { Link } from '@tanstack/react-router';
import { MoveRightIcon } from 'lucide-react';

import { MoviesSlider } from './MoviesSlider';

interface MoviesSliderProps {
  isLoading: boolean;
  movies: Movie[] | undefined;
  title: string;
  redirect?: {
    title: string;
    to: string;
  };
}

export const MoviesSliderSection = ({
  isLoading,
  movies,
  title,
  redirect,
}: MoviesSliderProps) => {
  return (
    <section className='mt-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='text-4xl font-semibold text-white'>{title}</h2>
        {redirect && (
          <Link
            to={redirect.to}
            className='inline-flex items-center gap-2 text-lg text-brand-primary'
          >
            {redirect.title}
            <MoveRightIcon />
          </Link>
        )}
      </div>
      <MoviesSlider movies={movies} isLoading={isLoading} />
    </section>
  );
};

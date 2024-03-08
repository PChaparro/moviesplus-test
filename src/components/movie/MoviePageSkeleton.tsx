import Skeleton from 'react-loading-skeleton';

import { MovieHeaderSkeleton } from '../shared/MovieHeader/MovieHeaderSkeleton';
import { MoviesGridSkeleton } from '../shared/movieCard/MoviesGridSkeleton';

export const MoviePageSkeleton = () => {
  return (
    <div className='container'>
      <MovieHeaderSkeleton />
      <div className='mt-8'>
        <div className='mb-8 flex items-center justify-between'>
          {/* Section title*/}
          <Skeleton width={275} height={40} />
        </div>
        {/* Section movies*/}
        <MoviesGridSkeleton count={4} />
      </div>
    </div>
  );
};

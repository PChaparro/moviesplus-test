import Skeleton from 'react-loading-skeleton';

import { MoviesGridSkeleton } from '../shared/movieCard/MoviesGridSkeleton';

export const FavoritesPageSkeleton = () => {
  return (
    <div className='container'>
      {/* Title placeholder */}
      <Skeleton height={40} width={380} className='max-w-full' />
      <MoviesGridSkeleton count={8} />
    </div>
  );
};

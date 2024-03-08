import Skeleton from 'react-loading-skeleton';

import { MoviesGridSkeleton } from '../shared/movieCard/MoviesGridSkeleton';

export const ContentCategorySkeleton = () => {
  return (
    <div className='container'>
      {/* Category title placeholder */}
      <Skeleton height={40} width={260} />
      <MoviesGridSkeleton count={20} />
    </div>
  );
};

import Skeleton from 'react-loading-skeleton';

export const MoviesGridSkeleton = ({ count }: { count: number }) => {
  const skeletonsCount = Array.from({ length: count });

  return (
    <div className='cards-grid mt-8'>
      {/* Movie cards placeholder */}
      {skeletonsCount.map((_, index) => (
        <Skeleton
          key={`movie-skeleton-${index}`}
          width={'100%'}
          className='aspect-[2/3]'
        />
      ))}
    </div>
  );
};

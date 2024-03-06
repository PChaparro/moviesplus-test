import Skeleton from 'react-loading-skeleton';

export const ContentCategorySkeleton = () => {
  const skeletonsCount = Array.from({ length: 20 });

  return (
    <div className='container'>
      {/* Category title placeholder */}
      <Skeleton height={40} width={260} />
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
    </div>
  );
};

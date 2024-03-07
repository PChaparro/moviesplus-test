import Skeleton from 'react-loading-skeleton';

export const CategoriesGridSkeleton = () => {
  const skeletonsCount = Array.from({ length: 5 });

  return (
    <ul className='cards-grid mt-8'>
      {skeletonsCount.map((_, index) => (
        <li key={`category-skeleton-${index}`}>
          <Skeleton width={'100%'} className='aspect-[2/3]' />
        </li>
      ))}
    </ul>
  );
};

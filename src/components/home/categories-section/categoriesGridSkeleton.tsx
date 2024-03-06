import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const CategoriesGridSkeleton = () => {
  const skeletonsCount = Array.from({ length: 5 });

  return (
    <ul className={'cards-grid'} style={{ marginBlockStart: '2rem' }}>
      <SkeletonTheme baseColor='#1A1A20' highlightColor='#282832'>
        {skeletonsCount.map((_, index) => (
          <li key={`category-skeleton-${index}`}>
            <Skeleton width={'100%'} style={{ aspectRatio: '2/3' }} />
          </li>
        ))}
      </SkeletonTheme>
    </ul>
  );
};

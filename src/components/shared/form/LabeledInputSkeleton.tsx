import Skeleton from 'react-loading-skeleton';

export const LabeledInputSkeleton = () => {
  return (
    <div className='grid gap-1'>
      {/* Label skeleton */}
      <Skeleton width={68} height={20} />
      {/* Input skeleton */}
      <Skeleton width={'100%'} height={48} />
    </div>
  );
};

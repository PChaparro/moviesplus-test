import Skeleton from 'react-loading-skeleton';

import { LabeledInputSkeleton } from '../shared/form/LabeledInputSkeleton';

export const LoginSkeleton = () => {
  return (
    <main className='container grid gap-4 md:grid-cols-2'>
      <div className='flex items-center justify-center'>
        <div className='grid w-full max-w-sm gap-4'>
          {/* Form title */}
          <Skeleton width={100} height={40} />
          {/* Form fields */}
          <LabeledInputSkeleton />
          <LabeledInputSkeleton />
          {/* Submit button */}
          <Skeleton width={'100%'} height={42} />
        </div>
      </div>
      <div className='hidden md:block'>
        {/* Picture */}
        <Skeleton width={'100%'} className='aspect-[640/872]' />
      </div>
    </main>
  );
};

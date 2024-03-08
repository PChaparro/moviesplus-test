import errorBackground from '@/assets/images/error-bg.webp';
import { Link } from '@tanstack/react-router';

import { buttonVariantClassnames } from '../button/button';

interface CustomErrorProps {
  title?: string;
  message?: string;
  showRedirect?: boolean;
  redirectText?: string;
  redirectPath?: string;
}

export const CustomError = ({
  title = 'Oops! We had a problem.',
  message = 'An error occurred while trying to load the content. Please try again later or contact support.',
  showRedirect = true,
  redirectPath = '/',
  redirectText = 'Go back to home',
}: CustomErrorProps) => {
  return (
    <div className='container'>
      <div className='relative -z-[1] min-h-[50svh] overflow-hidden rounded-xl'>
        <img
          src={errorBackground}
          className='absolute inset-0 h-full w-full object-cover object-center'
          width={1280}
          height={853}
          alt=''
          loading='eager'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent from-40% to-brand-bg/85 to-85%' />
      </div>
      <div className='mx-auto -mt-24 flex max-w-prose flex-col items-center gap-y-6 text-center text-white'>
        <h1 className='text-balance text-4xl font-semibold'>{title}</h1>
        <p className='text-balance text-xl'>{message}</p>
        {showRedirect && (
          <Link
            to={redirectPath}
            className={buttonVariantClassnames({ variant: 'primary' })}
          >
            {redirectText}
          </Link>
        )}
      </div>
    </div>
  );
};

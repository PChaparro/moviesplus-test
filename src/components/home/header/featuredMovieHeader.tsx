import featuredMovieBanner from '@/assets/images/featured-movie-banner.webp';
import { PlayIcon } from 'lucide-react';

import { Button } from '@/components/button/button';

export const FeaturedMovieHeader = () => {
  return (
    <header className='relative min-h-[60svh] overflow-hidden rounded-3xl'>
      <img
        className='absolute inset-0 h-full w-full object-cover object-center'
        src={featuredMovieBanner}
        alt='Oppenheimer movie banner'
        width={1164}
        height={587}
        loading='eager'
      />
      <div className='from-brand-bg/85 absolute inset-0 bg-gradient-to-t to-transparent p-8 md:bg-gradient-to-r md:p-12'>
        <div className='flex h-full max-w-prose flex-col items-start justify-end gap-4 text-white md:justify-center'>
          <h1 className='text-3xl  font-semibold tracking-wide md:text-5xl'>
            Oppenheimer
          </h1>
          <p className='line-clamp-4 text-balance text-lg'>
            Film about physicist J. Robert Oppenheimer and his role as the
            developer of the atomic bomb. Based on the book 'American
            Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer' by Kai
            Bird and Martin J. Sherwin.
          </p>
          <Button>
            <PlayIcon className='mr-2' />
            View now
          </Button>
        </div>
      </div>
    </header>
  );
};

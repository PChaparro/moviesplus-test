import featuredMovieBanner from '@/assets/images/featured-movie-banner.webp';
import { PlayIcon } from 'lucide-react';

import { Button } from '@/components/button/button';

import Styles from './featuredMovieHeader.module.css';

export const FeaturedMovieHeader = () => {
  return (
    <header className={Styles.header}>
      <img
        className={Styles.header__poster}
        src={featuredMovieBanner}
        alt='Oppenheimer movie banner'
        width={1164}
        height={587}
        loading='eager'
      />
      <div className={Styles.header__content}>
        <div className={Styles.header__text}>
          <h1 className={Styles.header__title}>Oppenheimer</h1>
          <p className={Styles.header__description}>
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

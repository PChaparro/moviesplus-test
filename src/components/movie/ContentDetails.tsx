import { Movie } from '@/types/definitions';
import { PlayIcon } from 'lucide-react';
import { useState } from 'react';

import { Modal } from '../shared/Modal/Modal';
import { MovieHeader } from '../shared/MovieHeader/MovieHeader';
import { MovieHeaderSkeleton } from '../shared/MovieHeader/MovieHeaderSkeleton';
import { Button } from '../shared/button/button';
import { MovieVideoPlayer } from './MovieVideoPlayer';

interface ContentDetailsProps {
  isLoading: boolean;
  movie: Movie | undefined;
}

export const ContentDetails = ({ isLoading, movie }: ContentDetailsProps) => {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

  if (isLoading || !movie) return <MovieHeaderSkeleton />;

  const genresNames = movie.genres.map((genre) => genre.name);

  return (
    <>
      <article>
        <MovieHeader
          backdrop_path={movie.backdrop_path}
          overview={movie.overview}
          title={movie.title}
          votes={{
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
          }}
        >
          <p className='text-lg text-white/85'>{genresNames.join(', ')}.</p>
          <Button onClick={() => setIsMediaModalOpen(true)}>
            <PlayIcon className='mr-2' /> Start watching
          </Button>
        </MovieHeader>
      </article>
      <Modal
        isOpen={isMediaModalOpen}
        onCloseCallback={() => setIsMediaModalOpen(false)}
      >
        <MovieVideoPlayer />
      </Modal>
    </>
  );
};

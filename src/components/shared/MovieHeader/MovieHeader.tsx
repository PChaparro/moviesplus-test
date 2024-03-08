import { getBackdropUrlByPath, roundDecimal } from '@/utils/utils';
import { Rating } from 'react-simple-star-rating';

interface MovieHeaderProps {
  backdrop_path: string;
  title: string;
  overview: string;
  votes?: {
    vote_average: number;
    vote_count: number;
  };
  children?: React.ReactNode;
}

export const MovieHeader = ({
  backdrop_path,
  title,
  overview,
  votes,
  children,
}: MovieHeaderProps) => {
  const parsedVoteAverage = roundDecimal((votes?.vote_average ?? 0) / 2, 2);

  return (
    <header className='group relative min-h-[60svh] overflow-hidden rounded-xl'>
      <img
        className='absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105'
        src={getBackdropUrlByPath(backdrop_path)}
        alt={`Backdrop of ${title} movie`}
      />
      <div className='absolute inset-0 bg-gradient-to-t from-brand-bg/85 from-15% to-transparent to-75% p-8 md:bg-gradient-to-r md:p-12'>
        <div className='flex h-full max-w-md flex-col items-start justify-end gap-4 text-white md:justify-center'>
          <h1 className='text-balance text-3xl font-semibold tracking-wide md:text-5xl'>
            {title}
          </h1>
          <p className='line-clamp-4 text-balance text-lg text-white/85'>
            {overview}
          </p>
          {children}
          {votes && (
            <div className='flex flex-wrap items-center gap-2 text-white/85'>
              <Rating
                SVGclassName='inline-block'
                initialValue={parsedVoteAverage}
                size={20}
                readonly
                allowFraction
              />
              <span>
                {parsedVoteAverage} ({votes.vote_count})
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

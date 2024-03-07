import { createLazyFileRoute } from '@tanstack/react-router';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useCategoryMovies } from '@/hooks/useCategoryMovies';

import { ContentCategorySkeleton } from '@/components/category/contentCategorySkeleton';
import { CustomError } from '@/components/shared/error/CustomError';
import { MovieCard } from '@/components/shared/movieCard/MovieCard';

export const Route = createLazyFileRoute('/category/$categoryId')({
  component: ContentCategory,
  pendingComponent: ContentCategorySkeleton,
});

function ContentCategory() {
  const { categoryId } = Route.useParams();

  const {
    isLoading,
    isError,
    error,
    movies,
    hasNextPage,
    fetchNextPage,
    category: { name: categoryName },
  } = useCategoryMovies({ categoryId });

  if (isLoading) return <ContentCategorySkeleton />;

  if (isError) return <CustomError message={error?.message} />;

  return (
    <main className='container'>
      <h1 className='text-4xl font-semibold text-white'>
        {categoryName} Movies
      </h1>
      <InfiniteScroll
        dataLength={movies?.length ?? 0}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={null}
      >
        <ul className='cards-grid mt-8'>
          {movies?.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </main>
  );
}

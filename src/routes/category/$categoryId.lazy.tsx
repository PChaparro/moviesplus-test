import { createLazyFileRoute } from '@tanstack/react-router';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useCategoryMovies } from '@/hooks/useCategoryMovies';

import { ContentCategorySkeleton } from '@/components/category/contentCategorySkeleton';
import { MovieCard } from '@/components/shared/movieCard/MovieCard';

export const Route = createLazyFileRoute('/category/$categoryId')({
  component: ContentCategory,
  pendingComponent: ContentCategorySkeleton,
});

function ContentCategory() {
  const { categoryId } = Route.useParams();

  const {
    isLoading,
    movies,
    hasNextPage,
    fetchNextPage,
    category: { name: categoryName },
  } = useCategoryMovies({ categoryId });

  if (isLoading) return <ContentCategorySkeleton />;

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

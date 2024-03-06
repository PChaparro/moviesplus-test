import { createLazyFileRoute } from '@tanstack/react-router';

import { useCategoryMovies } from '@/hooks/useCategoryMovies';

import { ContentCategorySkeleton } from '@/components/category/contentCategorySkeleton';
import { MovieCard } from '@/components/shared/movieCard/MovieCard';

export const Route = createLazyFileRoute('/category/$categoryId')({
  component: Page,
  pendingComponent: ContentCategorySkeleton,
});

function Page() {
  const { categoryId } = Route.useParams();

  const {
    isLoading,
    movies,
    category: { name: categoryName },
  } = useCategoryMovies({ categoryId });

  if (isLoading) return <ContentCategorySkeleton />;

  return (
    <main className='container'>
      <h1 className='text-4xl font-semibold text-white'>
        {categoryName} Movies
      </h1>
      <ul className='cards-grid mt-8'>
        {movies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </main>
  );
}

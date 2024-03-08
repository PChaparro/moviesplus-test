import { createLazyFileRoute } from '@tanstack/react-router';

import { useMovie } from '@/hooks/useMovie';

import { ContentDetails } from '@/components/movie/ContentDetails';
import { CustomError } from '@/components/shared/error/CustomError';

export const Route = createLazyFileRoute('/movie/$movieId')({
  component: Page,
  // pendingComponent: ContentDetailsSkeleton
});

function Page() {
  const { movieId } = Route.useParams();
  const { movie, isLoading, isError, error } = useMovie(movieId);

  // TODO: Replace with a proper loading skeleton
  if (isLoading) return <p>Loading...</p>;

  if (isError) return <CustomError message={error?.message} />;

  return (
    <main className='container'>
      <ContentDetails movie={movie!} />
    </main>
  );
}

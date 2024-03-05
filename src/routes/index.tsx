import { createFileRoute } from '@tanstack/react-router';

import { FeaturedMovieHeader } from '@/components/home/header/featuredMovieHeader';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className='container'>
      <FeaturedMovieHeader />
    </main>
  );
}

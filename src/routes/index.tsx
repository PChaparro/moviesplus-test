import { createFileRoute } from '@tanstack/react-router';

import { CategoriesSection } from '@/components/home/categories-section/categoriesSection';
import { FeaturedMovieHeader } from '@/components/home/header/featuredMovieHeader';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className='container'>
      <FeaturedMovieHeader />
      <CategoriesSection />
    </main>
  );
}

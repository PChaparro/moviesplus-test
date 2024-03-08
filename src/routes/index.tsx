import { createFileRoute } from '@tanstack/react-router';
import { PlayIcon } from 'lucide-react';

import { CategoriesSection } from '@/components/home/categories-section/categoriesSection';
import { MovieHeader } from '@/components/movie/MovieHeader';
import { Button } from '@/components/shared/button/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className='container'>
      <MovieHeader
        title='Dune: Part Two'
        overview='Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.'
        backdrop_path='/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'
      >
        <Button>
          <PlayIcon className='mr-2' />
          View now
        </Button>
      </MovieHeader>
      <CategoriesSection />
    </main>
  );
}

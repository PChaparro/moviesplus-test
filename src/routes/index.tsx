import { Link, createFileRoute } from '@tanstack/react-router';
import { PlayIcon, UserIcon } from 'lucide-react';

import { useSession } from '@/hooks/useSession';

import { CategoriesSection } from '@/components/home/categories-section/categoriesSection';
import { MovieHeader } from '@/components/shared/MovieHeader/MovieHeader';
import { buttonVariantClassnames } from '@/components/shared/button/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const { isLoggedIn } = useSession();

  return (
    <main className='container'>
      <MovieHeader
        title='Dune: Part Two'
        overview='Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.'
        backdrop_path='/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'
      >
        {isLoggedIn ? (
          <Link
            to='/movie/$movieId'
            params={{ movieId: '693134' }}
            className={buttonVariantClassnames({ variant: 'primary' })}
          >
            <PlayIcon className='mr-2' />
            Watch now
          </Link>
        ) : (
          <Link
            to='/login'
            className={buttonVariantClassnames({ variant: 'primary' })}
          >
            <UserIcon className='mr-2' />
            Login to view
          </Link>
        )}
      </MovieHeader>
      <CategoriesSection />
    </main>
  );
}

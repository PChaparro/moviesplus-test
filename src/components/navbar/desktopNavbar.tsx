import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';

import navbarLinks from '@/data/navbar/links.json';

import { buttonVariantClassnames } from '@/components/button/button';
import { MoviesPlusLogo } from '@/components/moviesPlusLogo/moviesPlusLogo';

const { default: defaultLinks } = navbarLinks;

export const DesktopNavbar = () => {
  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

  return (
    <nav className='container hidden h-24 items-center justify-between gap-8 md:flex'>
      <MoviesPlusLogo />

      {/* Links */}
      <ul className='flex flex-grow gap-4'>
        {defaultLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={clsx(
                'inline-flex items-center text-lg text-white/85 transition-colors hover:text-white',
                {
                  'text-white': pathname === link.path,
                },
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Session items */}
      <Link
        to='/login'
        className={buttonVariantClassnames({ variant: 'primary' })}
      >
        Sign In
      </Link>
    </nav>
  );
};

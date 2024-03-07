import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';

import { useSession } from '@/hooks/useSession';

import navbarLinks from '@/data/navbar/links.json';

import {
  Button,
  buttonVariantClassnames,
} from '@/components/shared/button/button';
import { MoviesPlusLogo } from '@/components/shared/moviesPlusLogo/moviesPlusLogo';

const { default: defaultLinks, authenticated: authenticatedLinks } =
  navbarLinks;

export const DesktopNavbar = () => {
  // Global session state
  const { isLoggedIn, user, logout } = useSession();

  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

  const linksToRender = [...defaultLinks];
  if (isLoggedIn) {
    linksToRender.push(...authenticatedLinks);
  }

  return (
    <nav className='container hidden h-24 items-center justify-between gap-8 md:flex'>
      <MoviesPlusLogo />

      {/* Links */}
      <ul className='flex flex-grow gap-4'>
        {linksToRender.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={clsx(
                'inline-flex items-center text-lg text-white/85 transition-colors hover:text-white',
                {
                  '!text-white': pathname === link.path,
                },
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Session items */}
      {isLoggedIn ? (
        <>
          <img
            src={user?.picture}
            alt={`${user?.username} profile`}
            className='h-10 w-10 rounded-md object-cover object-center'
          />
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Link
          to='/login'
          className={buttonVariantClassnames({ variant: 'primary' })}
        >
          Sign In
        </Link>
      )}
    </nav>
  );
};

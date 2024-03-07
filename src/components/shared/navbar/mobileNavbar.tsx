// Disabling these rules since the clickable component are presentational

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { useSession } from '@/hooks/useSession';

import navbarLinks from '@/data/navbar/links.json';

import {
  Button,
  buttonVariantClassnames,
} from '@/components/shared/button/button';
import { MoviesPlusLogo } from '@/components/shared/moviesPlusLogo/moviesPlusLogo';

const { default: defaultLinks, authenticated: authenticatedLinks } =
  navbarLinks;

export const MobileNavbar = () => {
  // Global session state
  const { isLoggedIn, user, logout } = useSession();

  // Navbar state
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

  const linksToRender = [...defaultLinks];
  if (isLoggedIn) {
    linksToRender.push(...authenticatedLinks);
  }

  return (
    <nav className='container flex h-24 items-center justify-between gap-8 md:hidden'>
      <MoviesPlusLogo />

      {/* Blur layer + content */}
      <div
        className={clsx(
          'fixed inset-0 z-50 hidden bg-brand-bg/85 backdrop-blur-sm',
          {
            '!block': isOpen,
          },
        )}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        aria-hidden={!isOpen}
        aria-label={'Close menu'}
      >
        {/* Content container*/}
        <div
          className='flex h-full w-full max-w-xs flex-col gap-8 overflow-y-auto bg-brand-bg p-8'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <Button
            size={'icon'}
            variant={'outline'}
            onClick={() => setIsOpen(false)}
            aria-label={'Close menu'}
          >
            <XIcon />
          </Button>

          {/* Links */}
          <ul className='flex flex-col gap-4'>
            {linksToRender.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={clsx(
                    'inline-block w-full py-2 text-lg text-white/85',
                    {
                      '!text-white': pathname === link.path,
                    },
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Session items*/}
          <div className={'flex flex-grow flex-col justify-end gap-8'}>
            {isLoggedIn ? (
              <>
                <div className='flex items-center gap-4 capitalize'>
                  <img
                    src={user?.picture}
                    alt={`${user?.username} profile`}
                    className='h-12 w-12 rounded-md object-cover object-center'
                  />
                  <span className='text-sm font-semibold text-white/85'>
                    {user?.username}
                  </span>
                </div>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <Link
                to='/login'
                className={`${buttonVariantClassnames({ variant: 'primary' })}`}
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hamburger button */}
      <Button
        size={'icon'}
        variant={'outline'}
        onClick={() => setIsOpen(true)}
        aria-label={'Open menu'}
      >
        <MenuIcon />
      </Button>
    </nav>
  );
};

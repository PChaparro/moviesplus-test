// Disabling these rules since the clickable component are presentational

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';
import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import navbarLinks from '@/data/navbar/links.json';

import { Button, buttonVariantClassnames } from '@/components/button/button';
import { MoviesPlusLogo } from '@/components/moviesPlusLogo/moviesPlusLogo';

const { default: defaultLinks } = navbarLinks;

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

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
            {defaultLinks.map((link) => (
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
          <div className={'flex flex-grow flex-col justify-end'}>
            <Link
              to='/login'
              className={`${buttonVariantClassnames({ variant: 'primary' })}`}
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
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

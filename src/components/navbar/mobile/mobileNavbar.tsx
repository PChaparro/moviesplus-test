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

import Styles from './mobileNavbar.module.css';

const { default: defaultLinks } = navbarLinks;

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

  return (
    <nav
      className={`${clsx(Styles.nav, {
        [Styles['nav--active']]: isOpen,
      })} container`}
    >
      <MoviesPlusLogo />

      {/* Blur layer + content */}
      <div
        className={Styles['nav__blur-layer']}
        onClick={toggleMenu}
        aria-hidden={!isOpen}
        aria-label={'Close menu'}
      >
        {/* Content container*/}
        <div
          className={Styles['nav__container']}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <Button
            size={'icon'}
            variant={'outline'}
            onClick={toggleMenu}
            aria-label={'Close menu'}
          >
            <XIcon />
          </Button>

          {/* Links */}
          <ul className={Styles['nav__links-list']}>
            {defaultLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={clsx(Styles['nav__link'], {
                    [Styles['nav__link--active']]: pathname === link.path,
                  })}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Session items*/}
          <div className={Styles['nav__session-items']}>
            <Link
              to='/login'
              className={`${buttonVariantClassnames({ variant: 'primary' })}`}
              onClick={toggleMenu}
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
        onClick={toggleMenu}
        aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
      >
        <MenuIcon />
      </Button>
    </nav>
  );
};

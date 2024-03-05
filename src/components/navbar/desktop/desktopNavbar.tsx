import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';

import navbarLinks from '@/data/navbar/links.json';

import { buttonVariantClassnames } from '@/components/button/button';
import { MoviesPlusLogo } from '@/components/moviesPlusLogo/moviesPlusLogo';

import Styles from './desktopNavbar.module.css';

const { default: defaultLinks } = navbarLinks;

export const DesktopNavbar = () => {
  const router = useRouterState();
  const {
    location: { pathname },
  } = router;

  return (
    <nav className={`${Styles.nav} container`}>
      <MoviesPlusLogo />

      {/* Links */}
      <ul className={Styles['nav__links-list']}>
        {defaultLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={clsx(Styles['nav__link'], {
                [Styles['nav__link--active']]: pathname === link.path,
              })}
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

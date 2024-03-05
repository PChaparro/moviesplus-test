import MoviesPlusLogo from '@/assets/movies-plus-logo.svg';
import NavbarLinks from '@/data/navbar/links.json';
import { Link, useRouterState } from '@tanstack/react-router';
import clsx from 'clsx';

import { buttonVariantClassnames } from '../../button/button';
import Styles from './desktopNavbar.module.css';

const { default: defaultLinks } = NavbarLinks;

export const DesktopNavbar = () => {
  const router = useRouterState();
  const {
    location: { pathname },
  } = router;
  console.log({ pathname });

  return (
    <nav className={`${Styles.nav} container`}>
      {/* Logo */}
      <Link to='/' className={Styles.nav__logo}>
        <img
          src={MoviesPlusLogo}
          alt='Movies Plus Logo'
          width='80'
          height='80'
        />
        <span className={Styles['nav__logo-text']} translate='no'>
          Movies+
        </span>
      </Link>

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

      {/* Session buttons */}
      <Link
        to='/login'
        className={buttonVariantClassnames({ variant: 'primary' })}
      >
        Sign In
      </Link>
    </nav>
  );
};

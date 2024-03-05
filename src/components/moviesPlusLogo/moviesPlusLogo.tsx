import LogoAsset from '@/assets/movies-plus-logo.svg';
import { Link } from '@tanstack/react-router';

import Styles from './moviesPlusLogo.module.css';

export const MoviesPlusLogo = () => {
  return (
    <Link to='/' className={Styles.logo}>
      <img src={LogoAsset} alt='Movies Plus Logo' width='80' height='80' />
      <span className={Styles.logo__text} translate='no'>
        Movies+
      </span>
    </Link>
  );
};

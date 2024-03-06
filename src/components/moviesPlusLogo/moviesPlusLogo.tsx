import LogoAsset from '@/assets/movies-plus-logo.svg';
import { Link } from '@tanstack/react-router';

export const MoviesPlusLogo = () => {
  return (
    <Link to='/' className='inline-flex items-center justify-center'>
      <img src={LogoAsset} alt='Movies Plus Logo' width='80' height='80' />
      <span
        className='hidden text-xl font-bold text-brand-primary xs:block'
        translate='no'
      >
        Movies+
      </span>
    </Link>
  );
};

import LogoAsset from '@/assets/movies-plus-logo.svg';
import { Link } from '@tanstack/react-router';

export const MoviesPlusLogo = () => {
  return (
    <Link to='/' className='inline-flex items-center justify-center'>
      <img src={LogoAsset} alt='Movies Plus Logo' width='80' height='80' />
      <span
        className='text-brand-primary xs:block hidden text-xl font-bold'
        translate='no'
      >
        Movies+
      </span>
    </Link>
  );
};

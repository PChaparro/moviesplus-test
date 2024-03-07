import loginDesktopImage from '@/assets/images/login-bg-desktop.webp';
import loginMobileImage from '@/assets/images/login-bg-mobile.webp';
import { createLazyFileRoute } from '@tanstack/react-router';

import { LoginForm } from '@/components/login/LoginForm';
import { LoginSkeleton } from '@/components/login/LoginSkeleton';

export const Route = createLazyFileRoute('/login/')({
  component: Login,
  pendingComponent: LoginSkeleton,
});

function Login() {
  return (
    <main className='container grid gap-4 md:grid-cols-2'>
      <div className='z-10 grid place-content-center sm:-mt-32 md:-mt-0'>
        <h1 className='mb-4 text-4xl font-semibold text-white'>Login</h1>
        <LoginForm />
      </div>
      <div className='relative -order-1 md:order-1'>
        <picture>
          <source
            srcSet={loginDesktopImage}
            media='(min-width: 768px)'
            width={640}
            height={872}
          />
          <img
            src={loginMobileImage}
            alt='Login background'
            className='mx-auto hidden w-full max-w-xl rounded-md object-contain object-center sm:block'
            loading='eager'
            width={640}
            height={427}
          />
        </picture>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent from-35% to-brand-bg/85 md:hidden '></div>
      </div>
    </main>
  );
}

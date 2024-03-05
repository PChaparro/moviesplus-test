import { Navbar } from '@/components/navbar/navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <footer className='container'>Shared footer</footer>
      <TanStackRouterDevtools position='bottom-right' />
    </>
  ),
});

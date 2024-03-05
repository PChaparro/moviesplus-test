import { DesktopNavbar } from '@/components/navbar/desktop/desktopNavbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <DesktopNavbar />
      <Outlet />
      <footer className='container'>Shared footer</footer>
      <TanStackRouterDevtools position='bottom-right' />
    </>
  ),
});

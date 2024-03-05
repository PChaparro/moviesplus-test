import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { DesktopNavbar } from '@/components/navbar/desktop/desktopNavbar';
import { MobileNavbar } from '@/components/navbar/mobile/mobileNavbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <Outlet />
      <footer className='container'>Shared footer</footer>
      <TanStackRouterDevtools position='bottom-right' />
    </>
  ),
});

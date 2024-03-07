import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from 'sonner';

import { ClientSideProviders } from '@/components/shared/ClientSideProviders';
import { DesktopNavbar } from '@/components/shared/navbar/desktopNavbar';
import { MobileNavbar } from '@/components/shared/navbar/mobileNavbar';

export const Route = createRootRoute({
  component: () => (
    <ClientSideProviders>
      <DesktopNavbar />
      <MobileNavbar />
      <Outlet />
      <footer className='container'>Shared footer</footer>
      <Toaster
        theme='dark'
        toastOptions={{
          classNames: { toast: '!bg-brand-bg' },
        }}
      />
      <ReactQueryDevtools position='right' />
    </ClientSideProviders>
  ),
});

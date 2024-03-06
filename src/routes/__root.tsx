import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { SkeletonTheme } from 'react-loading-skeleton';

import { DesktopNavbar } from '@/components/shared/navbar/desktopNavbar';
import { MobileNavbar } from '@/components/shared/navbar/mobileNavbar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='#1A1A20' highlightColor='#282832'>
        <DesktopNavbar />
        <MobileNavbar />
        <Outlet />
        <footer className='container'>Shared footer</footer>
        <TanStackRouterDevtools position='bottom-left' />
        <ReactQueryDevtools position='right' />
      </SkeletonTheme>
    </QueryClientProvider>
  ),
});

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { DesktopNavbar } from '@/components/navbar/desktopNavbar';
import { MobileNavbar } from '@/components/navbar/mobileNavbar';

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
      <DesktopNavbar />
      <MobileNavbar />
      <Outlet />
      <footer className='container'>Shared footer</footer>
      <TanStackRouterDevtools position='bottom-left' />
      <ReactQueryDevtools position='right' />
    </QueryClientProvider>
  ),
});

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SkeletonTheme } from 'react-loading-skeleton';

import { AuthContextProvider } from '@/context/AuthContext';
import { FavoritesContextProvider } from '@/context/FavoritesContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const ClientSideProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthContextProvider>
      <FavoritesContextProvider>
        <QueryClientProvider client={queryClient}>
          <SkeletonTheme baseColor='#1A1A20' highlightColor='#282832'>
            {children}
          </SkeletonTheme>
        </QueryClientProvider>
      </FavoritesContextProvider>
    </AuthContextProvider>
  );
};

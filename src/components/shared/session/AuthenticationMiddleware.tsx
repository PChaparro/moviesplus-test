import { Navigate } from '@tanstack/react-router';
import { Loader2Icon } from 'lucide-react';

import { useSession } from '@/hooks/useSession';
import { useToast } from '@/hooks/useToast';

interface AuthenticationMiddlewareProps {
  isExclusiveForLoggedUsers?: boolean;
  isExclusiveForGuests?: boolean;
  children: React.ReactElement;
}

export const AuthenticationMiddleware = ({
  isExclusiveForGuests,
  isExclusiveForLoggedUsers,
  children,
}: AuthenticationMiddlewareProps) => {
  const { isLoading, isLoggedIn } = useSession();
  const { showWarningToast, showInfoToast } = useToast();

  if (isLoading) {
    return <Loader2Icon className='mx-auto animate-spin text-white' />;
  }

  if (isExclusiveForGuests && isLoggedIn) {
    showInfoToast('You are already logged in');
    return <Navigate to='/' />;
  }

  if (isExclusiveForLoggedUsers && !isLoggedIn) {
    showWarningToast('You need to be logged in to access this page');
    return <Navigate to='/login' />;
  }

  return children;
};

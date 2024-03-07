import { loginService } from '@/services/session.services';
import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

export const useSession = () => {
  // Global state
  const { user, isLoading, setUser, setIsLoading } = useContext(AuthContext);

  // Derived state
  const isLoggedIn = !!user;

  // Helpers
  const login = async (credentials: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);

    const user = await loginService(credentials);
    setUser(user);

    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isLoading,
    isLoggedIn,
    login,
    logout,
  };
};

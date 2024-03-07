import { loginService } from '@/services/session.services';
import { SessionUser } from '@/types/definitions';
import { PersistedSessionUser } from '@/types/localStorage';
import { CONFIG } from '@/utils/config';
import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';

import { useLocalStorage } from './useLocalStorage';

export const useSession = () => {
  const { saveToLocalStorage, removeFromLocalStorage } = useLocalStorage();

  // Global state
  const { user, isLoading, setUser, setIsLoading } = useContext(AuthContext);

  // Derived state
  const isLoggedIn = !!user;

  // Helpers
  const saveUserToLocalStorage = (user: SessionUser) => {
    const simulatedExpiration =
      Date.now() + CONFIG.SIMULATED_SESSION_EXPIRATION;

    const userToPersist: PersistedSessionUser = {
      ...user,
      exp: simulatedExpiration,
    };

    saveToLocalStorage('session', JSON.stringify(userToPersist));
  };

  const login = async (credentials: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);

    const user = await loginService(credentials);
    setUser(user);
    saveUserToLocalStorage(user);

    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    removeFromLocalStorage('session');
  };

  return {
    user,
    isLoading,
    isLoggedIn,
    login,
    logout,
  };
};

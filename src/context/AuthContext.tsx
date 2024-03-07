import { SessionUser } from '@/types/definitions';
import { PersistedSessionUser } from '@/types/localStorage';
import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AuthContextValues {
  user: SessionUser | null;
  isLoading: boolean;
  setUser: (user: SessionUser | null) => void;
  setIsLoading: (loading: boolean) => void;
}

const defaultValues: AuthContextValues = {
  user: null,
  isLoading: false,
  setUser: () => {},
  setIsLoading: () => {},
};

export const AuthContext = createContext<AuthContextValues>(defaultValues);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getFromLocalStorage, removeFromLocalStorage } = useLocalStorage();

  // Global session state
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Effects
  // Try to restore the session from local storage on mount
  useEffect(() => {
    // Get the item
    const session = getFromLocalStorage('session');
    if (!session) return;

    // Check the expiration
    const parsedSession = JSON.parse(session) as PersistedSessionUser;
    if (parsedSession.exp < Date.now()) {
      removeFromLocalStorage('session');
      return;
    }

    // Set the user if the session is still valid
    const { exp: _exp, ...user } = parsedSession;
    setUser(user);
  }, []);

  const currentValues: AuthContextValues = {
    user,
    isLoading,
    setUser,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={currentValues}>
      {children}
    </AuthContext.Provider>
  );
};

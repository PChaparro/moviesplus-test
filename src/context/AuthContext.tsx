import { SessionUser } from '@/types/definitions';
import { createContext, useState } from 'react';

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
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

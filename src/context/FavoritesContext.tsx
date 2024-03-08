import { Movie } from '@/types/definitions';
import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

interface FavoritesContextValues {
  favorites: Movie[];
  setFavorites: (movies: Movie[]) => void;
}

const defaultValues: FavoritesContextValues = {
  favorites: [],
  setFavorites: () => {},
};

export const FavoritesContext =
  createContext<FavoritesContextValues>(defaultValues);

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getFromLocalStorage } = useLocalStorage();

  // State
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Effects
  // Try to restore the favorites from local storage on mount
  useEffect(() => {
    const storedFavorites = getFromLocalStorage('favorites');
    if (!storedFavorites) return;

    setFavorites(JSON.parse(storedFavorites));
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

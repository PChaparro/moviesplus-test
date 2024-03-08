import { Movie } from '@/types/definitions';
import { useContext } from 'react';

import { FavoritesContext } from '@/context/FavoritesContext';

import { useLocalStorage } from './useLocalStorage';

export const useFavoriteMovies = () => {
  const { saveToLocalStorage } = useLocalStorage();

  // State
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // Derived state
  const favoritesIds = new Set(favorites.map((movie) => String(movie.id)));

  // Methods
  const isFavorite = (id: string) => favoritesIds.has(id);

  const addFavorite = (movie: Movie) => {
    const { id } = movie;
    if (isFavorite(String(id))) return;

    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    saveToLocalStorage('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(
      (movie) => String(movie.id) !== id,
    );
    setFavorites(updatedFavorites);
    saveToLocalStorage('favorites', JSON.stringify(updatedFavorites));
  };

  return { favorites, isFavorite, addFavorite, removeFavorite };
};

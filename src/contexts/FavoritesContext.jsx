import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(dino) {
    setFavorites(prev => [...prev, dino]);
  }

  function removeFavorite(name) {
    setFavorites(prev =>
      prev.filter(dino => dino.Name !== name)
    );
  }

  function isFavorite(name) {
    return favorites.some(dino => dino.Name === name);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
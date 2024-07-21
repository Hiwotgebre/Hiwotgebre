// src/context/FavoritesContext.js

import React, { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext(); // Ensure export

export const useFavorites = () => useContext(FavoritesContext); // Hook to access the context

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    const toggleFavorite = (recipe) => {
        let updatedFavorites;
        const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (currentFavorites.some(fav => fav.id === recipe.id)) {
            updatedFavorites = currentFavorites.filter(fav => fav.id !== recipe.id);
        } else {
            updatedFavorites = [...currentFavorites, recipe];
        }
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

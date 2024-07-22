// src/context/FavoritesContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext(); 

export const useFavorites = () => useContext(FavoritesContext); // Hook to access the context

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = recipe => {
        if (!favorites.some(fav => fav.id === recipe.id)) {
            setFavorites([...favorites, recipe]);
        }
    };

    const removeFavorite = recipeId => {
        setFavorites(favorites.filter(fav => fav.id !== recipeId));
    };

    // const toggleFavorite = (recipe) => {
    //     let updatedFavorites;
    //     const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    //     if (currentFavorites.some(fav => fav.id === recipe.id)) {
    //         updatedFavorites = currentFavorites.filter(fav => fav.id !== recipe.id);
    //     } else {
    //         updatedFavorites = [...currentFavorites, recipe];
    //     }
    //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    //     setFavorites(updatedFavorites);
    // };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

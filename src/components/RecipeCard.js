import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
const RecipeCard = ({ recipe, toggleFavorite, isFavorite }) => {
    // const { toggleFavorite } = useFavorites(); // Destructure toggleFavorite correctly
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button className="button" onClick={() => toggleFavorite(recipe)}>
                Toggle Favorite
            </button>
        </div>
    );
};

export default RecipeCard;

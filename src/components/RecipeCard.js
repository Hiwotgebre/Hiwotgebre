import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const RecipeCard = ({ recipe }) => {
    const { favorites, addFavorite, removeFavorite  } = useFavorites();
    const isFavorite = favorites.some(fav => fav.id === recipe.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe)
        }
    };
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.name}</h3>
            <p>{recipe.instructions}</p>
            <ul>
            {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button className="button" onClick={toggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                
            </button>
        </div>
    );
};

export default RecipeCard;

import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';  // Assuming you have a RecipeCard component

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = () => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    };

    return (
        <div>
            <h1>My Favorite Recipes</h1>
            <div>
                {favorites.length > 0 ? (
                    favorites.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
                ) : (
                    <p>No favorite recipes added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;

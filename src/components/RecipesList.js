import React, { useState, useEffect } from 'react';
import { fetchAllRecipes } from '../api/recipesApi';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getRecipes = async () => {
            setLoading(true);
            try {
                const fetchedRecipes = await fetchAllRecipes();
                setRecipes(fetchedRecipes);
            } catch (err) {
                setError('Failed to fetch recipes');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getRecipes();
    }, []);

    if (loading) return <p>Loading recipes...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipesList;
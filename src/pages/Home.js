// pages/Home.js
import React from 'react';
import RecipeCard from '../components/RecipeCard';

const Home = ({ recipes }) => {
    return (
        <div>
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    );
};

export default Home;

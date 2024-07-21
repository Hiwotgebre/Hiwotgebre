// src/components/RecipeCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`}>View More</Link>
        </div>
    );
};

export default RecipeCard;

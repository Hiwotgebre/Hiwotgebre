// src/components/DetailedView.js

import React from 'react';

const DetailedView = ({ recipe }) => {
    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            <h2>Nutrition Information</h2>
            <p>Calories: {recipe.calories}</p>
        </div>
    );
};

export default DetailedView;

// src/api/recipesApi.js

import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

// Create an axios instance
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/recipes/search?q=${query}`);
        return response.data.recipes;  // Adjust this based on the actual API response
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
}

// Function to fetch all recipes
export const fetchAllRecipes = async () => {
    try {
        const response = await apiClient.get('/recipes');
        return response.data.recipes; // Make sure to adapt this depending on the API response structure
    } catch (error) {
        throw error;
    }
};

// Function to fetch all instructions
export const fetchAllInstructions = async () => {
    try {
        const response = await apiClient.get('/instructions');
        return response.data.instructions; // Make sure to adapt this depending on the API response structure
    } catch (error) {
        throw error;
    }
};

// Function to fetch a single recipe by ID
export const fetchRecipeById = async (id) => {
    try {
        const response = await apiClient.get(`/recipes/${id}`);
        return response.data; // Adjust based on API response structure
    } catch (error) {
        throw error;
    }
};

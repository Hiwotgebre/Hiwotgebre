import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailedView from './components/Detailedview';
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import RecipesList from './components/RecipesList';
import SearchBar from './components/SearchBar';
import RecipeDetail from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './context/FavoritesContext'
import './styles.css'
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecipesList />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </>
    );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipesList from './components/RecipesList';
import RecipeDetail from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
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

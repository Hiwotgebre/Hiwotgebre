import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <FavoritesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FavoritesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

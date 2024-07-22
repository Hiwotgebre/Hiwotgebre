// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-brand">Recipe App</div>
            <ul class="navbar-links"> 
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
            <button class="navbar-toggle">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span the class="icon-bar"></span>
    </button>
        </nav>
    );
};

export default Navbar;

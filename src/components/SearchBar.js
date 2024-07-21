// src/components/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        onSearch(input);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search recipes..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;

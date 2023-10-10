import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchBar, setSearchBar] = useState('');

    const handleSearchBar = (e) => {
        setSearchBar(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch(searchBar);
        }
    }

    const handleClearSearch = () => {
        setSearchBar('');
        onSearch('');
    }

    return (
        <div className="search-container">
            <input 
            type="text"
            placeholder="Search our products"
            value={searchBar}
            onChange={handleSearchBar}
            onKeyPress={handleKeyPress}
            className="search-bar-input"
            />
            {searchBar && <button onClick={handleClearSearch} className="clear-button">X</button>}
            <button onClick={() => onSearch(searchBar)} className="search-button">Search</button> 
        </div>
    )
}
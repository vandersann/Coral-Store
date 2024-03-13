    // src/components/SearchBar.tsx
    import React, { useState } from 'react';

    interface SearchBarProps {
    onSearch: (query: string) => void;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
        <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        </div>
    );
    };

    export default SearchBar;

import React, { useState } from 'react';

interface SearchBarProps {
    onSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    }

    return (
        <div className="p-4 bg-gray-200">
            <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
                <label className="mb-2 text-lg font-semibold">Enter search term:</label>
                <input
                    className="p-2 border border-gray-400 rounded"
                    value={term}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
}

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    const handleSubmit = async (term: string) => {
        const result = await searchImages(term);
        setImages(result);
    }

    return (
        <div className="container mx-auto mt-4">
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;

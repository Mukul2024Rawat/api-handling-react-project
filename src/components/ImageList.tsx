import React from 'react';
import ImageShow from "./ImageShow";

interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
}

interface ImageListProps {
    images: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderedImages}
        </div>
    );
}

export default ImageList;

import React from 'react';

interface ImageShowProps {
    image: {
        urls: {
            small: string;
        };
        alt_description: string;
    };
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <img
                className="object-cover w-full h-full"
                src={image.urls.small}
                alt={image.alt_description}
                style={{ width: '100%', height: '250px' }}
            />
        </div>
    );
}

export default ImageShow;

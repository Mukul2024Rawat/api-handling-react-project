import axios, { AxiosResponse } from 'axios';

interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
}

const searchImages = async (term: string): Promise<Image[]> => {
    const response: AxiosResponse<{ results: Image[] }> = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y', // Replace YOUR_CLIENT_ID with your actual client ID
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;

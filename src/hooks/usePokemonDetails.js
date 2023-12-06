import { useState, useEffect } from 'react';

const usePokemonDetails = (initialUrl) => {
    const [details, setDetails] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    const fetchDetails = async () => {
    try {
        const response = await fetch(url);
        const pokemonDetails = await response.json();
        setDetails(pokemonDetails);
    } catch (error) {
        console.error('Error fetching details:', error);
    }
    };

    useEffect(() => {
        fetchDetails();
    }, [url]);

    const setNewUrl = (newUrl) => {
    setUrl(newUrl);
    setDetails(null); // Reset details when the URL changes
    };

    return { details, setNewUrl };
};

export default usePokemonDetails;
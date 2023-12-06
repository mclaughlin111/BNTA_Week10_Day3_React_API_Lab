import React, { useState, useEffect} from 'react';
import PokemonSearch from "../components/PokemonSearch";
import PokemonList from '../components/PokemonList';

const PokemonContainer = () => {

const[pokemonsNameUrls, setPokemonsNameUrls] = useState(null);
const [pokemons, setPokemons] = useState(null);


    
// fetches the pokemon. Returns the list of pokemon which each have a name and a url for extra details.
const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5") // testing on 5 pokemon at a time. Dont want to ddos.
    const data = await response.json();
    setPokemonsNameUrls(data.results);
};

// singular request to get the details of a pokemon via their extra details url which is received in from the fetchpokemon function.
const fetchPokemonDetails = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl);
    const pokemonDetails = await response.json();
    return pokemonDetails;
}

// uses promise.all which takes in an array of promises and will fail if any one of the promises fail. 
// The promises are individual requests for each pokemon which are created from doing pokemons.map
const fetchAllPokemonDetails = async () => {
    if (!pokemonsNameUrls) return; // make sure that the pokemons state is not null before continuing.

    const detailedPokemons = await Promise.all(
        pokemonsNameUrls.map(async (pokemon) => fetchPokemonDetails(pokemon.url))
    );
    return detailedPokemons.filter(Boolean);
}


// Initial fetch pokemon. This returns a list of all the pokemon 
useEffect(() => {
    fetchPokemon();
}, []); // need empty array to stop DDOS on array, need to set it empty to stop watcher from 


useEffect(() => {
    const fetchData = async () => {
        const details = await fetchAllPokemonDetails();
        console.log('fetched details:', details);
        setPokemons(details);
    };
    fetchData();
}, [pokemonsNameUrls]);


    return (
<>
<h1>Search The Pokémon! API</h1>
<PokemonSearch/>
{(pokemons) ? <PokemonList pokemons={pokemons} /> : <p>"Loading"</p>}
</>
    );
}

export default PokemonContainer;
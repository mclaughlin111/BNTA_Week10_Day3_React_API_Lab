import React, { useState, useEffect} from 'react';
import PokemonSearch from "../components/PokemonSearch";
import PokemonList from '../components/PokemonList';

const PokemonContainer = () => {

const [pokemons, setPokemons] = useState([]);
    
const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    const data = await response.json();
    setPokemons(data);
};

useEffect(() => {
    fetchPokemon();
}, []); // need empty array to stop DDOS on array, need to set it empty to stop watcher from 
    
    
    return (
<>
<h1>Search The Pokémon! API</h1>
<PokemonSearch/>
<PokemonList pokemons={pokemons}/>
</>
    );
}
 
export default PokemonContainer;
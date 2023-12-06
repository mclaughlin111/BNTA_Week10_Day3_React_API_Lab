const Pokemon = ({pokemon}) => {

    const requestPokemonDetails = pokemon.url; // Pokemon info URL

    return (<h3>{pokemon.name}</h3>);
}
 
export default Pokemon;
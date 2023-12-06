import Pokemon from "./Pokemon";


const PokemonList = ({ pokemons }) => {


  const pokemonComponents = pokemons.map((pokemon, index) => {
    // console.log(pokemon);
    return <Pokemon key={index} pokemon={pokemon} />;

  });

  return <>{pokemonComponents}</>;
};



export default PokemonList;

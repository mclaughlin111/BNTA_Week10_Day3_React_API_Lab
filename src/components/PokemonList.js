import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  const pokemonComponents = pokemons.results.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} />;
  });

  return <>{pokemonComponents}</>;
};

export default PokemonList;

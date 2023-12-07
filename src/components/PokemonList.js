import Pokemon from "./Pokemon";


const PokemonList = ({ pokemons }) => {


  const pokemonComponents = pokemons.map((pokemon) => {
    // console.log(pokemon);
    return <Pokemon key={pokemon.id} pokemon={pokemon} />;

  });

  return (
  <div className="container">
    <div className="row">
        {pokemonComponents}
    </div>
  </div>
  );
};



export default PokemonList;

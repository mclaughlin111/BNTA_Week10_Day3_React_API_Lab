import Pokemon from "./Pokemon";
import Grid from "@mui/material/Grid";

const PokemonList = ({ pokemons }) => {


  const pokemonComponents = pokemons.map((pokemon) => {
    // console.log(pokemon);
    return <Pokemon key={pokemon.id} pokemon={pokemon} />;

  });

  return (

    <Grid container spacing={5}>
        {pokemonComponents}
    </Grid> 


  );
};



export default PokemonList;

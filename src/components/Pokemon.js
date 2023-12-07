//import UI components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Pokemon = ({ pokemon }) => {
  // console.log(pokemon)
  // console.log(pokemon.types)
  const { types } = pokemon;

  // Make pokemon name Capital on 1st letter
  let pokemonName = pokemon.name;
  const firstLetter = pokemonName[0].toUpperCase();
  pokemonName = pokemonName.slice(1); //
  pokemonName = firstLetter + pokemonName;

  const TypesList = types.map((typeData, index) => (
    <li className="list-group-item" key={index}>
      {typeData.type.name}
    </li>
  ));

  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={pokemon.sprites.front_default} // link to image
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonName}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            Weight:
          </Typography>
          <Typography variant="body4"> {pokemon.weight}kg</Typography>

          <hr />
          <Typography variant="body4" color="text.secondary">
            Id:
          </Typography>
          <Typography variant="body4" color="text.primary">
            {" "}
            #{pokemon.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">PokePage</Button>
          <Button size="small">Expand</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Pokemon;

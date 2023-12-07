//import UI components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


const Pokemon = ({ pokemon }) => {
  // console.log(pokemon)
  // console.log(pokemon.types)
  const { types } = pokemon;

  // Make pokemon name Capital on 1st letter
  let pokemonName = pokemon.name;
  const firstLetter = pokemonName[0].toUpperCase();
  pokemonName = pokemonName.slice(1); //
  pokemonName = firstLetter + pokemonName;

  const Types = types.map((typeData, index) => (
    <ListItem key={index}>{typeData.type.name}</ListItem>
  ));

  return (
    <Grid item xs={6} sm={4} md={2} >
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
          <List dense={true} >
          {Types}
          </List>
          <hr />
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
          <Button size="small">Show Stats</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Pokemon;

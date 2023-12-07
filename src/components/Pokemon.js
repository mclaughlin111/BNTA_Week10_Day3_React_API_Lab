//import UI components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; // for progress bar

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { red, common } from '@mui/material/colors';
import Box from '@mui/material/Box'; // for progress bar
import Avatar from '@mui/material/Avatar';


const Pokemon = ({ pokemon }) => {

  //Stats Bar Style
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      height: 3,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1,
      height: 3,
      backgroundColor: theme.palette.mode === 'light' ? '#000' : '#308fe8',
    },
    
  }));
  

  const customTheme = createTheme({
    palette: {
      primary: {
        main: common["white"],
      },
      secondary: {
        main: red[400],
      },
    },
    transitions: {
      easing: {
        // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      }
    },
  
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      }
    }

  });


  const StyledCard = styled(Card)` ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.05);
  }
  `}
`;


  // console.log(pokemon)
  // console.log(pokemon.types)
  const { types } = pokemon;

  // Make pokemon name Capital on 1st letter
  // let pokemonName = pokemon.name;
  // const firstLetter = pokemonName[0].toUpperCase();
  // pokemonName = pokemonName.slice(1); //
  // pokemonName = firstLetter + pokemonName;

  const capitalise = (name) => {
    let nameFirstLetter = name[0].toUpperCase();
    name = name.slice(1);
    name = nameFirstLetter + name;
    return name;
  }



  const Types = types.map((typeData, index) => (
    

    <ListItem key={index}>{capitalise(typeData.type.name)}</ListItem>
  ));

  return (

    <ThemeProvider theme={customTheme}>
    
    <Grid item xs={5} sm={4} md={2} >
    <StyledCard >
        <CardMedia
          sx={{ height: 175 }}
          image={pokemon.sprites.front_default} // link to image
          title={capitalise(pokemon.name)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalise(pokemon.name)}
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
          <hr />
          HP<BorderLinearProgress variant="determinate" value={pokemon.stats[0].base_stat} />
          Attack<BorderLinearProgress variant="determinate" value={pokemon.stats[1].base_stat} />
          Defense<BorderLinearProgress variant="determinate" value={pokemon.stats[2].base_stat} />
          Speed<BorderLinearProgress variant="determinate" value={pokemon.stats[5].base_stat} />
        </CardContent>
        <CardActions>
          <Button size="small" fullWidth={true}>Show Stats</Button>
        </CardActions>
      </StyledCard>
    </Grid>
  </ThemeProvider>
  );
};

export default Pokemon;

const Pokemon = ({pokemon}) => {

// console.log(pokemon)

    return (
    <div>
    <h3>{pokemon.name}</h3>
    {/* {<img src={pokemon.sprites.front_default}></img>} */}
    </div>);
}
 
export default Pokemon;
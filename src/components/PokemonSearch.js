const PokemonSearch = () => {
    return (
        <form id="pokemon-search">

        <label htmlFor="pokemon-name">Pokémon Name:</label>
        <input
            id="pokemon-name"
            name="name"
            type="text"
            placeholder="Search by pokemon name.."
        />
        </form>

    );
}
 
export default PokemonSearch;
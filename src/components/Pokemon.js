const Pokemon = ({pokemon}) => {

// console.log(pokemon)

// console.log(pokemon.types)

const { types } = pokemon;

const TypesList = types.map((typeData, index) =>  <li className="list-group-item" key={index}>{typeData.type.name}</li>);





    return (






        <div className="col-6 col-md-4 col-lg-2"> {/* Adjust column classes based on your layout */}
      <div className="card mb-4">
        <img className="card-img-top" src={pokemon.sprites.front_default} alt={`picture of ${pokemon.name}`} />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <ul className="list-group list-group-flush">
            {TypesList}
          </ul>
          <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">{pokemon.id}</small>
          </p>
        </div>
      </div>
    </div>
    
    


    );
}

export default Pokemon;
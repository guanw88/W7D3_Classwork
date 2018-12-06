import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const imageStyling = {
      height: "50px",
      width: "50px"
    };

    const pokemonLi = this.props.pokemon.map(el => <li key={el.id}><img style={imageStyling} src={el.image_url}></img>{el.name}</li>);

    return (
        <ul>
          {pokemonLi}
      </ul>
    );
  }

}

export default PokemonIndex;

import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const pokemonLi = this.props.pokemon.map(el => <li><img src={el.image_url}></img>{el.name}</li>);
    return (
        <ul>
          {pokemonLi}
      </ul>
    );
  }

}

export default PokemonIndex;

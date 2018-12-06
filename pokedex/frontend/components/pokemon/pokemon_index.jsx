import React from 'react';
import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetailContainer from "./pokemon_detail_container";
import { HashRouter, Route } from "react-router-dom";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <div>
        <HashRouter>
          <Route component={PokemonDetailContainer} path="/pokemon/:id"  />
        </HashRouter>
        <section className="pokedex">
          <ul>
            <PokemonIndexItem pokemon={this.props.pokemon} />
          </ul>
        </section>
      </div>
    );
  }

}

export default PokemonIndex;

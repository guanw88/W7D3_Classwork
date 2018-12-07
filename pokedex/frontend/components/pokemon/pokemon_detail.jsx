import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.requestPokemon(this.id);
  }

  componentDidUpdate(prevProps) {
    this.id = this.props.match.params.id;
    if (this.id !== prevProps.match.params.id) {
      this.props.requestPokemon(this.id);
    }
  }

  render () {
    let poke = this.props.pokemon[this.id];
    let moveStr = "";
    if (poke.moves) {
      moveStr = poke.moves.join(', ');

      const imageStyling = {
        height: "50px",
        width: "50px"
      };

      return (
        <div>
          This is pokemon number {this.id}
          <ul>
            <li><img src={poke.image_url}></img></li>
            <li>Name:{poke.name}</li>
            <li>Attack:{poke.attack}</li>
            <li>Defense:{poke.defense}</li>
            <li>Moves:{moveStr}</li>
            <li>Type:{poke.poke_type}</li>
          </ul>
          <ul>
            {Object.values(this.props.items).map((item) =>
                <li key={item.id}>
                  <Link to={`/pokemon/${this.id}/items/${item.id}`}>
                    <img style={imageStyling} src={item.image_url}></img>
                  </Link>
                </li>
            )}
            <Route path="/pokemon/:id/items/:itemId" component= { ItemDetailContainer} />
          </ul>
        </div>
      );
    }
    return ("nothing to see here");

  }
}

export default PokemonDetail;

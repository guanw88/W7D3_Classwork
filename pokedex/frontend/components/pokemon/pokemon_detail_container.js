import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  pokemon: state.entities.pokemon,
  items: state.entities.items
});

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: (id) => dispatch( requestPokemon(id) )
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon, requestPokemon, receivePokemon, RECEIVE_POKEMON } from './actions/pokemon_actions';
import configureStore from "./store/store";
import { selectAllPokemon } from './reducers/selectors';
import Root from "./components/root";


document.addEventListener('DOMContentLoaded', () => {
  // testing


  const store = configureStore();
  window.receivePokemon = receivePokemon;
  window.fetchPokemon = fetchPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestPokemon = requestPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

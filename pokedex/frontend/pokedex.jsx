import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
  // testing
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById('root');
  ReactDOM.render(<h1>HELLO</h1>, root);
});

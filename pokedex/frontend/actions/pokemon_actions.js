export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
import * as APIUtil from "../util/api_util";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload
});

export const requestAllPokemon = () => (dispatch) => {
  APIUtil.fetchAllPokemon().then((res) => dispatch(receiveAllPokemon(res)));
};

export const requestPokemon = (id) => (dispatch) => {
  APIUtil.fetchPokemon(id).then((res) => dispatch(receivePokemon(res)));
};

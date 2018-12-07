export const selectAllPokemon = (state) => (
  Object.values(state.entities.pokemon)
);

export const selectPokemonItem = (state, itemId) => (
  state.entities.items[itemId]
);

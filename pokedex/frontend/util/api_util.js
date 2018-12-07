export const fetchAllPokemon = () => {
  return( $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  }));
};

export const fetchPokemon = (id) => {
  return( $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  }));
};

export const sendPokemon = (pokemon) => {
  return ( $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: {
      pokemon: {
        name: pokemon.name,
        attack: pokemon.attack,
        defense: pokemon.defense,
        moves: pokemon.moves,
        poke_type: pokemon.poke_type,
        image_url: pokemon.image_url,
        item_ids: pokemon.image_ids
      }
    }
  }));
};

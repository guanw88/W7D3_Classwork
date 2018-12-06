import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {

  const imageStyling = {
    height: "50px",
    width: "50px"
  };

  return (pokemon.map(el =>
    <li key={el.id}>
      <Link to={"/pokemon/" + el.id}>
        <img style={imageStyling} src={el.image_url}></img>
        {el.name}
      </Link>
    </li>));

};

export default PokemonIndexItem;

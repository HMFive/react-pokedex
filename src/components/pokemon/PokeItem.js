import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { catchPokemon } from '../../redux/store';

function PokeItem(props) {
  const dispatch = useDispatch();

  const handleCatch = () => {
    dispatch(catchPokemon(props.pokemon)); // Dispatch catchPokemon action with the entire pokemon object
  };

  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.name}`}>
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
        <p>{props.pokemon.name}</p>
      </Link>
      <ul>
        {props.pokemon.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
      <button onClick={handleCatch}>Catch</button>
    </li>
  );
}

export default PokeItem;

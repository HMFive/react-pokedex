import React from 'react';
import PokeItem from './PokeItem';

function PokeList(props) {
  return (
    <ul>
      {props.pokemon.map((pokemon) => (
        <PokeItem
          key={pokemon.id}
          pokemon={pokemon} // Pass the entire pokemon object as prop
          showCatchButton={true}
        />
      ))}
    </ul>
  );
}

export default PokeList;

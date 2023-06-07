import React from 'react';
import PokeItem from './PokeItem';

function PokeList(props) {
  const { pokemon } = props;

  return (
    <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 lg:px-64">
      {pokemon.map((pokemon) => (
        <PokeItem
          key={pokemon.id}
          pokemon={pokemon}
          showCatchButton={true}
        />
      ))}
    </div>
  );
}

export default PokeList;

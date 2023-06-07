import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);

  console.log(caughtPokemons);
  return (
    <div>
      <h2>Pokédex</h2>
      <ul>
        {caughtPokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;

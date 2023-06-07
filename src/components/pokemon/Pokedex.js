import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {releasePokemon, toggleFavorite } from '../../redux/store';
import PokeItem from "./PokeItem";

const Pokedex = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);
  const dispatch = useDispatch();


  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const filteredPokemons = showFavorites
    ? caughtPokemons.filter((pokemon) => pokemon.favorite)
    : caughtPokemons;

  return (
    <div>
      <h2>Pokédex</h2>
      <button onClick={handleToggleFavorites}>
        {showFavorites ? 'Show All' : 'Show Favorites'}
      </button>
      <ul>
        {filteredPokemons.map((pokemon) => (
          <PokeItem
            key={pokemon.id}
            pokemon={pokemon}
            showCatchButton={false}
            showReleaseButton={true}
            showAddToFavoritesButton={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;

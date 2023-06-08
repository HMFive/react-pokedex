import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {releasePokemon, toggleFavorite } from '../../redux/store';
import PokeItem from "./PokeItem";
import Navigation from "../Navigation";

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
    <Navigation>
     <section className="h-screen bg-rose-200 dark:bg-zinc-700">
      <div className="my-2 text-center"> {/* Add text-center class here */}
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900" onClick={handleToggleFavorites}>
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 lg:px-64">
        {filteredPokemons.map((pokemon) => (
          <PokeItem
            key={pokemon.id}
            pokemon={pokemon}
            showCatchButton={false}
            showReleaseButton={true}
            showAddToFavoritesButton={true}
          />
        ))}
      </div>
     </section>
    </Navigation>

);
};

export default Pokedex;

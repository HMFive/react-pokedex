import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokeItem from "../pokemon-list/PokeItem";
import Navigation from "../../layout/Navigation";
import CardLayout from "../../layout/CardLayout";

const Pokedex = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);


  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const filteredPokemons = showFavorites
    ? caughtPokemons.filter((pokemon) => pokemon.favorite)
    : caughtPokemons;

  return (
    <Navigation>
     <section className="h-screen bg-rose-200 dark:bg-zinc-700">
      <div className="my-2 text-center">
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900" onClick={handleToggleFavorites}>
          {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
      </div>
      <CardLayout>
        {filteredPokemons.map((pokemon) => (
          <PokeItem
            key={pokemon.id}
            pokemon={pokemon}
            showCatchButton={false}
            showReleaseButton={true}
            showAddToFavoritesButton={true}
          />
        ))}
      </CardLayout>
     </section>
    </Navigation>

);
};

export default Pokedex;

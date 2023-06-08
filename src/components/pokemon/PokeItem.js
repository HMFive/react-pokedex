import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon, releasePokemon, toggleFavorite } from '../../redux/store';
import typeColor from '../../typeColor';
import emptyPokeBall from '../../assets/icons8-pokeball-100.png';
import pokeBall from '../../assets/icons8-pokeball-r-100.png';
import { motion, useAnimation } from 'framer-motion';
import CatchButton from "../CatchButton";


function PokeItem(props) {
  const { pokemon, showCatchButton, showReleaseButton, showAddToFavoritesButton } = props;
  const dispatch = useDispatch();
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);
  const isCaught = caughtPokemons.some((caughtPokemon) => caughtPokemon.id === pokemon.id);

  const handleCatch = () => {
    if (!isCaught) {
      dispatch(catchPokemon(pokemon));
    }


  };

  const handleRelease = () => {
    dispatch(releasePokemon(pokemon));
  };

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(pokemon));
  };

  const controls = useAnimation();

  const handleOnClick = () => {
    controls.start({ translateY: [-10, 0, -10] });
  };



  return (
    <div className="flex justify-center">
      <div className="w-3/4 max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-400 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <Link to={`/pokemon/${pokemon.name}`}>
            <img className="w-32 h-32 mb-3 my-2 rounded-full bg-neutral-100 dark:bg-slate-200 shadow-lg" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h5 className="capitalize mb-1 text-xl text-center font-medium text-gray-900 dark:text-white">{pokemon.name}</h5>
          </Link>
          <div>
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`${typeColor[type.type.name]} uppercase text-md font-medium mr-2 px-2.5 py-0.5 rounded-full`}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          {showCatchButton && <CatchButton pokemon={pokemon} disabled={false} />}
          {showReleaseButton && <button className="my-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleRelease}>Release</button>}
          {showAddToFavoritesButton && (
            <button
              className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
              onClick={handleAddToFavorites}>
              {pokemon.favorite ? 'Remove Favorite' : 'Add Favorite'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeItem;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../redux/store'
import pokeBall from '../assets/icons8-pokeball-r-100.png';
import emptyPokeBall from '../assets/icons8-pokeball-100.png';
import { motion } from 'framer-motion';

function CatchButton({ pokemon, disabled }) {
  const dispatch = useDispatch();
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);
  const isCaught = caughtPokemons.some((caughtPokemon) => caughtPokemon.id === pokemon.id);

  const handleCatch = () => {
    if (!isCaught) {
      dispatch(catchPokemon(pokemon));
    }
  };

  return (
    <motion.button
      whileTap={{
        y: [0, -15, 0],
        rotate: [0, -30, 30, 0],
        transition: { duration: 0.5 },
      }}
      onClick={handleCatch} disabled={disabled}
    >
      {isCaught ? <img src={pokeBall} alt="Caught" /> : <img src={emptyPokeBall} alt="Catch" />}
    </motion.button>
  );
}

export default CatchButton;

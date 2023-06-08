import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../redux/store';
import Navigation from '../layout/Navigation';
import CatchButton from "../components/common/CatchButton";
import PokemonInfo from "../components/pokemon-detail/PokeInfo";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const dispatch = useDispatch();
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);
  const isCaught = caughtPokemons.some((caughtPokemon) => caughtPokemon.id === pokemonDetails?.id);

  const handleCatch = () => {
    if (!isCaught) {
      dispatch(catchPokemon(pokemonDetails));
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [id]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonDetails(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  if (!pokemonDetails) {
    return (
      <Navigation>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </Navigation>
    );
  }

  return (
    <Navigation>
      <div className="flex justify-center items-center my-2 h-screen text-center font-bold uppercase">
        <div className="w-128 p-4 bg-white dark:bg-gray-400 rounded-3xl shadow-md">
          <PokemonInfo pokemonDetails={pokemonDetails} />
          <CatchButton pokemon={pokemonDetails} disabled={isCaught} />
        </div>
      </div>
    </Navigation>
  );
};

export default PokemonDetailsPage;

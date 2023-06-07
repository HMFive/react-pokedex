import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import typeColor from '../typeColor';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../redux/store';
import {motion} from "framer-motion";
import pokeBall from "../assets/icons8-pokeball-r-100.png";
import emptyPokeBall from "../assets/icons8-pokeball-100.png";
import Layout from "../components/Layout";


const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const dispatch = useDispatch();
  const caughtPokemons = useSelector((state) => state.pokedex.caughtPokemons);
  const isCaught = caughtPokemons.some((caughtPokemon) => caughtPokemon.id === pokemonDetails.id);

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
    return <p>Loading...</p>;
  }

  return (
    <Layout>
    <div className="flex justify-center items-center h-screen text-center font-bold uppercase">
      <div className="w-128 p-4 bg-white rounded-3xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">{pokemonDetails.name}</h1>
        <img

          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          className="mx-auto mb-4 w-64 h-64 mb-3 my-2 rounded-full bg-neutral-100 dark:bg-slate-200 shadow-lg"
        />
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <h2 className="text-lg font-bold mt-4">Abilities:</h2>
        <ul className="mt-4 flex justify-center">
          {pokemonDetails.abilities.map((ability) => (
            <li
              key={ability.ability.name}
              className="inline-block text-md font-medium px-2 py-0.5 my-2 mx-2 rounded-full"
              style={{ backgroundColor: '#F87171' }}
            >
              {ability.ability.name}
            </li>
          ))}
        </ul>

        <h2 className="text-lg font-bold mt-4">Stats:</h2>
        <ul>
          {pokemonDetails.stats.map((stat) => (
            <li key={stat.stat.name} className="flex items-center">
              <div className="w-20 mr-2">{stat.stat.name}:</div>
              <div className="w-60 h-4 bg-gray-200 rounded">
                <div
                  className="h-full bg-blue-500 rounded"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
              <div className="ml-2">{stat.base_stat}</div>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex justify-center">
          {pokemonDetails.types.map((type) => (
            <span
              key={type.type.name}
              className={`${typeColor[type.type.name]} uppercase text-md font-medium mr-2 px-2.5 py-0.5 rounded-full`}
            >
              {type.type.name}
            </span>
          ))}
        </ul>
        <motion.button
          whileTap={{
            y: [0, -15, 0],
            rotate: [0, -30, 30, 0],
            transition: { duration: 0.5 },
          }}
          onClick={handleCatch} disabled={isCaught}>
          {isCaught ? <img src={pokeBall} alt="Caught" />


            : <img src={emptyPokeBall} alt="Catch" />}
        </motion.button>
      </div>
    </div>
    </Layout>
  );
};

export default PokemonDetailsPage;

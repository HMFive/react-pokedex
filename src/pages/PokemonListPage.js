import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from "../components/pokemon-list/PokeCard";
import Navigation from "../layout/Navigation";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 21; // Number of Pokémon to fetch per request

  useEffect(() => {
    fetchPokemonList();
  }, [offset]);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
        params: {
          offset: offset,
          limit: limit,
        },
      });
      const results = response.data.results;
      const pokemonDetails = await Promise.all(
        results.map((pokemon) => fetchPokemonDetails(pokemon.url))
      );
      setPokemonList(pokemonDetails);
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  };

  const fetchPokemonDetails = async (pokemonUrl) => {
    try {
      const response = await axios.get(pokemonUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
      throw error;
    }
  };

  const handlePrevClick = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const handleNextClick = () => {
    setOffset(offset + limit);
  };

  return (
    <Navigation>
      <div>
        <PokeCard pokemon={pokemonList} />
        <div className="flex justify-center mt-4">
          <button className="inline-flex items-center mx-4 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevClick}>
            Previous
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </Navigation>
  );
};

export default PokemonListPage;

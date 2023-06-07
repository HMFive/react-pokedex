import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeList from "../components/pokemon/PokeList";
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20; // Number of Pokémon to fetch per request

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
    <div>
      <h1>Pokémon List</h1>
      <PokeList pokemon={pokemonList} />
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
        <Link to={`/pokedex`}>
          PokeDex
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;

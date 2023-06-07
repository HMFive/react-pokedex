import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Details = ({ match }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

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
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <h2>Abilities:</h2>
      <ul>
        {pokemonDetails.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Stats:</h2>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;

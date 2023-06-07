import React from "react";
import PokeItem from "./PokeItem";

function PokeDefault(props) {
  return (
  <ul>
    {props.pokemon.map((pokemon) => (
      <PokeItem
        key={pokemon.id}
        image={pokemon.sprites.front_default}
        name={pokemon.name}
        types={pokemon.types}
      />
    ))}
  </ul>
  )
}

export default PokeDefault

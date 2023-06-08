import React from 'react';
import PokeItem from './PokeItem';
import CardLayout from "../../layout/CardLayout";

function PokeCard(props) {
  const { pokemon } = props;

  return (
<CardLayout>
      {pokemon.map((pokemon) => (
        <PokeItem
          key={pokemon.id}
          pokemon={pokemon}
          showCatchButton={true}
        />
      ))}
</CardLayout>
  );
}

export default PokeCard;

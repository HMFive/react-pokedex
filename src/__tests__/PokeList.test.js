import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import PokemonList from '../components/pokemon-list/PokemonListPage';

jest.mock('axios');

describe('PokemonList', () => {
  test('renders the PokemonListPage component', () => {
    const mockedPokemonList = [
      { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
      { name: 'Charizard', url: 'https://pokeapi.co/api/v2/pokemon/6' },
    ];

    axios.get.mockResolvedValueOnce({ data: { results: mockedPokemonList } });

    const { getByText, getByRole } = render(<PokemonList />);

    expect(getByText('Pikachu')).toBeInTheDocument();
    expect(getByText('Charizard')).toBeInTheDocument();

    const prevButton = getByRole('button', { name: /previous/i });
    const nextButton = getByRole('button', { name: /next/i });

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(prevButton).toBeCalledTimes(1);
    expect(nextButton).toBeCalledTimes(1);
  });
});

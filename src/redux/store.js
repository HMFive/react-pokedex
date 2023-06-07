import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  caughtPokemons: [], // Array to store the caught Pokémon
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    catchPokemon: (state, action) => {
      state.caughtPokemons.push(action.payload);
    },
    releasePokemon: (state, action) => {
      const releasedPokemonIndex = state.caughtPokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (releasedPokemonIndex !== -1) {
        state.caughtPokemons.splice(releasedPokemonIndex, 1);
      }
    },
    toggleFavorite: (state, action) => {
      const pokemon = state.caughtPokemons.find((pokemon) => pokemon.id === action.payload.id);
      if (pokemon) {
        pokemon.favorite = !pokemon.favorite;
      }
    },
  },
});

export const { catchPokemon, releasePokemon, toggleFavorite } = pokedexSlice.actions;

export default configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer,
  },
});

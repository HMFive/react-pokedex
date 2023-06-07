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
  },
});

export const { catchPokemon } = pokedexSlice.actions;

export default configureStore({
  reducer: {
    pokedex: pokedexSlice.reducer,
  },
});

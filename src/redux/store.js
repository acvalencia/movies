import { createStore, action, thunk } from 'easy-peasy';
import fetchMovies from '../providers/fetchMovies';

export const store = createStore({
  movies: [],
  setMovies: action((state, payload) => {
    state.movies = payload;
  }),
  loadMovies: thunk(async (actions, payload) => {
    const { results } = await fetchMovies(payload)
    actions.setMovies(results);
  }),
});

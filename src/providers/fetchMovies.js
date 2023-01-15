import { API_KEY } from '../utils/apiKey';
import axios from "axios";

const URL = 'https://api.themoviedb.org/3/search'

const fetchMovies = async (title) => {
  const url = `${URL}/movie?api_key=${API_KEY}&query=${title}`;
  const resp = await axios.get(url);
  return resp.data;
}

export default fetchMovies;

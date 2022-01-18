import { API_KEY } from '../utils/apiKey';
import axios from "axios";

const fetchMovies = async (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;
  const resp = await axios.get(url);
  return resp.data;
}

export default fetchMovies;

import { API_KEY } from '../utils/apiKey';
import axios from "axios";

const URL = 'https://api.themoviedb.org/3/movie'

const fetchMovie = async (movieId) => {
  const url = `${URL}/${movieId}?api_key=${API_KEY}`;
  const resp = await axios.get(url);
  return resp.data;
}

export default fetchMovie;

import axios from "axios";

const URL = 'https://api.themoviedb.org/3/search'

const fetchMovies = async (title) => {
  console.log('KJAKJAHSDF,', process.env.REACT_APP_API_KEY);

  const url = `${URL}/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`;
  const resp = await axios.get(url);
  return resp.data;
}

export default fetchMovies;

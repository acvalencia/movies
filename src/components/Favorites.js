import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import fetchMovie from "../providers/fetchMovie";
import MovieList from "./MovieList";

export default function Favorites() {

  const favorites = useReadLocalStorage('favorites');
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getAllFavorites() {
      const promises = favorites.map( id => fetchMovie(id) );
      const result = await Promise.all(promises);
      setMovies(result);
    }
    getAllFavorites();

  }, [ favorites ])

  return (
    <>
      <MovieList movies={movies}/>
    </>
  )
}

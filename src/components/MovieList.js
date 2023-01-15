import { Container, Grid } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MovieList (props) {

  return (
    <Container sx={{ py: 1 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </Grid>
    </Container>
  )
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import fetchMovie from "../providers/fetchMovie";

export default function Movie() {
  let { movieId } = useParams();
  const [movie, setmovie] = useState({});

  useEffect( () => {
    async function fetchData() {
      const res = await fetchMovie(movieId);
      setmovie(res);
    }
    fetchData();
  }, [ movieId ]);

  return (
    <Container sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <Card
            sx={{  display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="random"
            />
          </Card>
        </Grid>
        <Grid item xs={8} >
          <Typography variant="h2" component="div" gutterBottom>
            { movie.original_title }
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            { movie.tagline }
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Votes: { movie.vote_average }
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            { movie.release_date }
          </Typography>
          <Typography variant="body1" gutterBottom>
            { movie.overview }
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

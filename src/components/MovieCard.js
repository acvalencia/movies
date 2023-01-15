import { Button, Card, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts';

export default function MovieCard (props) {

  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`detail/${props.movie.id}`);
  }

  const handleFav = () => {
    if ( favorites.includes(props.movie.id)  ) {
      setFavorites(favorites.filter(movie => movie !== props.movie.id));
    } else {
      setFavorites([...favorites, props.movie.id]);
    }
  }

  return (
    <Grid item key={props.movie.id} xs={6} sm={4} md={3}>
      <Card
        onClick={handleNavigate}
        sx={{  display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt="random"
        />
      </Card>
      <Button onClick={handleFav}>
        { favorites.includes(props.movie.id) ? "Dislike" : "Like" }
      </Button>
    </Grid>
  )
}

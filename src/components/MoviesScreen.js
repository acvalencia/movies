import { useEffect, useState } from 'react'
import MovieList from './MovieList';
import { Box } from '@mui/system';
import { Container, IconButton, InputBase, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { useLocalStorage } from 'usehooks-ts';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';

export default function MoviesScreen () {

  const loadMovies = useStoreActions((actions) => actions.loadMovies);
  const movies = useStoreState((state) => state.movies);

  const [title, setTitle] = useState('');
  const [lastSearch, setLastSearch] = useLocalStorage('lastSearch', 'spiderman');

  useEffect(() => { // to load initial data
    loadMovies(lastSearch);
  }, [ loadMovies, lastSearch ]);

  const handleSearch = (event) => {
    event.preventDefault();
    loadMovies(title);
    setLastSearch(title);
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 2,
          pb: 2,
        }}
      >
        <Container maxWidth="sm">
          <Stack
            sx={{ pt: 1 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <form onSubmit={handleSearch}>
              <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search movie"
                  id="outlined-basic"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  type="text"
                  required
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </form>
          </Stack>
        </Container>
      </Box>
      <MovieList movies={movies} />
    </main>
  )
}

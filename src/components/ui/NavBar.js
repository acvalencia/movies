import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const [value, setValue] = useState('/');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
    navigate(newValue);
  }

  return (
    <AppBar position="relative">
    <Toolbar>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h6" color="inherit" noWrap>
            Movie Finder
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Tab value="/" label="Home" />
              <Tab value="favorites" label="Favorites" />
            </Tabs>
          </Box>
        </Grid>
    </Grid>
    </Toolbar>
    </AppBar>
  )
}

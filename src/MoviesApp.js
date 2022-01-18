import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./routes/AppRouter";

const theme = createTheme({
  palette: {
    white: {
      main: '#FFFFFF',
    }
  },
});

export default function MoviesApp () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

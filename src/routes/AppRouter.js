import { Routes, Route, BrowserRouter } from "react-router-dom";
import MoviesScreen from "../components/MoviesScreen";
import Movie from "../components/Movie";
import NavBar from "../components/ui/NavBar";
import Favorites from "../components/Favorites";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<MoviesScreen />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="detail/:movieId" element={<Movie />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

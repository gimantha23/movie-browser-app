import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import Favorites from "./Components/Favorites/Favorites";
import MovieDetail from "./Components/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

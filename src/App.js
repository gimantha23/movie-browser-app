import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import Favorites from "./Components/Favorites/Favorites";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import TopNavbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

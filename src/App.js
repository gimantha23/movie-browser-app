import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import TopNavbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

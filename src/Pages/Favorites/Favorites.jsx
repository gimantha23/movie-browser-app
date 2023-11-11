import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../../Components/MovieCard/MovieCard";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  //to get favorite movies from localstorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites")) || [];
    if (items) {
      setFavoriteMovies(items);
    }
  }, []);

  return (
    <Container>
      <h6
        className="text-left fw-bold ps-1"
        style={{
          marginBottom: "3rem",
          marginTop: "3rem",
          textTransform: "capitalize",
        }}
      >
        Favorites
      </h6>
      <div className="row mt-5 mb-5 justify-content-center">
        {favoriteMovies?.map((mov) => {
          return (
            <div
              className="col-lg-3 col-sm-6 col-md-4 p-2 d-flex justify-content-center"
              key={mov.id}
            >
              <MovieCard movie={mov} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Favorites;

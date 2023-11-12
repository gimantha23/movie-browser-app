import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MovieCard from "../MovieCard/MovieCard";
import ErrorComponent from "../Error/Error";

const Movies = ({ activeTab }) => {
  const { moviesList, loading: isLoading, error } = useSelector((store) => store.movies);
  const searchResultList = useSelector(
    (store) => store.movies.searchResultList
  );
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    if (searchResultList?.length > 0) {
      setDisplayList(searchResultList);
    } else {
      setDisplayList(moviesList);
    }
  }, [moviesList, searchResultList]);

  return error ? (
    <ErrorComponent message={error} />
  ) : !isLoading ? (
    <Container>
      <h6
        className="text-left fw-bold ps-1"
        style={{
          marginBottom: "3rem",
          marginTop: "3rem",
          textTransform: "capitalize",
        }}
      >
        {`${activeTab.toString().replace("_", " ")} Movies`}
      </h6>
      <div className="row mt-5 mb-5 justify-content-center">
        {displayList?.map((mov) => {
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
  ) : (
    <LoadingSpinner />
  );
};

export default Movies;

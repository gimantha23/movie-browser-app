import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Movies = ({ activeTab }) => {
  const moviesList = useSelector((store) => store.movies.moviesList);
  const searchResultList = useSelector(
    (store) => store.movies.searchResultList
  );
  const [displayList, setDisplayList] = useState([]);
  const isLoading = useSelector((store) => store.movies.loading);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    if (searchResultList?.length > 0) {
      setDisplayList(searchResultList);
    } else {
      setDisplayList(moviesList);
    }
  }, [moviesList, searchResultList]);

  return !isLoading ? (
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
              <Card style={{ width: "18rem" }} className="card">
                <Link to={`/movies/${mov.id}`}>
                  <Card.Img
                    variant="top"
                    src={`${imgBaseUrl ?? ""}/${mov.poster_path}`}
                  />
                </Link>

                <Card.Body>
                  <Card.Title className="text-center">
                    {mov.title ? mov.title : mov.original_name.slice(0, 21)}
                  </Card.Title>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span>{mov.release_date}</span>
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ marginRight: "3px" }}
                      />
                      {mov.vote_average}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  ) : (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Movies;

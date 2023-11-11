import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imgBaseUrl } from "../../Utils/Constants";

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
  );
};

export default Favorites;

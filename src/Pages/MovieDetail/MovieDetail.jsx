import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../Redux/Api/MovieApi";
import { imgBaseUrl } from "../../Utils/Constants";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((store) => store.movies.movieDetail);
  const isLoading = useSelector((store) => store.movies.loading);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites")) || [];
    if (items) {
      setFavoriteMovies(items);
    }
  }, [favoriteMovies]);

  //to check if a movie is added to favorites
  const isAddedToFavorites = () => {
    if (favoriteMovies.length > 0) {
      const isItemExists = favoriteMovies.find(
        (item) => item.id === movieDetail.id
      );
      return isItemExists;
    } else {
      return false;
    }
  };

  //to add or remove items from favorites (saved to localstorage)
  const addToFavorites = () => {
    let favorites = [...favoriteMovies];
    const isItemExists = favoriteMovies.find(
      (item) => item.id === movieDetail.id
    );
    if (isItemExists) {
      favorites = favorites.filter((item) => item.id !== movieDetail.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setMsg("Movie removed from favorites");
      setShowMsg(true);
    } else {
      favorites.push(movieDetail);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setMsg("Movie added to favorites!");
      setShowMsg(true);
    }
    setFavoriteMovies(favorites);
  };

  return !isLoading ? (
    <Container className="mt-5">
      <Row>
        <Col
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image height={"70%"} src={imgBaseUrl + movieDetail.poster_path} />
        </Col>
        <Col xs={12} md={6}>
          <h2 style={{ textAlign: "center" }}>{movieDetail.title}</h2>
          <div
            className="mt-3"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h6>
              {" "}
              <FontAwesomeIcon icon={faStar} style={{ marginRight: "3px" }} />
              {Number(movieDetail.vote_average)?.toFixed(1)}
            </h6>
            <h6>
              {" "}
              <FontAwesomeIcon icon={faHeart} style={{ marginRight: "3px" }} />
              {movieDetail.vote_count}
            </h6>
            <h6>
              {" "}
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ marginRight: "3px" }}
              />
              {movieDetail.release_date?.toString().split("-")[0]}
            </h6>
          </div>
          <h5 className="mt-3">
            Genre{movieDetail?.genres?.length > 1 ? "s" : ""}
          </h5>
          <p>{movieDetail?.genres?.map((genre) => genre.name).join(", ")}</p>
          <h5 className="mt-3">Overview</h5>
          <p>{movieDetail.overview}</p>
          <Button onClick={() => addToFavorites()} className="mt-4">
            <FontAwesomeIcon icon={faHeart} />
            <span>
              &nbsp;
              {isAddedToFavorites() ? "Added to Favorites" : "Add to Favorites"}
            </span>
          </Button>
          {showMsg && <p style={{ fontSize: "12px" }}>{msg}</p>}
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default MovieDetail;

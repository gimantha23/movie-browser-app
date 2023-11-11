import { Container, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../Redux/Api/MovieApi";
import { imgBaseUrl } from "../../Utils/Constants";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MovieDetail = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((store) => store.movies.movieDetail);
  const isLoading = useSelector((store) => store.movies.loading);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [dispatch, movieId]);

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
        </Col>
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

export default MovieDetail;

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imgBaseUrl } from "../../Utils/Constants";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }} className="card">
      <Link to={`/movies/${movie.id}`}>
        <Card.Img
          variant="top"
          src={`${imgBaseUrl ?? ""}/${movie.poster_path}`}
        />
      </Link>

      <Card.Body>
        <Card.Title className="text-center">
          {movie.title ? movie.title : movie.original_name.slice(0, 21)}
        </Card.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <span>{movie.release_date}</span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faStar} style={{ marginRight: "3px" }} />
            {movie.vote_average}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Movies from "../Movies/Movies";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fetchMovies, searchMovies } from "../../Redux/Api/MovieApi";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("now_playing");

  useEffect(() => {
    dispatch(fetchMovies(activeTab));
  }, [dispatch, activeTab]);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText !== null) {
      dispatch(searchMovies(searchText));
    }
  };

  return (
    <Container>
      <InputGroup className="mb-3 mt-3">
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Form.Control
          placeholder="Search movies..."
          onChange={handleSearch}
          style={{ backgroundColor: "rgb(247, 247, 247)" }}
        />
      </InputGroup>
      <Tabs
        id="controlled-tab-example"
        className="mb-3"
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
      >
        <Tab eventKey="now_playing" title="Now Playing">
          <Movies activeTab="now_playing" />
        </Tab>
        <Tab eventKey="popular" title="Popular">
          <Movies activeTab="popular" />
        </Tab>
        <Tab eventKey="top_rated" title="Top Rated">
          <Movies activeTab="top_rated" />
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming">
          <Movies activeTab="upcoming" />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;

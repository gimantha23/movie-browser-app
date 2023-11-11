import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Movies from "../Movies/Movies";
import { fetchMovies } from "../../Redux/Slices/MoviesSlice";
import { Container } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("now_playing");

  useEffect(() => {
    dispatch(fetchMovies(activeTab));
  }, [dispatch, activeTab]);

  return (
    <Container>
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

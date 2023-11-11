import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopNavbar = () => {
  return (
    <Navbar
      className="nav border-bottom bg-white sticky-top"
      data-bs-theme="light"
      expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">TMDB Movie Browser</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-dark fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="/favorites" className="text-dark fw-bold">
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

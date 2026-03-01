import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // <-- Import Link
import logo from "../../assets/logo/logo.png";
import "../../styles/Headerstyle.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="MyLogo" className="logo" />
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* COLLAPSE */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>  {/* About link added */}
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>

          {/* SEARCH */}
          <Form className="d-flex search-form input">
            <Form.Control
              type="search"
              placeholder="Your Food Here"
              className="me-2"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

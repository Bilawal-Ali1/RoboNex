import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container } from "react-bootstrap";  // ✅ ul, li hataye
import "../../styles/Headerstyle.css";
import gsap from "gsap";

function Header() {
  const hd = useRef(null);
  const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
   hd.current.querySelectorAll("li"),
   { Y:100, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.5, 
      delay: 1,
      stagger: 0.2  // ✅ simple stagger
    }
  );
}, []);

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
      <Container >
        <div className="logo"><h1>ROBONEX</h1></div>

        <div className="right">
          <ul ref={hd}>
            <li><a href="Home">Home</a></li>
            <li><a href="Technology">Technology</a></li>
            <li><a href="Project">Projects</a></li>
            <li><a href="About">About</a></li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
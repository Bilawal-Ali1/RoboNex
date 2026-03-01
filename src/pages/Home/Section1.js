import React from "react";
import "../../styles/homestyle.css";
import { Container,Button} from "react-bootstrap";
// import about from '../../assets/about/about-1.jpg';
import { Link } from "react-router-dom";
function Section1() {
  return (
    
    <Container className="about">
      <h3>THE BURGER TASTES BETTER WHEN<br/> YOU EAT IT WITH YOUE LOVES ONCE'S</h3>
      <p>“M.Burger is more than just a restaurant — it’s a place where every meal is made with love and care.Here, friends gather, families connect, and every bite brings joy, warmth, and unforgettable memories.
         <br/>it doesn’t just supply food — it serves love, happiness, and unforgettable moments,creating experiences that warm your heart with every visit.”</p>
         <Button
  as={Link}
  to="/About"
  variant="outline-warning"
  style={{ width: "100px" }}
>
  About
</Button>

    </Container>
  );
}

export default Section1;


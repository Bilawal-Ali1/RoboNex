import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/homestyle.css";
import Image from "../../assets/promotion/pro.png";

function Section3() {
  return (
    <Container style={{ paddingTop: '200px' }}>
      <Row>
        <Col>
          <img src={Image} alt="img" className="img-fluid" />
        </Col>

        <Col className="pro">
          <h2>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER </h2>
          <p>Crafted with quality ingredients and rich flavors, every bite creates a moment worth sharing.
          A truly great burger transforms an ordinary meal into a memorable experience.</p>
         <ul>
          
          <li>premium Quality Ingredients – Fresh, flavorful, and carefully selected for the best taste.</li>
           <li>Perfectly Crafted Flavors – A balanced blend that satisfies every craving.</li>
           <li>Freshly Made, Every Time – Cooked to perfection and served hot.</li>
           <li>A Taste Worth Sharing – Because great food is meant to bring people together.</li>
         </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Section3;

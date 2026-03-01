
import React from "react";
import "../../styles/homestyle.css";
import  Burger from "../../assets/hero/hero-2.png";
import { Container, Button,Row, Col } from "react-bootstrap";

function Section() {
  return (
    <section className="hero_section">
      
      <Container>
        <Row>
          <Col lg={6}>
         <h3 className="prc" style={{color:"white"}}>Only in  <span className="text-warning">$699</span></h3>
          <img className="hero" src={Burger}  alt="hero"/> 
          </Col>
          <Col lg={6} className="hr2">
           <div className="pr2">
          <h1>M.Burger</h1>
         <p>Leats Eat together ! <br/>
         Step into M.Burger — where friends, family, and happiness meet every day.<br/> Click and find your food </p>
          <Button  variant="outline-warning" style={{width:100}} >click</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;

import React from "react";
import { Container,Row,Col,Button} from "react-bootstrap";
import "../../styles/homestyle.css";
 
function Section2(){
    return(
        <Container>
      <Row>
        <h1 className="luck">TRY YOUR LUCK....</h1>
        <Col className="mo1"><h3>GET YOUR FREE <br/>CHEESE FRIES</h3>
        <Button  variant="outline-warning" style={{width:150}} >Learn More</Button>
        </Col>
        <Col className="mo2"><h3>GET YOUR FREE <br/>CHEESE BURGERS</h3>
        <Button  variant="outline-warning" style={{width:150}} >Learn More</Button>
        </Col>
      </Row>
    </Container>
    );
}
export default Section2;
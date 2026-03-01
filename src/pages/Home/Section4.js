import React from "react";
import { Container,Row,Col} from "react-bootstrap";
import "../../styles/homestyle.css";
import shop from "../../assets/shop/e-shop.png"
import shop1 from "../../assets/shop/appstore.png"
import shop2 from "../../assets/shop/googleplay.png"
function Section4(){
    return(
        <Container className=" app" >
      <Row>
        <Col className="shop-row">
  <img src={shop1} alt="App Store" className="shop-small" />
  <img src={shop2} alt="Google Play" className="shop-small" />
  <img src={shop} alt="Shop" className="shop-big" />
</Col>

      </Row>
    </Container>
    );
}
export default Section4;
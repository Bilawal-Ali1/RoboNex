import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import time from "../../assets/about/delivery-bike.png";
import time1 from "../../assets/about/pizza.png";
import time2 from "../../assets/about/salad.png";
import "../../styles/Aboutstyle.css";

function About1() {  
  return (
       <section>
         <Container className="abut">
         <h2 className="space"><span style={{color:"red"}}>ABOUT  </span> <br/> 
         DELIVERY <br/> <br/>
         </h2>
                  <Row>
        <Col><img src={time}  alt="pic"/> 
        </Col>
        <Col><ul>
           <li> <h5>“At Mr. Burger, we bring your favorite burgers hot, fresh, and fast—right to your door!”  </h5></li>
           <li> <h5>“Delivering happiness one burger at a time. Quick, tasty, and made with love!” </h5></li>
           <li><h5>“Mr. Burger is all about fresh ingredients, mouth-watering flavors, and delivering smiles to your doorstep.” </h5></li>
           <li><h5>“Your burger cravings, our priority. Fast, reliable, and oh-so-delicious delivery!” </h5></li>
           
         </ul>
         </Col>
      </Row>
      <Row>
      <h2 className="space"><span style={{color:"red"}}>ABOUT  </span> <br/> 
         FOOD <br/> <br/>
         </h2>
        <Col><ul>
           <li> <h5>“At Mr. Burger, we bring your favorite burgers hot, fresh, and fast—right to your door!”  </h5></li>
           <li> <h5>“Delivering happiness one burger at a time. Quick, tasty, and made with love!” </h5></li>
           <li><h5>“Mr. Burger is all about fresh ingredients, mouth-watering flavors, and delivering smiles to your doorstep.” </h5></li>
           <li><h5>“Your burger cravings, our priority. Fast, reliable, and oh-so-delicious delivery!” </h5></li>
           
         </ul>
         </Col>
         <Col><img src={time1}/> 
        </Col>
      </Row>
      <Row>
      <h2 className="space"><span style={{color:"red"}}>ABOUT  </span> <br/> 
         HEALTH <br/> <br/>
         </h2>
        <Col><img src={time2} /> 
        </Col>
        <Col>
         <ul>
           <li> <h5>“At Mr. Burger, we never compromise on your health — only fresh and safe ingredients make it to your plate.” </h5></li>
           <li> <h5>“Your health matters! That’s why we serve food made with care, quality, and hygiene.” </h5></li>
           <li><h5>“We believe tasty food shouldn’t come at the cost of health — enjoy every bite safely.” </h5></li>
           <li><h5>“Healthy, fresh, and delicious — that’s our promise with every meal we serve.”</h5></li>
           
         </ul>
         </Col>
      </Row>
         </Container>
            </section>
);
}
export default About1;  

import React from "react";
import {Card,Button} from 'react-bootstrap';
import Img1 from "../../assets/menu/burger-11.jpg";
import Img2 from "../../assets/menu/burger-12.jpg";
import Img3 from "../../assets/menu/burger-13.jpg";
import Img4 from "../../assets/menu/burger-14.jpg";
import Img5 from "../../assets/menu/burger-15.jpg";
import Img6 from "../../assets/menu/burger-16.jpg";
import Img7 from "../../assets/menu/burger-17.jpg";
import Img8 from "../../assets/menu/burger-18.jpg";
import "../../styles/Aboutstyle.css";

function Menu1() {  

   return (
        <div className="container">
  <div className="row">
    <div className="col-md-3 mb-4">
        
      <Card>
        <Card.Img src={Img1} />
        <Card.Body>
          <Card.Title>Crispy Chicken Zinger Burger</Card.Title>
          <Card.Text>$ 550</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img2} />
        <Card.Body>
          <Card.Title>Beef Steak Burger</Card.Title>
          <Card.Text>$ 700</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img3} />
        <Card.Body>
          <Card.Title>Cheese Beef Burger</Card.Title>
          <Card.Text>$ 750.</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img4} />
        <Card.Body>
          <Card.Title>Double Beef Cheese Burger</Card.Title>
          <Card.Text>$ 950</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    {/* Next 4 cards for the second row */}
    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img5} />
        <Card.Body>
          <Card.Title>Classic Chicken Burger</Card.Title>
          <Card.Text>$ 450</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img6} />
        <Card.Body>
          <Card.Title>Jumbo Beef Burger</Card.Title>
          <Card.Text>$ 850</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img7} />
        <Card.Body>
          <Card.Title>Grilled Chicken Burger</Card.Title>
          <Card.Text>$ 600</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-3 mb-4">
      <Card>
        <Card.Img src={Img8} />
        <Card.Body>
          <Card.Title>Crispy Chicken Mayo Burger</Card.Title>
          <Card.Text>$ 500</Card.Text>
          <Button variant="outline-warning">Click</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>

  ); 

}
export default Menu1;  
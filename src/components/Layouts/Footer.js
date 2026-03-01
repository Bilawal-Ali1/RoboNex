import React from "react";
import "../../styles/Footerstyle.css";
import { Button } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer1"> <h3>WE GUARANTEE</h3>
      <h1>30 MINUTES DELIVERY !</h1>
   <p>Their service goes beyond just delivering food — it comes with care, love, and trust. Every order feels personal, <br/>and I know I can rely on them always. Truly exceptional</p>
             <Button  variant="outline-warning" style={{width:150}} >+923270265628</Button>

   </div>
   <div className="footer2">
    
    <div ><h4 >LOCATION</h4> <br/>
     <p>IN EVERY CITY SO JUST ODER  <br/> AND ENJOY MR.BURGER </p>
    </div>
    <div ><h4>WORKING HOURS</h4> <br/>
    <p> EVERY DAY <br/>09:00 AM T0 10:00 PM </p>
    </div>
    <div ><h4>ORDER NOW</h4> <br/>
    <p >MR.BURGER <br/> 999-888-8787</p>
    </div>
    <div ><h4>FOLLOW US</h4> <br/>
    <p>follow for more Food</p>
    <i className="bi bi-facebook social-icon"></i>
    <i className="bi bi-instagram social-icon"></i>
    <i className="bi bi-instagram social-icon"></i>
    </div>

   </div>
      </footer>
  );
}


export default Footer;
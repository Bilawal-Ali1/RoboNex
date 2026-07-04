import React from "react";
import About1 from "./about1";  
import About2 from "./about2";  
import "../../styles/Aboutstyle.css";
import Spline from "@splinetool/react-spline";

function About() {
  return (
    <div>
      <div className="spline_bg">
              <Spline scene="https://prod.spline.design/aCUVWbsRPSpb1iWM/scene.splinecode" />
            </div>
       <About1 />  
      <About2 />
    </div>
  );
}
export default About;

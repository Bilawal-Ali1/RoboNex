import React from "react";
import Project1 from "./Project1";
import "../../styles/Projectstyle.css";
import Spline from '@splinetool/react-spline';
 
function Project() {
  function onSplineLoad(spline) {
    // Spline scene ka apna background yahan transparent set kar rahe hain,
    // CSS is canvas ke andar ke pixels ko chhoo nahi sakti
    spline.setBackgroundColor('rgba(0,0,0,0)');
  }
 
  return (
    <div>
      <div className="spline_bg">
        <Spline
          scene="https://prod.spline.design/aCUVWbsRPSpb1iWM/scene.splinecode"
          onLoad={onSplineLoad}
        />
        {/* Watermark cover karne wala div */}
        <div className="watermark-blocker" />
      </div>
      <Project1 />
    </div>
  );
}
 
export default Project;
 
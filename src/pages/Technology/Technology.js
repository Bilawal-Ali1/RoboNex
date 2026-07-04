import React from "react";
import Technology1 from "./Technology1";
import Technology2 from "./Technology2";
import Spline from "@splinetool/react-spline";


function Technology () {
  return (
    <div>
       <div className="spline_bg">
                    <Spline    scene="https://prod.spline.design/uskiP119u0Gvg8jG/scene.splinecode" 
/>
                  </div>
       <Technology1 />  
      <Technology2 />  
    </div>
  );
}

export default Technology;


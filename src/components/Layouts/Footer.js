import React from "react";
import "../../styles/Footerstyle.css";

function Footer() {
  return (
    <>
      <div className="sall">
        <div className="s1">
          <h1>ROBONEX</h1>
          <h3>AI powered robotics and automation systems</h3>
        </div>

        <div className="s2">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="s3">
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="mailto:bilawalrajpoot946@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2026 ROBONEX. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
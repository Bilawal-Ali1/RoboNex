import React, { useEffect, useRef } from "react";
import "../../styles/homestyle.css";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/robo2.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.querySelectorAll(
      "h3, h4, p, .btn"
    );

    // TEXT ANIMATION (ONE BY ONE)
    gsap.fromTo(
      textElements,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // IMAGE ANIMATION
    gsap.fromTo(
      imgRef.current,
      {
        x: -150,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Container style={{ marginTop: "150px", paddingTop: "-130" }}>
      <Row>

        <Col lg={6} className="img">
          <div ref={imgRef}>
            <img
              style={{ height: "450px", marginTop: "30px" }}
              src={img}
              alt="Robot"
            />
          </div>
        </Col>

        <Col lg={6}>
          <div className="red" ref={textRef} style={{ marginTop: "-12px" }}>
            <h3 style={{backgroundColor:"transparent"}}>The Future of </h3>

            <h4>
              Humanides ROBOTS <br />
              <span style={{ color: "green" , backgroundColor:"transparent"}}>
                Intelligence Beyond Imagination.
              </span>
            </h4>

            <p style={{ backgroundColor: "transparent" }}>
              We create advanced humanoid technologies that bridge the gap
              between human intelligence and artificial innovation. Designed for
              the future, built for real-world impact.
            </p>

            <div className="btn">
              <button id="btn1">Technology</button>
              <button id="btn2">Projects</button>
            </div>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Section3;
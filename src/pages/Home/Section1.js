import React, { useEffect, useRef } from "react";
import "../../styles/homestyle.css";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/robo1.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const elements = textRef.current.querySelectorAll(
      "h3, h4, p, .button-group"
    );

    // TEXT ANIMATION (ONE BY ONE SMOOTH)
    gsap.fromTo(
      elements,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.3,
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
      imageRef.current,
      {
        x: -200,
        opacity: 0,
        scale: 0.9,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, []);

  return (
    <Container>
      <Row className="align-items-center">

        <Col lg={6}>
          <div className="red" ref={textRef}>
            <h3>The Future of</h3>

            <h4>
              Humanoid ROBOTS <br />
              <span style={{ color: "green" }}>
                Intelligence Beyond Imagination.
              </span>
            </h4>

            <p>
              We create advanced humanoid technologies that bridge the gap
              between human intelligence and artificial innovation.
            </p>

            <div className="button-group">
              <button id="btn1">Technology</button>
              <button id="btn2">Projects</button>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div ref={imageRef}>
            <img
              src={img}
              alt="Robot"
              className="img-fluid"
              style={{ height: "450px" }}
            />
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Section1;
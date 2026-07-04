import React, { useState, useEffect, useRef } from "react";
import "../../styles/Technologystyle.css";
import { Container, Row, Col } from "react-bootstrap";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";

function Technology1() {
  const [loading, setLoading] = useState(true);
  const tch = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      tch.current.querySelectorAll("h1, h6"),
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <Container fluid className="se3" ref={tch}>
      <div className="techinfo">
        <h1>
          THE FUTURE OF ADVANCED
          <br />
          HUMANOID INTELLIGENCE
        </h1>

        <Row className="align-items-center">
          <Col lg={6}>
            <h6>
              We are entering a new technological era where humanoid robotics,
              artificial intelligence, and next-generation automation will
              redefine the future of human civilization. These advanced
              intelligent systems are designed not only to perform tasks, but
              to think, learn, analyze, communicate, and adapt to highly
              complex real-world environments with extraordinary precision and
              efficiency.

              <br />
              <br />

              Built through the fusion of futuristic engineering, cognitive AI,
              and human-inspired design, these humanoids represent a level of
              innovation far beyond the limits of today's technology. From
              advanced medical operations and scientific research to deep-space
              exploration, industrial automation, security systems, and human
              assistance, these next-generation humanoid concepts are created
              to operate in environments where ordinary machines cannot perform
              effectively.

              <br />
              <br />

              Their ability to make intelligent decisions, process massive
              amounts of information, interact naturally with humans, and
              continuously evolve through learning technologies marks the
              beginning of a smarter, more connected, and technologically
              superior future.

              <br />
              <br />

              This is more than robotics — it is the next evolution of
              intelligence itself, where humans and advanced machines work
              together to unlock possibilities once considered impossible.
            </h6>
          </Col>

          <Col lg={6} className="slp">
            {/* Spline Model Here */}
            {/* 
            <Spline scene="YOUR_SPLINE_URL" />
            */}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Technology1;
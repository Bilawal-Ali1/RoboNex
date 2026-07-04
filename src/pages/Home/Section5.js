import React, { useEffect, useRef } from "react";
import "../../styles/homestyle.css";
import { Container } from "react-bootstrap";
import img from "../../assets/robo2.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section5() {
  const cardsRef = useRef([]);

useEffect(() => {
  cardsRef.current.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        x: -180,
      },
      {
        opacity: 1,
        stagger: 0.25,
        x: 0,
        scrollTrigger: {
          trigger: card,
          end:"top 30",
          scrub:true,
        },
      }
    );
  });
}, []);

  return (
    <Container className="main-card-container">
      <div
        className="simple-card"
        ref={(el) => (cardsRef.current[0] = el)}
      >
        <img src={img} alt="Card" className="simple-card-img" />
        <div className="simple-card-body">
          <h3>Artificial Intelligence Solutions</h3>
          <p>
            We prioritize data protection by implementing secure and reliable
            systems that safeguard sensitive information and ensure digital
            trust.
          </p>
        </div>
      </div>

      <div
        className="simple-card"
        ref={(el) => (cardsRef.current[1] = el)}
      >
        <img src={img} alt="Card" className="simple-card-img" />
        <div className="simple-card-body">
          <h3>Smart Automation Services</h3>
          <p>
            We deliver advanced artificial intelligence solutions designed to
            improve efficiency and support business growth.
          </p>
        </div>
      </div>

      <div
        className="simple-card"
        ref={(el) => (cardsRef.current[2] = el)}
      >
        <img src={img} alt="Card" className="simple-card-img" />
        <div className="simple-card-body">
          <h3>Reliable Data Security</h3>
          <p>
            Our smart automation services streamline repetitive processes and
            increase productivity.
          </p>
        </div>
      </div>

      <div
        className="simple-card"
        ref={(el) => (cardsRef.current[3] = el)}
      >
        <img src={img} alt="Card" className="simple-card-img" />
        <div className="simple-card-body">
          <h3>Professional Support</h3>
          <p>
            Our dedicated support team provides timely assistance and expert
            guidance whenever needed.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Section5;
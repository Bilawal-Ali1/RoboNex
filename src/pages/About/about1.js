import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Aboutstyle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About1() {
  const abRef = useRef(null);

  useEffect(() => {
    const items = abRef.current.children;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3, // 👈 step by step
        ease: "power3.out",
        scrollTrigger: {
          trigger: abRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Container>
      <div className="ab1" ref={abRef}>
        <h1>
          Building the Future of <br /> Human Intelligence
        </h1>

        <h6>
          RoboNex is a next-generation robotics vision focused on advanced
          humanoid systems, AI integration
          <br />
          and futuristic automation designed for the world beyond tomorrow.
        </h6>

        <h1>About RoboNex</h1>

        <h6>
          RoboNex is a futuristic robotics concept focused on the evolution of
          humanoid intelligence and AI-driven systems.
          <br />
          <br />
          Our goal is to imagine and design how humans and machines will
          interact in the coming decades.
          <br />
          <br />
          We explore advanced humanoid robotics, neural intelligence systems,
          and automation technologies that may shape industries like healthcare,
          space exploration, education, and everyday human life.
          <br />
          <br />
          RoboNex is not just a project — it is a vision of the future.
        </h6>
      </div>
    </Container>
  );
}

export default About1;
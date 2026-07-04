import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Aboutstyle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrambleText = (el) => {
  const original = el.innerText;
  const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let iteration = 0;
  clearInterval(el._scrambleInterval);
  el._scrambleInterval = setInterval(() => {
    el.innerText = original.split("").map((letter, i) => {
      if (i < iteration) return original[i];
      return chars[Math.floor(Math.random() * chars.length)];
    }).join("");
    if (iteration >= original.length) clearInterval(el._scrambleInterval);
    iteration += 0.5;
  }, 30);
};

function About1() {
  const elemRefs = useRef([]);

  useEffect(() => {
    elemRefs.current.forEach((el) => {
      if (!el) return;
      const isH1 = el.tagName === "H1";

      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
            onEnter: () => { if (isH1) scrambleText(el); },
            onEnterBack: () => { if (isH1) scrambleText(el); },
          }
        }
      );
    });
  }, []);

  return (
    <Container>
      <div className="ab3">
        <h1 ref={(el) => (elemRefs.current[0] = el)}>
          Building the Future of <br /> Human Intelligence
        </h1>
        <h6 ref={(el) => (elemRefs.current[1] = el)}>
          RoboNex is a next-generation robotics vision focused on advanced humanoid systems, AI integration <br />
          and futuristic automation designed for the world beyond tomorrow.
        </h6>

        <h1 ref={(el) => (elemRefs.current[2] = el)}>About RoboNex</h1>
        <h6 ref={(el) => (elemRefs.current[3] = el)}>
          RoboNex is a futuristic robotics concept focused on the evolution of humanoid intelligence and AI-driven systems.
          <br /><br />
          Our goal is to imagine and design how humans and machines will interact in the coming decades.
          <br /><br />
          We explore advanced humanoid robotics, neural intelligence systems, and automation technologies that may shape
          industries like healthcare, space exploration, education, and everyday human life.
          <br /><br />
          RoboNex is not just a project — it is a vision of the future.
        </h6>
      </div>
    </Container>
  );
}

export default About1;
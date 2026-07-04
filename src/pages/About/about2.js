import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Aboutstyle.css";
import "../../styles/Technologystyle.css";
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

function About2() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;
      const h2 = el.querySelector("h2");

      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
            onEnter: () => { if (h2) scrambleText(h2); },
            onEnterBack: () => { if (h2) scrambleText(h2); },
          }
        }
      );
    });
  }, []);

  return (
    <Container className="se4">
      <div className="card">

        <div className="w2" ref={(el) => (cardRefs.current[0] = el)}>
          <h2>Vision</h2>
          To create intelligent humanoid systems that redefine the future of human civilization.
        </div>

        <div className="w3" ref={(el) => (cardRefs.current[1] = el)}>
          <h2>Innovation</h2>
          Blending Artificial Intelligence, Robotics, and Human-Centered Design into one ecosystem.
        </div>

        <div className="w2" ref={(el) => (cardRefs.current[2] = el)}>
          <h2>Future Impact</h2>
          Transforming industries like healthcare, education, space exploration, and automation.
        </div>

        <h1 style={{ color: "white", marginTop: "60px" }}>Technologies We Explore</h1>

        <div className="w3" ref={(el) => (cardRefs.current[3] = el)}>
          <h2>Humanoid Robotics</h2>
          <p>Advanced human-like robots designed to replicate movement, behavior, and interaction. Focused on creating intelligent machines that can work alongside humans in real-world environments.</p>
        </div>

        <div className="w2" ref={(el) => (cardRefs.current[4] = el)}>
          <h2>Artificial Intelligence</h2>
          <p>Smart systems that enable machines to think, learn, and make decisions like humans. It powers automation, prediction, and intelligent behavior in modern robotics.</p>
        </div>

        <div className="w3" ref={(el) => (cardRefs.current[5] = el)}>
          <h2>Automation Engineering</h2>
          <p>Technology focused on designing systems that can operate tasks without human intervention. It improves efficiency, accuracy, and productivity across industries.</p>
        </div>

        <div className="w2" ref={(el) => (cardRefs.current[6] = el)}>
          <h2>Future Healthcare Robotics</h2>
          <p>Advanced robotic systems for medical assistance, surgery, and patient care. They aim to improve healthcare precision, speed, and accessibility worldwide.</p>
        </div>

        <div className="w3" ref={(el) => (cardRefs.current[7] = el)}>
          <h2>Space Robotics Systems</h2>
          <p>Robots designed for space exploration, research, and extraterrestrial missions. They operate in extreme conditions where human presence is limited or impossible.</p>
        </div>

        <div className="w2" ref={(el) => (cardRefs.current[8] = el)}>
          <h2>Automation Engineering</h2>
          <p>Technology focused on designing systems that can operate tasks without human intervention. It improves efficiency, accuracy, and productivity across industries.</p>
        </div>

      </div>
    </Container>
  );
}

export default About2;
import React, { useEffect, useRef } from "react";
import "../../styles/Technologystyle.css";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Technology1() {
  const tech = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card > div");

    cards.forEach((card) => {
      const isLeft = card.classList.contains("w2");

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 120,
          x: isLeft ? -80 : 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",

            scrub: true, // 👈 scroll ke sath appear + disappear
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Container className="se3">
      <div className="card" ref={tech}>

        <div className="w2">
          <h2>Persona Genesis Engine</h2>
          Assigns a unique identity and behavioral style to every humanoid.
        </div>

        <div className="w3">
          <h2>Communication Style Engine</h2>
          Adjusts tone (formal, friendly, professional).
        </div>

        <div className="w2">
          <h2>Emotional Recognition System</h2>
          Detects human emotions through voice, face, and behavior cues.
        </div>

        <div className="w3">
          <h2>Safety Constraint System</h2>
          Prevents harmful or unsafe actions.
        </div>

        <div className="w2">
          <h2>Self-Reflection Module</h2>
          Improves performance using past actions.
        </div>

        <div className="w3">
          <h2>Autonomous Action Planner</h2>
          Plans actions without constant input.
        </div>

        <div className="w2">
          <h2>Perception Mirror System</h2>
          Reads human expressions and body language.
        </div>

        <div className="w3">
          <h2>Human Motion Engine</h2>
          Controls natural walking and gestures.
        </div>

        <div className="w2">
          <h2>Adaptive Identity Shift Module</h2>
          Adjusts behavior based on environment.
        </div>

        <div className="w3">
          <h2>Emotional Memory System</h2>
          Stores emotional interactions.
        </div>

        <div className="w2">
          <h2>Interaction Timing Control</h2>
          Makes replies feel natural, not instant.
        </div>

        <div className="w3">
          <h2>Routine Learning Engine</h2>
          Learns daily human habits.
        </div>

        <div className="w2">
          <h2>Trust Development System</h2>
          Builds long-term trust with users.
        </div>

        <div className="w3">
          <h2>Thought Simulation Layer</h2>
          Simulates reasoning before response.
        </div>

        <div className="w2">
          <h2>Identity Continuity System</h2>
          Keeps personality stable over time.
        </div>

        <div className="w3">
          <h2>Emotional Response Engine</h2>
          Generates natural emotional reactions.
        </div>

        <div className="w2">
          <h2>Human Behavior Replication Module</h2>
          Mimics natural human movement.
        </div>

        <div className="w3">
          <h2>Context Awareness System</h2>
          Understands situation and environment.
        </div>

        <div className="w2">
          <h2>Personality Stability Engine</h2>
          Prevents random behavior changes.
        </div>

        <div className="w3">
          <h2>Ethical Decision Layer</h2>
          Ensures safe and responsible actions.
        </div>

        <div className="w2">
          <h2>Human Presence System</h2>
          Creates realistic “presence” feeling.
        </div>

        <div className="w3">
          <h2>Social Behavior Simulator</h2>
          Handles group interactions naturally.
        </div>

        <div className="w2">
          <h2>Adaptive Memory Layer</h2>
          Learns from past interactions.
        </div>

        <div className="w3">
          <h2>Natural Dialogue Engine</h2>
          Smooth human-like conversation flow.
        </div>

        <div className="w2">
          <h2>Fully Integrated Humanoid System</h2>
          Combines all modules into one system.
        </div>

        <div className="w3">
          <h2>Predictive Behavior Core</h2>
          Predicts user needs in advance.
        </div>

      </div>
    </Container>
  );
}

export default Technology1;
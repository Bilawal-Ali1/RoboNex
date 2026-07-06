import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from "../../assets/about/1.jpg";
import img2 from "../../assets/about/2.jpg";
import img3 from "../../assets/about/3.jpg";
import img4 from "../../assets/about/4.jpg";
// import img5 from "../../assets/about/5.jpg";
import img6 from "../../assets/about/6.jpg";
import img7 from "../../assets/about/7.jpg";
import img8 from "../../assets/about/8.jpg";
import img9 from "../../assets/about/9.jpg";
import "../../styles/Projectstyle.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

function Project1() {
  const expRef = useRef(null);
  const textRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      expRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 }
    );

    textRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            scrub: true,
          },
        }
      );
    });

    imgRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Container className="prj1">
      <div className="Explor">
        <h2 ref={expRef}>EXPLORE Projects</h2>
      </div>

      <Row>
        <Col lg={6}>
          <div className="text">
            <h1>ODEX-7</h1>
            <h6>Type: Planetary Exploration Robot</h6>
            <p>
              ODEX-7 explores dangerous planets and gathers environmental,
              geological, and atmospheric data while surviving extreme space
              conditions.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">

          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[1] = el)}
          >
            <h1>ECLIPSE DEFENSE</h1>
            <h6>Type: Autonomous Security Intelligence Robot</h6>
            <p>
              ECLIPSE DEFENSE continuously scans environments for threats using
              intelligent surveillance systems and predictive AI security analysis.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
                     <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img9} alt="Card" className="simple-card-img" />

          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[2] = el)}
          >
            <h1>AMT-7</h1>
            <h6>Type: The Shape-Shifting War Machine</h6>
            <p>
              AMT-7 is an adaptive transformation mech engineered for extreme
              environments. It instantly changes between humanoid combat mode
              and hyper-speed vehicle mode.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
                    <img  style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img8} alt="Card" className="simple-card-img" />

          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[3] = el)}
          >
            <h1>NEURO-HIVE</h1>
            <h6>Type: The Artificial Mind Of Civilization</h6>
            <p>
              NEURO-HIVE is a god-level AI consciousness system capable of
              controlling millions of robots simultaneously through a unified neural network.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
                    <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img7} alt="Card" className="simple-card-img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[4] = el)}
          >
            <h1>SWARM-ARCH PRIME</h1>
            <h6>Type: One Mind. Ten Thousand Machines</h6>
            <p>
              SWARM-ARCH PRIME is a distributed robotic swarm where thousands of drones
              operate like a single living organism.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
                    <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img1} alt="Card" className="simple-card-img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[5] = el)}
          >
            <h1>AETHER BLOOM</h1>
            <h6>Type: Where Technology Meets Life</h6>
            <p>
              AETHER BLOOM represents a future civilization where AI, robots,
              forests, rivers, and humans coexist in harmony.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
            <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img2} alt="Card" className="simple-card-img" />
            </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[6] = el)}>
            <h1>NEXUS-VOID</h1>
            <h6>Type: The Phantom Intelligence</h6>
            <p>
              NEXUS-VOID is a stealth-operational intelligence unit engineered
              for cyber infiltration and high-risk tactical missions.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
                    <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img6} alt="Card" className="simple-card-img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[7] = el)}>
            <h1>ODEX-8</h1>
            <h6>Type: Planetary Exploration Robot</h6>
            <p>
              ODEX-8 explores dangerous planets and gathers environmental,
              geological, and atmospheric data while surviving extreme space
              conditions.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
               <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img3} alt="Card" className="simple-card-img" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div
            className="text"
            ref={(el) => (textRefs.current[8] = el)}>
            <h1>VITALIS-9</h1>
            <h6>Type: Autonomous Surgical Robo</h6>
            <p>
              VITALIS-9 scans the patient's body in real time and creates a full
              digital health map before surgery. Its robotic arms perform operations
              with microscopic precision while AI continuously monitors heartbeat,
              blood flow, and organ activity.
            </p>
            <Button>Explore</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="mod">
        <img   style={{ marginTop:"120px",marginLeft:"100px", backgroundColor: "transparent", width: "70%", height: "60%"}} src={img4} alt="Card" className="simple-card-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Project1;
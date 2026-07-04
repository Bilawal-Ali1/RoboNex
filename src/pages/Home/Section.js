import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/homestyle.css";
import Spline from "@splinetool/react-spline";
gsap.registerPlugin(ScrollTrigger);
 
function Section() {
  const titleRef = useRef(null);
  const h6Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const imgRef = useRef(null);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
 
      // HERO TITLE
      gsap.fromTo(
        titleRef.current,
        { y: -60, opacity: 0, scale: 0.6 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 }
      );
 
      // TEXT ANIMATION HELPER
      const scrollAnim = (el, fromVars, toVars, start = "top 85%", end = "top 40%") => {
        gsap.fromTo(el, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        });
      };
 
      // =========================
      // RESPONSIVE VALUES
      // matchMedia se desktop/tablet/mobile ke liye
      // alag alag x/y offsets use hote hain, taake
      // chhoti screens par overlap na ho.
      // =========================
      const mm = gsap.matchMedia();
 
      mm.add(
        {
          isDesktop: "(min-width: 993px)",
          isTablet: "(min-width: 768px) and (max-width: 992px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop, isTablet, isMobile } = context.conditions;
 
          // TEXT ANIMATIONS (offsets scale down on smaller screens)
          const h6From = isDesktop ? -80 : isTablet ? -40 : -20;
          const h6To = isDesktop ? 120 : isTablet ? 60 : 30;
          const p1From = isDesktop ? 100 : isTablet ? 50 : 30;
          const p2From = isDesktop ? -100 : isTablet ? -50 : -30;
 
          scrollAnim(
            h6Ref.current,
            { x: h6From, opacity: 0 },
            { x: h6To, opacity: 1 },
            "top 85%",
            "top 20%"
          );
 
          scrollAnim(
            p1Ref.current,
            { x: p1From, opacity: 0 },
            { x: 0, opacity: 1 },
            "top 85%",
            "top 60%"
          );
 
          scrollAnim(
            p2Ref.current,
            { x: p2From, opacity: 0 },
            { x: 0, opacity: 1 },
            "top 90%",
            "top 40%"
          );
 
          // =========================
          // IMAGE TIMELINE
          // =========================
 
          // FIX: initial state
          gsap.set(imgRef.current, {
            x: 0,
            y: 0,
            opacity: 1,
            willChange: "transform",
          });
 
          if (isDesktop) {
            // ORIGINAL desktop behaviour (unchanged)
            const imgTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: h6Ref.current,
                start: "top 95%",
                end: "top -50%",
                scrub: true,
              },
            });
 
            imgTimeline
              .to(imgRef.current, {
                x: -550,
                y: 650,
                duration: 1,
                scale: 1.5,
              })
              .to(imgRef.current, {
                x: -300,
                y: 1150,
                duration: 1,
                scale: 1.5,
              });
          } else if (isTablet) {
            // TABLET: smaller movement, image stays on-screen
            const imgTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: h6Ref.current,
                start: "top 95%",
                end: "top -50%",
                scrub: true,
              },
            });
 
            imgTimeline
              .to(imgRef.current, {
                x: -120,
                y: 180,
                duration: 1,
                scale: 1.15,
              })
              .to(imgRef.current, {
                x: -60,
                y: 320,
                duration: 1,
                scale: 1.15,
              });
          } else if (isMobile) {
            // MOBILE: no x/y drag (CSS already positions/sizes .pr),
            // just a gentle fade/scale so nothing overlaps other text.
            gsap.fromTo(
              imgRef.current,
              { opacity: 0.6, scale: 0.95 },
              {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                  trigger: h6Ref.current,
                  start: "top 95%",
                  end: "top 40%",
                  scrub: true,
                },
              }
            );
          }
        }
      );
    });
 
    return () => ctx.revert();
  }, []);
 
  return (
    <Container>
 
      <Row>
        <Col lg={6} className="hr2">
          <div className="pr2">
            <h1 ref={titleRef}>
              AI-powered <br />
              <span style={{ color: "green" }}>Humanoid Robotics</span>
              <br />
              For the Future World
            </h1>
          </div>
        </Col>
       <Col lg={6} className="hr">
  <div className="pr"
    ref={imgRef}
    style={{
      width: "290px",
      height: "350px",
      marginTop: "200px",
      borderRadius: "8px",
      marginLeft: "150px",    }}
  >
    <Spline className="ijp" scene="https://prod.spline.design/xCM62GjFuHofSpYP/scene.splinecode" />
  </div>
</Col>
      </Row>
 
      {/* H6 */}
      <Row>
        <Col lg={6} />
        <Col lg={6} className="hr2">
          <div className="pr1">
            <h6 ref={h6Ref}>
              We design
              <span style={{ color: "green" }}>advanced AI systems </span>and
              <span style={{ color: "red" }}>humanoid robots </span> for future industries,
              healthcare and automation.
            </h6>
          </div>
        </Col>
      </Row>
 
      {/* PARAGRAPHS */}
      <Row>
        <Col lg={4} className="hr2">
          <div className="pr3">
            <p ref={p1Ref}>
              Humanoid robots are  <span style={{ color: "green" }}>not just machines </span>used for work or helping humans
            </p>
          </div>
        </Col>
 
        <Col lg={4} />
 
        <Col lg={4} className="hr2">
          <div className="pr4">
            <p ref={p2Ref}>
              its
              <span style={{ color: "red" }}> an emotion </span>to creating human-like intelligence,
              with behavior and  closer to humans, inspired by thinking and natural interaction.
            </p>
          </div>
        </Col>
      </Row>
 
    </Container >
  );
}
 
export default Section;
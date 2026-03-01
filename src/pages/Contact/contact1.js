import React from "react";
import {Form,Button,Row,Col,Container} from 'react-bootstrap';
import "../../styles/Contactstyle.css";

function Contact1() {  
  return (
    <div className="contact-page">
      <Container>
        <Row className="gx-0 align-items-center">
          {/* LEFT SIDE */}
          <Col md={6} className="contact-info">
            <ul className="list-unstyled">
              <li>
                <h3>ORDER HERE</h3>
                <p>📞 999-888-8787</p>
              </li>

              <li>
                <h3>OUR WEBSITE</h3>
                <p>🌐 www.burger.com</p>
              </li>

              <li>
                <h3>CHECK ON FACEBOOK</h3>
                <p>📘 @M.burger</p>
              </li>
            </ul>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} className="contact-form">
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact1;  
import React from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

const EcommerceFooter = () => {
  return (
    <footer style={{ backgroundColor: "#343a40", color: "white", padding: "40px 0" }}>
      <Container>
        {/* Shop Categories */}
        <Row className="mb-4">
          <Col md={3} className="mb-3">
            <h5>Shop Categories</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Furniture
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Electronics
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Clothing
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Accessories
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Customer Service */}
          <Col md={3} className="mb-3">
            <h5>Customer Service</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Contact Us
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Shipping & Returns
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                FAQs
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Track Order
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Company */}
          <Col md={3} className="mb-3">
            <h5>Company</h5>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                About Us
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Careers
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "transparent", border: "none", color: "gray" }}>
                Terms & Conditions
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Newsletter Signup */}
          <Col md={3} className="mb-3">
            <h5>Stay Updated</h5>
            <Form>
              <Form.Group controlId="newsletterEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="info" className="mt-2" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="text-center">
          <Col>
            <h5>Follow Us</h5>
            <div>
              <Button variant="link" className="text-white" style={{ padding: "0 10px" }}>
                <Facebook />
              </Button>
              <Button variant="link" className="text-white" style={{ padding: "0 10px" }}>
                <Twitter />
              </Button>
              <Button variant="link" className="text-white" style={{ padding: "0 10px" }}>
                <Instagram />
              </Button>
              <Button variant="link" className="text-white" style={{ padding: "0 10px" }}>
                <Linkedin />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-4">
          <Col>
            <p style={{ color: "gray" }}>
              © {new Date().getFullYear()} Mero pasal. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default EcommerceFooter;

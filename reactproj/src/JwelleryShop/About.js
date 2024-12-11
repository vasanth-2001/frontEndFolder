import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col md={8}>
            <h1>About Us</h1>
            <p>
              Our jewelry shop has a rich history of providing exquisite pieces crafted with precision and care. The shop was founded by [Owner Name], a passionate jewelry enthusiast. We work with renowned partners to ensure the best quality for our customers.
            </p>
            <h2>Our Partners</h2>
            <ListGroup>
              <ListGroup.Item>Partner 1</ListGroup.Item>
              <ListGroup.Item>Partner 2</ListGroup.Item>
              <ListGroup.Item>Partner 3</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Meet the Owner</Card.Title>
                <Card.Text>
                  Vasanth has been in the jewelry business for over 30 years. With a deep passion for fine craftsmanship, they have built this shop into a trusted brand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

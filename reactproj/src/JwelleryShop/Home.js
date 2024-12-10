import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Welcome to Our Jewelry Shop</h1>
            <p className="text-center">
              We offer a wide selection of high-quality jewelry. Our shop has been serving customers for over 20 years with a commitment to excellence.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Exclusive Collection</Card.Title>
                <Card.Text>
                  Browse our exclusive collection of exquisite jewelry, handcrafted with love and care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

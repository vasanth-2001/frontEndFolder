import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const products = [
  { pname: 'Gold Necklace', pprice: '$500',pimage: 'https://example.com/gold-necklace.jpg' },
  { pname: 'Diamond Ring', pprice: '$1500' },
  { pname: 'Silver Bracelet', pprice: '$250' },
];

const Products = () => {
  return (
    <div className="products">
      <Container>
        <Row>
          <Col>
            <h1>Our Products</h1>
            <Row>
              {products.map((product, index) => (
                <Col md={4} key={index}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${product.pname}`} />
                    <Card.Body>
                      <Card.Title>{product.pname}</Card.Title>
                      <Card.Text>{product.pprice}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <h2>Product Table</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.pname}</td>
                    <td>{product.pprice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;

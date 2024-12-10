import React from 'react';
import { useForm } from 'react-hook-form';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  isInvalid={errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  {...register('contact', { required: 'Contact number is required' })}
                  isInvalid={errors.contact}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.contact?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  {...register('feedback', { required: 'Feedback is required' })}
                  isInvalid={errors.feedback}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.feedback?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>

          <Col md={6}>
            <h2>Our Location</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={{ lat: 40.748817, lng: -73.985428 }}
                zoom={15}
              >
                <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

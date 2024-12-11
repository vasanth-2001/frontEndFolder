// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const Contact = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="contact">
//       <Container>
//         <Row>
//           <Col md={6}>
//             <h1>Contact Us</h1>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//               <Form.Group>
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   {...register('name', { required: 'Name is required' })}
//                   isInvalid={errors.name}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.name?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   {...register('email', { required: 'Email is required' })}
//                   isInvalid={errors.email}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.email?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Contact Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   {...register('contact', { required: 'Contact number is required' })}
//                   isInvalid={errors.contact}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.contact?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Feedback</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   {...register('feedback', { required: 'Feedback is required' })}
//                   isInvalid={errors.feedback}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.feedback?.message}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Button variant="primary" type="submit">Submit</Button>
//             </Form>
//           </Col>

//           <Col md={6}>
//             <h2>Our Location</h2>
//             {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//               <GoogleMap
//                 mapContainerStyle={{ width: '100%', height: '400px' }}
//                 center={{ lat: 40.748817, lng: -73.985428 }}
//                 zoom={15}
//               >
//                 <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//               </GoogleMap>
//             </LoadScript> */}
//             <div style={{ width: '100%', height: '400px' }}>
//         <iframe
//           title="Location"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           style={{ border: 0 }}
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4626.3182113796165!2d80.21712506631829!3d12.82683059256249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1733892275513!5m2!1sen!2sin" 
//            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
//         ></iframe>

//       </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Contact;



// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    feedback: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.contact) newErrors.contact = 'Contact number is required';
    if (!formData.feedback) newErrors.feedback = 'Feedback is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert('Form submitted');
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <small className="text-danger">{errors.contact}</small>}
        </div>
        <div className="form-group">
          <label>Feedback</label>
          <textarea
            className="form-control"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
          {errors.feedback && <small className="text-danger">{errors.feedback}</small>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h3>Location</h3>
      {/* <div style={{ width: '100%', height: '600px' }}> */}
        {/* <iframe
          title="Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=Jewelry+Shop&key=YOUR_GOOGLE_MAPS_API_KEY"
        ></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4626.3182113796165!2d80.21712506631829!3d12.82683059256249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1733892275513!5m2!1sen!2sin"
         width="500px" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      {/* </div> */}
    </div>
  );
}

export default Contact;

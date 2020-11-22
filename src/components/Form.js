import React from 'react';
import {Form, Button} from 'react-bootstrap';

class ContactForm extends React.Component {
  render(){
    return(
      <Form>
        <Form.Group controlId="contact_name">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="text" placeholder="First Name Last Name" />
        </Form.Group>
        <Form.Group controlId="contact_email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contact_subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Contact subject" />
        </Form.Group>
        <Form.Group controlId="contact_text">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
          
    );
  }
}

export default ContactForm;
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="my-5">
            <h2>Contact Us</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>
                <Button variant="primary" type="submit">Send Message</Button>
            </Form>
        </Container>
    );
};

export default Contact;

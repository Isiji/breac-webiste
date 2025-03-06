import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Envelope, Person, ChatDots } from 'react-bootstrap-icons';
import './Contact.css'; // Import styles


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
        >
            <Container className="contact-container my-5">
                <h2 className="text-center mb-4">Get in Touch</h2>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form className="contact-form">
                            <Form.Group className="mb-3">
                                <Form.Label><Person className="contact-icon" /> Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Envelope className="contact-icon" /> Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><ChatDots className="contact-icon" /> Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                            </Form.Group>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button variant="primary" type="submit" className="contact-btn">Send Message</Button>
                            </motion.div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default Contact;

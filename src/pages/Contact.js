import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Envelope, Person, ChatDots, Telephone, GeoAlt } from 'react-bootstrap-icons';
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
                    {/* Contact Information */}
                    <Col md={5} className="mb-4">
                        <Card className="p-4 shadow-sm">
                            <h4 className="text-center">Breac Ltd</h4>
                            <p><GeoAlt className="contact-icon" /> <strong>Address:</strong> P.O BOX 20134 – 00100 NBI</p>
                            <p><Telephone className="contact-icon" /> <strong>Phone:</strong> <a href="tel:+254711772930">+254 711 772930</a></p>
                            <p><Envelope className="contact-icon" /> <strong>Email:</strong> <a href="mailto:breacltd@gmail.com">breacltd@gmail.com</a></p>
                        </Card>
                    </Col>

                    {/* Contact Form */}
                    <Col md={6}>
                        <Form className="contact-form">
                            <Form.Group className="mb-3">
                                <Form.Label><Person className="contact-icon" /> Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><Envelope className="contact-icon" /> Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label><ChatDots className="contact-icon" /> Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
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

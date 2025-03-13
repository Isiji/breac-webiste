import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import services from '../data/services';
import './Services.css';

const whatsappNumber = "254711772930"; // Replace with actual number

const Services = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Airline Services</h2>
            <Row>
                {services.map((service, index) => {
                    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I'm interested in ${service.title}.`)}`;
                    return (
                        <Col md={6} key={index} className="mb-4">
                            <div className="service-container">
                                {/* Image slides in from the left */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -100 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true, amount: 0.2 }} 
                                    transition={{ duration: 1.2 }}
                                    className="w-50"
                                >
                                    <Card.Img src={service.image} className="service-logo" />
                                </motion.div>

                                {/* Text slides in from the right */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 100 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true, amount: 0.2 }} 
                                    transition={{ duration: 1.2 }}
                                    className="w-50 ps-4"
                                >
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <ul>
                                            {service.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                        {/* WhatsApp Button */}
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                            <Button variant="primary" className="mt-2">Inquire via WhatsApp</Button>
                                        </a>
                                    </Card.Body>
                                </motion.div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Services;

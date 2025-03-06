import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import services from '../data/services';
import './Services.css';

const Services = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col md={6} key={index} className="d-flex align-items-center mb-4">
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
                            className="w-50 ps-3"
                        >
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;

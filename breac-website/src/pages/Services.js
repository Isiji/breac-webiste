import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import service images
import aviationImg from '../assets/images/aviation.jpg';
import cargoImg from '../assets/images/cargoImg.jpg';
import eventsImg from '../assets/images/event-prop.jpeg';
const services = [
    { id: "aviation-consultancy", title: "Aviation Consultancy", image: aviationImg, description: "Expert advice on permits, registration, and charters." },
    { id: "cargo-forwarding", title: "Cargo Clearing & Forwarding", image: cargoImg, description: "Sea & air logistics, including live animal transport." },
    { id: "events-deco", title: "Events Deco Branding", image: eventsImg, description: "Creative event decorations and branding solutions." }
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5 }}
        >
            <Container className="my-5">
                <h2 className="text-center">Our Services</h2>
                <Row>
                    {services.map((service) => (
                        <Col md={4} key={service.id}>
                            <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                    <Card className="text-center">
                                        <Card.Img variant="top" src={service.image} className="service-image" />
                                        <Card.Body>
                                            <Card.Title>{service.title}</Card.Title>
                                            <Card.Text>{service.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Services;

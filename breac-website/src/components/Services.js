import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aviationImg from '../assets/images/aviation.jpg';
import cargoImg from '../assets/images/cargoImg.jpg';
import marketingImg from '../assets/images/event-prop.jpeg';

const services = [
    { title: "Aviation Consultancy", image: aviationImg, description: "Expert advice on permits, registration, and charters." },
    { title: "Cargo Forwarding", image: cargoImg, description: "Sea & air logistics, including live animal transport." },
    { title: "Marketing & PR", image: marketingImg, description: "Branding, event décor, and promotional strategies." }
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
                <h2 className="text-center mb-4">Our Services</h2>
                <Row className="g-4"> {/* Bootstrap spacing class */}
                    {services.map((service, index) => (
                        <Col md={4} key={index} className="service-spacing">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={service.image} alt={service.title} className="service-image" />
                                    <Card.Body>
                                        <Card.Title>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Services;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aviationImg from '../assets/images/aviationconsultancy.webp';
import cargoImg from '../assets/images/cargoImg.jpg';
import charterImg from '../assets/images/charter-flight.jpg';
import './Services.css'; // Import styling

const services = [
    { 
        title: "Aviation Consultancy", 
        image: aviationImg, 
        description: "Expert advice on permits, registration, aircraft handling, and airline operations in East Africa." 
    },
    { 
        title: "Cargo Handling & Forwarding", 
        image: cargoImg, 
        description: "Specialized cargo handling, including live animal transport and international freight solutions." 
    },
    { 
        title: "Charter Flight Coordination", 
        image: charterImg, 
        description: "Providing on-demand charter flight services for private, corporate, and cargo needs." 
    }
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
                <h2 className="text-center mb-4">Our Airline Services</h2>
                <p className="text-center">
                    <i>At Breac Ltd, we provide top-tier aviation services, specializing in airline representation, cargo operations, and charter flight solutions.</i>
                </p>
                <Row className="g-4"> {/* Bootstrap spacing class */}
                    {services.map((service, index) => (
                        <Col md={4} key={index} className="service-spacing">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                <Card className="text-center service-card">
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

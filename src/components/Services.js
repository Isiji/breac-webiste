import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aviationImg from '../assets/images/aviationconsultancy.webp';
import cargoImg from '../assets/images/aviationcargo.webp';
import charterImg from '../assets/images/charter-flight.jpg';
import outsourced from '../assets/images/outsourced-production.avif';
import transit from '../assets/images/transit-permits.jpg';
import marketingpr from '../assets/images/marketingPR.avif';
import './Services.css'; // Import styling

const services = [
    { 
        title: "Outsourced Productions & General Supplies", 
        image: outsourced, 
        description: "We provide high-quality outsourced production solutions and general supplies for businesses and industries." 
    },
    { 
        title: "Aviation Research Analysis & Consultancy", 
        image: aviationImg, 
        description: "Comprehensive research and consultancy services for airlines, airport operations, and aviation regulations." 
    },
    { 
        title: "Cargo Clearing & Forwarding", 
        image: cargoImg, 
        description: "Reliable cargo clearing and forwarding, including specialized handling for live animals and perishable goods." 
    },
    { 
        title: "PR & Marketing Consultancy", 
        image: marketingpr, 
        description: "Strategic public relations and marketing solutions tailored for airlines and aviation businesses." 
    },
    { 
        title: "Airline Landing & Special Transit Permits", 
        image: transit, 
        description: "Facilitating landing rights, overflight clearances, and special transit permits for airlines." 
    },
    { 
        title: "Airlines Local Representation", 
        image: charterImg, 
        description: "Acting as local representatives for international airlines, ensuring smooth operations and compliance." 
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

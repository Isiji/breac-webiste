import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import bluechipLogo from '../assets/images/bluechip.jpg'; 
import longWingsLogo from '../assets/images/longwings.png'; 
import cobrexLogo from '../assets/images/cobrex.jpg';
import './OurClients.css'; // Import styling

const clients = [
    { 
        name: "Bluechip Aviation Tours and Safari", 
        logo: bluechipLogo, 
        testimonial: "An IATA agent specializing in holiday tours and passenger flight charters across Kenya." 
    },
    { 
        name: "Long Wings Express Ltd", 
        logo: longWingsLogo, 
        testimonial: "A highly specialized logistics company handling humanitarian relief cargo, military support cargo, and mass medical supplies in East Africa. Breac Ltd provides aircraft charters for their operations."
    },
    { 
        name: "S.C. COBREX AERO S.R.L (Romania)", 
        logo: cobrexLogo, 
        testimonial: "We represent Cobrex Aero in Africa from their SHJ offices. They own and operate several aircraft for cargo and passenger transport, including B757-2F, B737-400F, B777F, and various helicopters."
    }
];

const OurClients = () => {
    return (
        <Container className="my-5 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <h2>Our Clients</h2>
                <Row>
                    {clients.map((client, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <motion.div 
                                initial={{ opacity: 0, x: -100 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: index * 0.2 }} 
                            >
                                <Card className="shadow-sm client-card">
                                    <Card.Img variant="top" src={client.logo} className="client-logo" />
                                    <Card.Body>
                                        <Card.Title>{client.name}</Card.Title>
                                        <Card.Text>"{client.testimonial}"</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </Container>
    );
};

export default OurClients;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aviationLogo from '../assets/images/alpha-sky image.jpeg'; 
import cobrexLogo from '../assets/images/cobrex.jpg'; 
import sacLogo from '../assets/images/SAC-Logo.jpg';
import './OurClients.css'; // Import styling

const clients = [
    { name: "Alpha Sky Aviation (UAE)", logo: aviationLogo, testimonial: "Breac Ltd has been a reliable partner in aviation logistics, ensuring seamless operations." },
    { name: "S.C. COBREX AERO S.R.L (Romania)", logo: cobrexLogo, testimonial: "Excellent service and great attention to detail. Highly recommended!" },
    { name: "SAC Kenya", logo: sacLogo, testimonial: "Top-tier aviation consultancy and GSSA services!" }
];

const OurClients = () => {
    return (
        <Container className="my-5 text-center">
            <h2>Our Clients</h2>
            <Row>
                {clients.map((client, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="shadow-sm client-card">
                            <Card.Img variant="top" src={client.logo} className="client-logo" />
                            <Card.Body>
                                <Card.Title>{client.name}</Card.Title>
                                <Card.Text>"{client.testimonial}"</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OurClients;

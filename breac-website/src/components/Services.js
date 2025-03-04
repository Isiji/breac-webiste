import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
    { title: "Aviation Consultancy", icon: "✈️", description: "Expert advice on permits, registration, and charters." },
    { title: "Cargo Forwarding", icon: "📦", description: "Sea & air logistics, including live animal transport." },
    { title: "Marketing & PR", icon: "📢", description: "Branding, event décor, and promotional strategies." },
    { title: "Flour Milling", icon: "🌾", description: "High-quality maize flour for institutions and partners." }
];

const Services = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">Our Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col md={3} key={index}>
                        <Card className="text-center">
                            <Card.Body>
                                <h2>{service.icon}</h2>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Services;

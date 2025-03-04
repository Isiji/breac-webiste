import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">About Us</h2>
            <Row className="align-items-center">
                <Col md={6}>
                    <p>
                        Established in 2017, Breac Ltd unifies multiple businesses under one entity.
                        Our mission is to provide high-quality products and services at affordable prices,
                        positively impacting society and the environment.
                    </p>
                </Col>
                <Col md={6}>
                    <Image src="/images/about-us.jpg" fluid rounded />
                </Col>
            </Row>
        </Container>
    );
};

export default About;

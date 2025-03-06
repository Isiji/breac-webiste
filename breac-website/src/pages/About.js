import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpeg'; // Import the image

const About = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">About Breac Ltd</h2>
            <Row className="align-items-center">
                {/* Text slides in from the left */}
                <Col md={6}>
                    <motion.div 
                        initial={{ opacity: 0, x: -200 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.2 }} 
                        transition={{ duration: 1.5 }}
                    >
                        <p>
                            Established in 2017, Breac Ltd unifies multiple businesses under one entity. 
                            Our mission is to provide high-quality products and services at affordable prices, 
                            positively impacting society and the environment.
                        </p>
                    </motion.div>
                </Col>

                {/* Image slides in from the right */}
                <Col md={6}>
                    <motion.div 
                        initial={{ opacity: 0, x: 200 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, amount: 0.2 }} 
                        transition={{ duration: 1.5 }}
                    >
                        <Image src={aboutImg} fluid rounded />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;

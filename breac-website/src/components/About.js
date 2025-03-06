import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpeg'; // Import image

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5 }}
        >
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
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                            <Image src={aboutImg} fluid rounded />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
};

export default About;

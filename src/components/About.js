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
                        Breac Ltd is a conglomerate of several entities that carry out different business activities.
                        Breac Limited was incorporated in the year 2017 to unify all the private entities into a single 
                        unit for ease of doing business with our clients by providing a single tag for all our services and products.

                        At Breac Ltd, we believe in doing things right from the start in order to lessen the burden 
                        that comes after purchase of our goods and services, hence our slogan; “Doing It Right”.

                        </p>
                        <h1>Our Services:</h1>
                            <p>- Outsourced Productions and general supplies.</p>
	                        <p>- Aviation Research analysis and Aviation Consultancy.</p>
	                        <p>- Cargo Clearing and Forwarding services.</p>
	                        <p>- PR and Marketing Consultancy</p>
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

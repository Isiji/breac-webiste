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
                        Breac Ltd is a conglomerate of several entities that carry out different business activities.
                        Breac Limited was incorporated in the year 2017 to unify all the private entities into a single 
                        unit for ease of doing business with our clients by providing a single tag for all our services and products.

                        At Breac Ltd, we believe in doing things right from the start in order to lessen the burden that comes after
                        purchase of our goods and services, hence our slogan; “Doing It Right”.

                        </p>
                        <p> <h1>Our Mission: </h1>
                            Provide essential life needs to the living to have a better life by, giving the best quality 
                            products and services at the most affordable value that will impact positively to the world, 
                            environment, the society and the individuals in the community.
                        </p>
                        <p>
                            Breac Limited employs experts in all our entities who have vast experience in all the businesses that we are involved in.
                            Our Products range from home essential kits to Foodstuffs.
                            Our services entail; Aviation consultancy, Outsourced production, Events deco branding, PR and Marketing consultancy services.

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

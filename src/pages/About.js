import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpeg'; // About Image
import missionImg from '../assets/images/aviationcons2.jpeg'; // Mission Image
import CompanyStats from '../components/CompanyStats'; // Dynamic Stats Component
import './About.css'; // Import styling

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="about-hero">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="about-hero-content"
                >
                    <h1>Empowering Businesses, Delivering Excellence</h1>
                    <p>Providing top-notch solutions through aviation consultancy, cargo forwarding, and marketing expertise.</p>
                </motion.div>
            </section>

            {/* About Breac Ltd Section */}
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5 }}
            >
                <Container className="my-5">
                    <h2 className="text-center">About Breac Ltd</h2>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <p>
                                Breac Ltd is a conglomerate of several entities carrying out different business activities.
                                Established in 2017, Breac Limited unifies all private entities under a single umbrella,
                                ensuring ease of business operations and streamlined services for our clients.
                            </p>
                            <p>
                                At Breac Ltd, we believe in doing things right from the start, reducing the burden
                                on our clients. Hence our slogan: <b>"Doing It Right"</b>.
                            </p>
                            <h3>Our Services:</h3>
                            <ul>
                                <li>Outsourced Productions and General Supplies</li>
                                <li>Aviation Research Analysis and Consultancy</li>
                                <li>Cargo Clearing and Forwarding</li>
                                <li>PR and Marketing Consultancy</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                <Image src={aboutImg} fluid rounded />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>

            {/* Dynamic Stats Section */}
            <div className="section-spacing">
                <CompanyStats />
            </div>

            {/* Mission Section */}
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5 }}
            >
                <Container className="my-5">
                    <h2 className="text-center">Our Mission</h2>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                <Image src={missionImg} fluid rounded />
                            </motion.div>
                        </Col>
                        <Col md={6}>
                            <p>
                                Our mission is to provide industry-leading business solutions that drive innovation, efficiency, and growth.
                                We are committed to delivering exceptional services in aviation, logistics, and marketing that empower our clients
                                to succeed in their respective industries.
                            </p>
                            <p>
                                Through strategic partnerships and a customer-centric approach, we ensure our clients receive tailored solutions
                                that meet their evolving business needs.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
        </div>
    );
};

export default About;

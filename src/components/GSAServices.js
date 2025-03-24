import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import b737Image from '../assets/images/b737.jpg'; // Placeholder for B737 image
import './GSAServices.css';

const GSAServices = () => {
    return (
        <Container className="my-5 gsa-container">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="text-center mb-4">Our GSA Services</h2>
                <Row className="align-items-center">
                    {/* Left Column - Text */}
                    <Col md={6}>
                        <Card className="gsa-card shadow-sm p-4">
                            <Card.Body>
                                <Card.Title>Alpha Sky Aviation Representation</Card.Title>
                                <p>
                                    Breac Ltd is the official <b>General Sales Agent (GSA)</b> for <b>Alpha Sky Aviation</b>,
                                    based in <b>Dubai (DXB)</b>. We facilitate cargo operations and sales for:
                                </p>
                                <ul className="gsa-list">
                                    <li><b>B737-400F</b> – <b>19 tons cargo capacity</b></li>
                                    <li><b>B757-2F</b> – <b>35 tons cargo capacity </b></li>
                                </ul>
                                <p>
                                    Our team ensures seamless <b>cargo handling, customs clearance, and logistics support</b>
                                    for air freight shipments across Africa and the Middle East.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column - Image */}
                    <Col md={6} className="text-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            initial={{ opacity: 0, x: 100 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <img src={b737Image} alt="B737-400F" className="gsa-image shadow-lg" />
                        </motion.div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
};

export default GSAServices;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Airplane, Globe, BoxSeam } from 'react-bootstrap-icons'; // Icons
import flightImage from '../assets/images/flight-schedule.avif'; // Placeholder image
import './FlightSchedule.css';

const FlightSchedule = () => {
    return (
        <Container className="my-5 flight-schedule-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <Card className="flight-card shadow-sm">
                    <Card.Body>
                        <h2 className="text-center">Our Schedule & Routes</h2>
                        <Row className="align-items-center">
                            {/* Left Column - Image */}
                            <Col md={6} className="text-center">
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <img src={flightImage} alt="Flight Schedule" className="schedule-image shadow-lg" />
                                </motion.div>
                            </Col>

                            {/* Right Column - Schedule Details */}
                            <Col md={6}>
                                <h4><Globe className="schedule-icon" /> Regular Routes</h4>
                                <ul className="schedule-list">
                                    <li><Airplane className="schedule-icon" /> SHJ – NBO – SHJ (1x per week)</li>
                                    <li><Airplane className="schedule-icon" /> SHJ – PZU – NBO – PZU – SHJ (1x per week)</li>
                                    <li><Airplane className="schedule-icon" /> SHJ – HGA – MGQ – SHJ (Ad-hoc)</li>
                                    <li><Airplane className="schedule-icon" /> NBO – MGQ – NBO – SHJ (1x per week)</li>
                                    <li><Airplane className="schedule-icon" /> NBO – JUB – NBO (1x per week)</li>
                                    <li><Airplane className="schedule-icon" /> NBO – FIH – NBO (Ad-hoc)</li>
                                </ul>
                                <p><BoxSeam className="schedule-icon" /> <b>Maximum Cargo Capacity:</b> 20 tons at the most competitive rates.</p>
                                <Link to="/contact">
                                    <Button variant="primary" className="booking-btn">Make a Booking</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default FlightSchedule;

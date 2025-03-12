import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-section">
            <motion.div
                initial={{ opacity: 0, x: -200 }}  // Start off-screen to the left
                whileInView={{ opacity: 1, x: 0 }}  // Slide in when visible
                viewport={{ once: true, amount: 0.2 }}  // Triggers when 20% is visible
                transition={{ duration: 1.5 }}  // Slower animation
            >
                <Container className="text-center">
                    <h1>Doing It Right</h1>
                    <p>Providing essential life needs with the best quality products and services.</p>
                    <Link to="/about">
                        <Button className="hero-btn">Learn More</Button>
                    </Link>
                </Container>
            </motion.div>
        </div>
    );
};

export default Hero;

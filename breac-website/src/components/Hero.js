import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="hero-section">
            <Container>
                <h1>Doing It Right</h1>
                <p>Providing essential life needs with the best quality products and services.</p>
                <Button className="hero-btn" href="/about">Learn More</Button>
            </Container>
        </div>
    );
};

export default Hero;

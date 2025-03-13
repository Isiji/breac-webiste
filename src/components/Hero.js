import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage1 from '../assets/images/airplane.jpg';
import heroImage2 from '../assets/images/aircargo.jpg';
import heroVideo from '../assets/video/bgvideo.mp4';

const backgrounds = [
    { type: "image", src: heroImage1 },
    { type: "video", src: heroVideo },
    { type: "image", src: heroImage2 }
];

const DISPLAY_TIME = 10000; // 10 seconds per background
const TRANSITION_TIME = 2000; // 2 seconds fade transition

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentIndex(nextIndex);
                setNextIndex((nextIndex + 1) % backgrounds.length);
            }, TRANSITION_TIME);
        }, DISPLAY_TIME);

        return () => clearInterval(interval);
    }, [nextIndex]);

    return (
        <div className="hero-section">
            {/* Backgrounds overlap and crossfade smoothly */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentIndex ? "fade-in" : "fade-out"}`}
                >
                    {bg.type === "video" ? (
                        <video autoPlay muted loop className="hero-bg-video">
                            <source src={bg.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="hero-bg-image" style={{ backgroundImage: `url(${bg.src})` }}></div>
                    )}
                </div>
            ))}

            {/* Hero Content with Slide-in Effect */}
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5 }}
                className="hero-content"
            >
                <Container className="text-center">
                <p><i><h2>Breac Ltd</h2></i></p>

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

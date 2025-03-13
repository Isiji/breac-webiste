import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './CompanyStats.css';

const statsData = [
    { title: "Clients Supported", value: 98 },
    { title: "Years of Experience", value: 8 },
    { title: "Successful Projects", value: 300 },
    { title: "Global Partners", value: 5 }
];

const CompanyStats = () => {
    const [stats, setStats] = useState(statsData.map(stat => ({ ...stat, animatedValue: 0 })));

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prevStats =>
                prevStats.map(stat => ({
                    ...stat,
                    animatedValue: Math.min(stat.animatedValue + Math.ceil(stat.value / 50), stat.value)
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container className="my-5 company-stats-container">
            <h2 className="text-center mb-4">Our Achievements</h2>
            <Row>
                {stats.map((stat, index) => (
                    <Col md={3} key={index} className="text-center">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="stats-box"
                        >
                            <h3 className="stat-value">{stat.animatedValue}+</h3>
                            <p className="stat-title">{stat.title}</p>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CompanyStats;

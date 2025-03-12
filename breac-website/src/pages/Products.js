import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import products from '../data/products';
import './Products.css';

const whatsappNumber = "254700000000"; // Replace with actual number

const Products = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <Row>
                {products.map((product, index) => {
                    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I'm interested in ${product.name}.`)}`;
                    return (
                        <Col md={6} key={index} className="mb-4">
                            <div className="product-container">
                                {/* Image slides in from the left */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -100 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true, amount: 0.2 }} 
                                    transition={{ duration: 1.2 }}
                                    className="w-50"
                                >
                                    <Card.Img src={product.image} className="product-logo" />
                                </motion.div>

                                {/* Text slides in from the right */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 100 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    viewport={{ once: true, amount: 0.2 }} 
                                    transition={{ duration: 1.2 }}
                                    className="w-50 ps-4"
                                >
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        {/* WhatsApp Button */}
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                            <Button variant="success" className="mt-2">Inquire or Order via WhatsApp</Button>
                                        </a>
                                    </Card.Body>
                                </motion.div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Products;

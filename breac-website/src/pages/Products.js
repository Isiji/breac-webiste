import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import products from '../data/products';
import './Products.css';

const Products = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <Row>
                {products.map((product, index) => (
                    <Col md={6} key={index} className="d-flex align-items-center mb-4">
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
                            className="w-50 ps-3"
                        >
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

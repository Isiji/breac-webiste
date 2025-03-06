import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products';
import './Products.css';

const Products = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2 }}
        >
            <Container className="my-5">
                <h2 className="text-center">Our Products</h2>
                <Row>
                    {products.map((product) => (
                        <Col md={4} key={product.id}>
                            <Link to={`/products/${product.id}`} className="product-link">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} 
                                    whileInView={{ opacity: 1, x: 0 }}  
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 1.2 }}
                                >
                                    <Card className="product-card text-center">
                                        <Card.Img variant="top" src={product.image} className="product-logo" />
                                        <Card.Body>
                                            <Card.Title className="product-title">{product.name}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Products;

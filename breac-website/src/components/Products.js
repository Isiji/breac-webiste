import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import healthcare from '../assets/images/healthcare.jpg';
import Toiletpaper from '../assets/images/toilet-paper.jpg';
import facialtissue from '../assets/images/facial-tissues.jpg';

const products = [
    { title: "Healthcare Equipment", image: healthcare, description: "Medical supplies, sanitary products, and equipment." },
    { title: "Facial Tissues", image: facialtissue, description: "Soft and hygienic facial tissues, made from premium material." },
    { title: "Tissue Paper", image: Toiletpaper, description: "The best tissue paper in town, from fresh virgin pulp." }
];

const Products = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5 }}
        >
            <Container className="my-5">
                <h2 className="text-center">Our Products</h2>
                <Row>
                    {products.map((product, index) => (
                        <Col md={4} key={index}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                                <Card className="text-center">
                                    <Card.Img variant="top" src={product.image} className="product-image" />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    );
};

export default Products;

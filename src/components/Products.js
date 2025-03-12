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
                <h2 className="text-center mb-4">Our Products</h2>
                <p><i>At BREAC LTD, we provide essential everyday solutions for your health and comfort. 
                From premium healthcare products to soft, reliable facial tissues, our range is designed to keep you and your family cared for. Explore our collection and experience quality you can trust</i></p>
                <Row className="g-4"> {/* Bootstrap spacing class */}
                    {products.map((product, index) => (
                        <Col md={4} key={index} className="product-spacing">
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

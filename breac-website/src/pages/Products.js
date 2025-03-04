import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products';
import './Products.css'; // Styles for hover effects

const Products = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">Our Products</h2>
            <Row>
                {products.map(product => (
                    <Col md={3} key={product.id}>
                        <Link to={`/product/${product.id}`} className="product-link">
                            <Card className="product-card">
                                <Card.Img variant="top" src={product.image} className="product-logo" />
                                <Card.Body>
                                    <Card.Title className="product-title">{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

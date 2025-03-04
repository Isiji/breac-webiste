import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const products = [
    { title: "Healthcare Equipment", image: "/images/healthcare.jpg", description: "Medical supplies, sanitary products, and equipment." },
    { title: "Flour Milling", image: "/images/flour.jpg", description: "High-quality maize flour production for institutions." },
    { title: "Animal Feeds", image: "/images/animal-feeds.jpg", description: "Nutritional cattle feed from maize by-products." },
    { title: "Paper Products", image: "/images/toilet-paper.jpg", description: "Toilet paper, facial tissues, and napkins." }
];

const Products = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">Our Products</h2>
            <Row>
                {products.map((product, index) => (
                    <Col md={3} key={index}>
                        <Card className="text-center">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import products from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <Container className="my-5"><h2>Product not found</h2></Container>;
    }

    return (
        <Container className="my-5">
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.details}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductDetail;

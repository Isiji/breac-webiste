import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import products from '../data/products'; // Import product data

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);

    if (!product) return <Container><h2>Product Not Found</h2></Container>;

    return (
        <Container className="my-5">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <p>{product.details}</p>
        </Container>
    );
};

export default ProductDetail;

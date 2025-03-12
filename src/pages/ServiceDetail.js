import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Sample service details
const serviceDetails = {
    "aviation-consultancy": { title: "Aviation Consultancy", image: "/images/aviation.jpg", details: "Expert assistance with aviation permits, aircraft registration, and airline consultancy." },
    "cargo-forwarding": { title: "Cargo Clearing & Forwarding", image: "/images/cargo.jpg", details: "Efficient cargo transportation via sea and air, including live animal transport." },
    "marketing-pr": { title: "Marketing & PR", image: "/images/marketing.jpg", details: "Comprehensive branding, advertising, and public relations services." },
    "events-deco": { title: "Events Deco Branding", image: "/images/events.jpg", details: "High-quality decorations and branding solutions for events." }
};

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = serviceDetails[serviceId];

    if (!service) return <Container><h2>Service Not Found</h2></Container>;

    return (
        <Container className="my-5">
            <h2>{service.title}</h2>
            <img src={service.image} alt={service.title} style={{ width: '100%', maxWidth: '500px' }} />
            <p>{service.details}</p>
        </Container>
    );
};

export default ServiceDetail;

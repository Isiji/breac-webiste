import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logob.jpg';
import './Header.css'; // Ensure this is in the same folder

const Header = () => {
    return (
        <Navbar expand="lg" className="custom-navbar shadow-sm">
            <Container>
                {/* Logo and company name */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} alt="Breac Ltd Logo" className="logo-img me-2" /> 
                    <span className="company-name">Breac Ltd</span>
                </Navbar.Brand>

                {/* Navbar Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navigation Links */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

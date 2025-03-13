import React from 'react';
import { Whatsapp, Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import logo from '../assets/images/logob.jpg';
import './Footer.css'; // Ensure this is correctly imported

const Footer = () => {
    return (
        <footer className="footer"> {/* Apply footer styles */}
            <Container>
                {/* Centered Logo */}
                <div className="footer-logo">
                    <img src={logo} alt="Breac Ltd Logo" className="footer-logo-img" />
                </div>

                {/* Contact Details */}
                <p><GeoAlt className="footer-icon" /> P.O BOX 20134 – 00100 NBI</p>
                <p>
                    <Telephone className="footer-icon" /> 
                    <a href="tel:+254711772930" className="footer-link">+254 711 772930</a>
                </p>
                <p>
                    <Envelope className="footer-icon" /> 
                    <a href="mailto:breacltd@gmail.com" className="footer-link">breacltd@gmail.com</a>
                </p>

                {/* WhatsApp Chat Link */}
                <p className="mt-3">
                    <Whatsapp size={20} className="footer-icon me-2" />
                    <a href="https://wa.me/254711772930" target="_blank" rel="noopener noreferrer" className="footer-link">
                        Chat with us on WhatsApp
                    </a>
                </p>

                {/* Copyright */}
                <p className="mt-3">&copy; {new Date().getFullYear()} Breac Ltd. All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;

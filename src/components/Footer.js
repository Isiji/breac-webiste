import React from 'react';
import { Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <p>© 2025 Breac Ltd. All rights reserved.</p>
            <p>
                <Whatsapp size={20} className="me-2" />
                <a href="https://wa.me/254711772930" target="_blank" rel="noopener noreferrer" className="text-light">
                    Chat with us on WhatsApp
                </a>
            </p>
        </footer>
    );
};

export default Footer;

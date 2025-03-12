import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import About from '../components/About';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Clickable Products Section */}
            <Link to="/products" className="home-section-link">
                <div className="section-spacing">
                    <Products />
                </div>
            </Link>

            {/* Clickable Services Section */}
            <Link to="/services" className="home-section-link">
                <div className="section-spacing">
                    <Services />
                </div>
            </Link>

            {/* Clickable About Section */}
            <Link to="/about" className="home-section-link">
                <div className="section-spacing">
                    <About />
                </div>
            </Link>
        </div>
    );
};

export default Home;

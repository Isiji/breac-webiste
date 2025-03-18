import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OurClients from '../components/OurClients';
import About from '../components/About';
import GSAServices from '../components/GSAServices';
import FlightSchedule from '../components/FlightSchedule';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* Clickable Services Section */}
            <Link to="/services" className="home-section-link">
                <div className="section-spacing">
                    <Services />
                </div>
            </Link>

            {/* Our GSA Services Section */}
            <div className="section-spacing">
                <GSAServices />
            </div>

            {/* Expandable Flight Schedule Section */}
            <div className="section-spacing">
                <FlightSchedule />
            </div>

            {/* Clickable Our Clients Section */}
            <div className="section-spacing">
                <OurClients />
            </div>

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

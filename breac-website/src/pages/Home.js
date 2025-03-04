import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import About from '../components/About';

const Home = () => {
    return (
        <div>
            <Hero />
            <Products />
            <Services />
            <About />
        </div>
    );
};

export default Home;

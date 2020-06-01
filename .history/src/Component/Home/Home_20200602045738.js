import React from 'react';
import './Home.css';

import About from './About';
import WhyUs from './WhyUs';
import Welcome from './Welcome'
import Footer from '../Footer/Footer';

import Train from './Train'

const Home = () => {
    return (
        <div>

            <Welcome></Welcome>
            <About></About>
            <Train></Train>


            <WhyUs></WhyUs>

        </div>
    );
};

export default Home;
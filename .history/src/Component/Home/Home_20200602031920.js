import React from 'react';
import './Home.css';

import About from './About';
import WhyUs from './WhyUs';
import Trainning from './Trainning';
import Welcome from './Welcome'
import Footer from '../Footer/Footer';
import New from './New';

const Home = () => {
    return (
        <div>
        
            <Welcome></Welcome>
            <About></About>
            <New


            <WhyUs></WhyUs>
            
        </div>
    );
};

export default Home;
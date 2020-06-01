import React from 'react';
import './Home.css';

import About from './About';
import WhyUs from './WhyUs';
import Trainning from './Trainning';
import Welcome from './Welcome'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
        
            <Welcome></Welcome>
            <About></About>
            /* <Trainning></Trainning> */
            <div class="form-group">
              <label for=""></label>
              <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
              <small id="helpId" class="text-muted">Help text</small>
            </div>


            <WhyUs></WhyUs>
            
        </div>
    );
};

export default Home;
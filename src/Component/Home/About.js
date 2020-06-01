import React from 'react';
import image from '../../power-x-gym/Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg'
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={image} alt=""/>
                </div>

                <div className='col-md-6'>
                    <h1 id="aus">ABOUT US</h1>
                    <h2>WE ARE HERE TO DREAM!</h2>
                    <h1>OUR TEAM IS HERE TO SERVE YOU.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
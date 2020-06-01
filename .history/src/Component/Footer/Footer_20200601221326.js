import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="foot">
            {/* <div className='container'>
            <h1>Power X</h1>
            </div> */}
            <div className="footColumn"><h1>Power X</h1></div>
            <div className="footColumn">
                <h> Need Help</h2>    
              </div>
            <div className="footColumn">
                <h>Digital Resources</h2>
            </div>
            <div className="footColumn">
                <h>connect With Us</h2>
            </div>
            <div className="footColumn">
                <h>Join Our News Letter</h2>
            </div>
        </div>
    );
};

export default Footer;
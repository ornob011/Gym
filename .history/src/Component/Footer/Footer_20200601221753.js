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
                <h3> Need Help?</h3>  
                <ul>
                    <li>Help Center</li>
                    <li>Email Support</li>
                    <li>Live Chat</li>
                    <li>Gift Certificates</li>
                    <li>Send Us Feedback</li>
                </ul>
              </div>
            <div className="footColumn">
                <h3>Digital Resources</h3>
            </div>
            <div className="footColumn">
                <h3>connect With Us</h3>
            </div>
            <div className="footColumn">
                <h3>Join Our News Letter</h3>
            </div>
        </div>
    );
};

export default Footer;
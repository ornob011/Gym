import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faYoutube } from '@fortawesome/free-solid-svg-icons'

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
                <ul>
                    <li>Articles</li>
                    <li>E-books</li>
                </ul>
            </div>
            <div className="footColumn ">
                <h3>connect With Us</h3>
                <div className="socialIcon">
                <FontAwesomeIcon icon="coffee" />
                <i class="fab fa-youtube"></i> Y
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-whatsapp"></i>
                </div>
                <p>Forum</p>
            </div>
            <div className="footColumn">
                <h3>Join Our News Letter</h3>
                <p>Get exclusive news, features, and updates from The Shredder Weight Loss Academy</p>
            </div>
        </div>
    );
};

export default Footer;
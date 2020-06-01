import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                
                <h3 className="navbar-brand">Power <span className='X'>X</span></h3>

                <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">Home</a>
                        <a className="nav-item nav-link" href="/">Services</a>
                        <a className="nav-item nav-link" href="/class">Our classes</a>
                        <a className="nav-item nav-link" href="/">About Us</a>

                        <a className="nav-item nav-link" href="/">Blog</a>

                        <a className="nav-item nav-link" href="/pricing">Pricing</a>

                        <a className="nav-item nav-link" href="/">Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
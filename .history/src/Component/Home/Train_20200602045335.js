import React from 'react';
import './Train.css';
import img1 from '../../power-x-gym/Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../power-x-gym/Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const Train = () => {
    return (
        <div className="container">
            <h2 className='text-center'>TRAINING <span className="text-yellow">PROGRAMS</span></h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={img1} alt="" />
                    <button className="btn-war">YOGA TRAINING SESSION →</button>
                </div>

                <div className="col-md-6">
                    <img src={img2} alt="" />
                    <button className="btn-war">CARDIO TRAINING SESSION →</button>
                </div>
            </div>

        </div>
    );
};

export default Train;
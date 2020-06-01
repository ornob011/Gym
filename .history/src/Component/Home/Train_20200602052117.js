import React from 'react';
import './Train.css';
import img1 from '../../power-x-gym/Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../power-x-gym/Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const Train = () => {
    return (
        <div className="container trainingContainer">
            <h2 className='text-center trainingHead'>TRAINING <span className="text-yellow">PROGRAMS</span></h2>
            <div className="row">
                <div className="col-md-6 ">
                    <img src={img1} alt="" />
                    <a className="trainLink" href="/class-description/YOGA-TRAINING">YOGA TRAINING SESSION</a>
                </div>

                <div className="col-md-6 trainLink">
                    <img src={img2} alt="" />
                    <a className="trainLink" href="/class-description/CARDIO-TRAINING">CARDIO TRAINING SESSION</a>
                </div>
            </div>

        </div>
    );
};

export default Train;
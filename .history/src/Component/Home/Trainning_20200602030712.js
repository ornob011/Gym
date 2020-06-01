import React from 'react';
import './Tranning.css';

const Trainning = () => {
    return (

        <div className="container">
            <h1 className='text-center'>TRAINNING <span className='program'>PROGRAMS</span></h1>
            <div className="row">
                <div className='col-md-4 col-md-offset-4  yoga'>
                    <a href="/class-description/YOGA-TRAINING">YOGA TRAINNING SESSION</a>
                </div>

                <div className='cardio'>
                    <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
                </div>
            </div>
        </div>
    );
};

export default Trainning;
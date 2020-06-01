import React from 'react';
import './Tranning.css';

const Trainning = () => {
    return (
        <><h1 className='text-center'>TRAINNING <span className='program'>PROGRAMS</span></h1>
            <div className="training-container">
                <img src={require("../../power-x-gym/Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg" alt="" srcset=""/>
                <div className='training yoga1'>
                    <a href="/class-description/YOGA-TRAINING">YOGA TRAINNING SESSION</a>
                </div>

                <div className='training cardio1'>
                    <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
                </div>

            </div>
        </>
    );
};

export default Trainning;
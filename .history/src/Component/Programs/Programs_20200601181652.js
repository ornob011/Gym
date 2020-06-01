import React from 'react';
import './Programs.css';


const Programs = () => {

    return (
        <div>
            <div className="program-controller">
                <div className="container">
                    <h1 className="display-4">OUR CLASSES</h1>
                </div>
            </div>

            <div className='container'>

                <div className='row'>
                    <div className='col-md-5 yoga'>
                        <a href="/class-description/YOGA-TRAINING">Yoga Training</a>
                    </div>

                    <div className='col-md-5 cardio'>
                        <a href="/class-description/CARDIO-TRAINING">Cardio Training</a>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-5 psycho'>
                        <a href="/class-description/PYSCHO-TRAINING">Psycho Training</a>
                    </div>

                    <div className='col-md-5 self'>
                        <a href="/class-description/SELF-DEFENSE">Self-Defense</a>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-5 advanced'>
                        <a href="/class-description/ADVANCED-GYM">Advanced Gym</a>
                    </div>

                    <div className='col-md-5 strength'>
                        <a href="/class-description/STRENGTH-TRAINING">Strength Training</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Programs;
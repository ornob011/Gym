import React from 'react';
import './Programs.scss';


const Programs = () => {

    return (
        <div>
            <div className="program-controller">
                <div className="container">
                    <h1 className="display-4">OUR CLASSES</h1>
                </div>
            </div>

            <div className='container programs'>
                <div className='row'>
                    <div className='col-md-5 common yoga'>
                        <a href="/class-description/YOGA-TRAINING">Yoga Training</a>
                    </div>

                    <div className='col-md-5 common cardio'>
                        <a href="/class-description/CARDIO-TRAINING">Cardio Training</a>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-5 common psycho'>
                        <a href="/class-description/PYSCHO-TRAINING">Psycho Training</a>
                    </div>

                    <div className='col-md-5 common self'>
                        <a href="/class-description/SELF-DEFENSE">Self-Defense</a>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-5 common advanced'>
                        <a href="/class-description/ADVANCED-GYM">Advanced Gym</a>
                    </div>

                    <div className='col-md-5 common strength'>
                        <a href="/class-description/STRENGTH-TRAINING">Strength Training</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Programs;
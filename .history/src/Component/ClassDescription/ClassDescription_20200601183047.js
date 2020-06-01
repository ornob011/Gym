import React from 'react';
import './ClassDescription.css'
import { useParams } from 'react-router-dom';
import tools from '../../power-x-gym/Image & Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import './ClassDescription.css'
import check from'../../power-x-gym/Image & Icon/checkmark-square-2.png'

const ClassDescription = () => {
    const { program } = useParams()
    return (
        <div>
            <div className='program-controller'>
                <div className="container">
                    <h1 className="display-5">{program}</h1>
                </div>
            </div>

            <div className="container schedule">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={tools} alt="" />
                    </div>



                    <div className='col-md-6'>
                        <h1 class='text-center'>Class Schedule</h1>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Monday</p>
                                        <p>8.00 AM to 9.00 AM</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Tuesday</p>
                                        <p>10.00 AM to 11.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Wednesday</p>
                                        <p>7.00 AM to 8.00 AM</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Thursday</p>
                                        <p>5.00 PM to 6.00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Friday</p>
                                        <p>6.00 AM to 7.00 AM</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <p>Saturday</p>
                                        <p>7.00 PM to 8.00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

            <div className='container'>
               img
            </div>

            <div className='container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Join Us</button>
            </div>
        </div>
    );
};

export default ClassDescription;
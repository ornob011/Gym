import React from 'react';
import './Tranning.css';

const Trainning = () => {
    return (
        <div>
            <h1 className='text-center'>TRAINNING <span className='program'>PROGRAMS</span></h1>
            <div className="training-container">
                <div class="card bg-dark text-white training">
                    <img src={require("../../power-x-gym/Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png")} class="card-img" alt="..." />
                    <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Yoga</h5> */}
                        {/* { <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
                <div class="card bg-dark text-white training">
                    <img src={require("../../power-x-gym/Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg")} class="card-img" alt="..." />
                    <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
                    <div class="card-img-overlay">
                        {/* <h5 class="card-title">Cardio</h5> */}
                        {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p> */}
                    </div>
                </div>
            </div>






            {/* <div className="training-container">
                <div className='training yoga1'></div>
                    <img src={require("../../power-x-gym/Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png")} alt="" srcset="" />
                    <a href="/class-description/YOGA-TRAINING">YOGA TRAINNING SESSION</a>
                </div>

                <div className='training cardio1'>
                    <img src={require("../../power-x-gym/Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg")} alt="" srcset="" />
                    <a href="/class-description/CARDIO-TRAINING">CARDIO TRAINNING SESSION</a>
                </div>

            </div> */}
        </div>
    );
};

export default Trainning;
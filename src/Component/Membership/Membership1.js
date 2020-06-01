import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import './Membership1.css'
import CheckoutForm from '../Payment/Payment';

import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

import { useForm } from 'react-hook-form'

const Membership1 = () => {
    const {plan}= useParams()

    const { register, handleSubmit, watch, errors } = useForm()

    const [info, setInfo]= useState(null)

    const handlePlaceOrder=(payment)=>{
        const orderDetails={
            info: info,
            payment: payment
        }
        console.log(orderDetails)
    }

    const stripePromise = loadStripe('pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW');

    const onSubmit = data => {
        setInfo(data)
        // console.log(data) 
    }
    
    return (
        <div>
            <section>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{plan}</h1>
                    </div>
                </div>
            </section>

            <div style={{display: info && 'none'}} className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">First Name </label> <br/>
                            <input name="First_Name" ref={register({ required: true })} />
                            {errors.First_Name && <span>This field is required</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Last Name </label> <br/>
                            <input name="Last_Name" ref={register({ required: true })} />
                            {errors.Last_Name && <span>This field is required</span>}
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Email </label> <br/>
                            <input name="Email" ref={register({ required: true })} />
                            {errors.Email && <span>This field is required</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Mobile Number </label> <br/>
                            <input name="Mobile_Number" ref={register({ required: true })} />
                            {errors.Mobile_Number && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                        <label htmlFor="">Gender </label> <br/>
                        <select name="gender" ref={register({ required: true })}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        {errors.gender && <span>This field is required</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Date Of Birth </label> <br/>
                            <input name="Birth" ref={register({ required: true })} placeholder="dd/mm/yyyy"/>
                            {errors.Birth && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Address </label> <br/>
                            <input name="Address" ref={register({ required: true })}/>
                            {errors.Address && <span>This field is required</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">City </label> <br/>
                            <input name="City" ref={register({ required: true })}/>
                            {errors.City && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Postcode </label> <br/>
                            <input name="Post" ref={register({ required: true })}/>
                            {errors.Post && <span>This field is required</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Package </label> <br/>
                            <input name="Package" defaultValue={plan} ref={register({ required: true })}/>
                            {errors.Package && <span>This field is required</span>}
                        </div>
                    </div>
                    
                    <button type="submit">Next</button>
                </form>
            </div>


            <section style={{marginTop: '200px' , display: info ? 'block' : 'none' }} className='container'>
                <h1>Pay here via your credit card</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
            </section>
        </div>
    );
};

export default Membership1;
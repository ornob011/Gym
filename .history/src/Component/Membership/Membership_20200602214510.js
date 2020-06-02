import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './Membership.css'
import CheckoutForm from '../Payment/Payment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useForm } from 'react-hook-form'

const Membership = () => {

    const { register, handleSubmit, errors } = useForm()

    const [info, setInfo] = useState(null)

    const handlePlaceOrder = (payment) => {
        const orderDetails = {
            info: info,
            payment: payment
        }
        console.log(orderDetails)
    }

    const stripePromise = loadStripe('pk_test_Tcs5id0sHuiliQSYOCdEhbWN008lYcHxVF');

    const onSubmit = data => {
        setInfo(data);
        console.log(data)
    }

    return (
        <div>
            <section>
                <div className="gym-member">
                    <div className="container">
                        <h1 className="display-4">YOUR GYM MEMBERSHIP</h1>
                    </div>
                </div>
            </section>

            <div style={{ display: info && 'none' }} className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">First Name </label> <br />
                            <input name="First_Name" ref={register({ required: true })} />
                            {errors.First_Name && <span>Required Field</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Last Name </label> <br />
                            <input name="Last_Name" ref={register({ required: true })} />
                            {errors.Last_Name && <span>Required Field</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Email </label> <br />
                            <input name="Email" ref={register({ required: true })} />
                            {errors.Email && <span>Required Field</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Mobile Number </label> <br />
                            <input name="Mobile_Number" ref={register({ required: true })} />
                            {errors.Mobile_Number && <span>Required Field</span>}
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="col-md-6 item">
                            <label htmlFor="">Date Of Birth </label> <br />
                            <input name="Birth" ref={register({ required: true })} placeholder="dd/mm/yyyy" />
                            {errors.Birth && <span>Required Field</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Gender </label> <br />
                            <select name="gender" ref={register({ required: true })}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                            {errors.gender && <span>Required Field</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Address Line 1:</label> <br />
                            <input name="Address" ref={register({ required: true })} />
                            {errors.Address && <span>Required Field</span>}
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Country/Region</label> <br />
                            <input name="Country" ref={register({ required: true })} />
                            {errors.Country && <span>Required Field</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">City</label> <br />
                            <input name="City" ref={register({ required: true })} />
                            {errors.City && <span>Required Field</span>}
                        </div>
                        <div className="col-md-6 item">
                            <label htmlFor="">Postcode </label> <br />
                            <input name="Post" ref={register({ required: true })} />
                            {errors.Post && <span>Required Field</span>}
                        </div>
                    </div>

                    
                </form>
                <button id='bn' type="submit">Next</button>
            </div>

            
            <section style={{ marginTop: '200px', display: info ? 'block' : 'none' }} className='container'>
                <h1>Pay here via your credit card</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
            </section>
        </div>
    );
};

export default Membership;
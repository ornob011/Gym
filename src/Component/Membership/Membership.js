import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Membership.scss'

import CheckoutForm from '../Payment/Payment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useForm } from 'react-hook-form'


const Membership = () => {

    const [First_Name, setFirst] = useState('')
    const [Last_Name, setLast] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Birth_Date, setBirth] = useState(new Date())
    const [Gender, setGender] = useState('')
    const [Address, setAddress] = useState('')
    const [Country, setCountry] = useState('')
    const [City, setCity] = useState('')
    const [Postcode, setPost] = useState('')
    const { register, handleSubmit, watch, errors } = useForm()

    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
        setToggle(!toggle);
    }

    const changeBirthdate = date => {
        setBirth(date);
    };


    const handleFirstName = (e) => {
        setFirst(e.target.value)
    }

    const handleLastName = (e) => {
        setLast(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handlePost = (e) => {
        setPost(e.target.value)
    }


    const [info, setInfo] = useState(null)

    const handlePlaceOrder = (e) => {
        //e.preventDefault();

        const orderDetails = {
            First_Name,
            Last_Name,
            Email,
            Phone,
            Birth_Date,
            Gender,
            Address,
            Country,
            City,
            Postcode
        }
        console.log(orderDetails);
        fetch('https://pure-eyrie-14343.herokuapp.com/send', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(message => console.log("message"));

    }

    const stripePromise = loadStripe('pk_test_Tcs5id0sHuiliQSYOCdEhbWN008lYcHxVF');

    const onSubmit = data => {
        setInfo(data);
        console.log(data);
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
                <h3 align="center">Personal Details</h3>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">First Name </label> <br />
                            <input onChange={handleFirstName} required />
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Last Name </label> <br />
                            <input onChange={handleLastName} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Email </label> <br />
                            <input onChange={handleEmail} required />
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Mobile Number </label> <br />
                            <input name="Mobile_Number" onChange={handlePhone} required />
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="col-md-6 item">
                            <label htmlFor="">Date Of Birth </label> <br />
                            <DatePicker dateFormat="MM/dd/yyyy" selected={Birth_Date} onChange={changeBirthdate} />
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Gender </label> <br />
                            <select onChange={handleGender} required>
                                <option value="none">Choose One</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">Address Line 1:</label> <br />
                            <input onChange={handleAddress} required />
                        </div>

                        <div className="col-md-6 item">
                            <label htmlFor="">Country/Region</label> <br />
                            <input onChange={handleCountry} required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 item">
                            <label htmlFor="">City</label> <br />
                            <input onChange={handleCity} required />
                        </div>
                        <div className="col-md-6 item">
                            <label htmlFor="">Postcode </label> <br />
                            <input onChange={handlePost} required />
                        </div>
                    </div>

                    <button id='bn' type="submit">Next</button>
                </form>
            </div>


            <section style={{ marginTop: '200px', display: info ? 'block' : 'none' }} className='container'>
                <form id="form-box" className="form-row">
                    <div className="form-group col-md-6">
                        <div className="form-check">
                            <input
                                type="radio"
                                id="switch_left"
                                name="switchToggle"
                                value="paypal"
                                onChange={toggleState}
                                checked={!toggle}
                            />
                            {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="checked"/> */}
                            <label className="font-weight-bold ml-3" htmlFor="exampleRadios1" id="credit-card-txt">Credit Card</label>
                            <p className="text-muted">Safe money transfer using your bank account. Visa, Master, Discover, American Express</p>
                        </div>
                    </div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                    </Elements>
                </form>

                <form id="form-box">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="switch_right"
                                    name="switchToggle"
                                    value='credit'
                                    onChange={toggleState}
                                    checked={toggle}
                                />
                                <label className="font-weight-bold ml-3" htmlFor="exampleRadios1" id="credit-card-txt">PayPal</label>
                                <p className="text-body">You will be redirected to PayPal website to complete your purchase securely</p>
                            </div>
                        </div>

                        <div className="form-group col-md-6 d-flex justify-content-end">

                            <img src="../../power-x-gym/Image & Icon/Bitmap.png" id="kl" alt="hh" />
                        </div>
                    </div>
                </form>
                <button id='bn' type="submit">Next</button>
            </section>
        </div>
    )
}

export default Membership;
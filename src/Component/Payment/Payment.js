import React, { useState } from 'react';
import './Payment.css'

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [payment, setPayment] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setPayment(null);
            setPaymentError(error)
            console.log(error)
        }

        else {
            setPaymentError(null)
            setPayment(paymentMethod)
            const paymentFinished = { id: paymentMethod.id, last4: paymentMethod.card.last4 }
            props.handlePlaceOrder(paymentFinished)
            console.log(paymentMethod)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay</button>

            {
                paymentError && <p style={{ color: "red" }}>Payment Failed</p>
            }
            {
                payment && <p style={{ color: "green" }}>Payment Successful. Your Payment id: {payment.id}.
                
                Membership Created. An email has been sent to your inbox containing all the details.</p>

            }


        </form>
    );
};


export default CheckoutForm;
import React, { useState } from 'react';
import './Payment.css'

import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const [perror, setPerror]= useState(null)
    const [payment, setPayment]= useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        });
        if(error){
            setPayment(null);
            setPerror(error)
            console.log(error)
        }

        else{
            setPerror(null)
            setPayment(paymentMethod)
            const paymentFinished= {id: paymentMethod.id, last4: paymentMethod.card.last4}
            props.handlePlaceOrder(paymentFinished)
            console.log(paymentMethod)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
            Pay
        </button>

        {
            perror && <p style={{color: "red"}}>Payment Failed</p>
        }

        {
            payment && <p style={{color: "green"}}>Payment Successful: your payment- {payment.id}</p>
        }
        </form>
    );
};

// const stripePromise = loadStripe('pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW');

// const Payment = () => {
//     return (
//         <div>
//             <section>
//                 <div className="jumbotron jumbotron-fluid">
//                     <div className="container">
//                         <h1 className="display-4">Payment</h1>
//                         {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
//                     </div>
//                 </div>
//             </section>

//             <section className='container'>
//                 <h1>Complete your payment</h1>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm />
//                 </Elements>
//             </section>
//         </div>
//     );
// };

export default CheckoutForm;
import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLISHABLE_TEST_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE;
const stripePromise = loadStripe(PUBLISHABLE_TEST_KEY); 


function DisplayDonatePage (){

    //look up online how to implement payment methods

    return (
        <div style={{textAlign: "center", marginTop: "5rem"}}>
        <h4>Donation Page</h4>
        <h1>✋🏽🛑</h1>
           
        </div>
    )
}

export default DisplayDonatePage;
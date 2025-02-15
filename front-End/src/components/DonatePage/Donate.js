import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CheckoutForm from "./CheckoutForm";
import CompletePage from "./CompletePage";
import "./Donate.css"



function DisplayDonatePage (){

    //look up online how to implement payment methods
    const [amount, setAmount] = useState("");
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);
const [clientSecret, setClientSecret] = useState("");
useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://iglesiavozdedios.net/api/payments/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ amount: 500 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
}, []);

const appearance = {
    theme: 'stripe',
};
// Enable the skeleton loader UI for optimal loading.
const loader = 'auto';


    return (
        <div id="the-donate-full-page">
            <h2 id="don-title">DONATE HERE</h2>
            <p>Test only</p>
            <input
  type="number"
  placeholder="Enter amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  min="1"
  required
/>

        <div id="Donate-Stripe-Div">
         {clientSecret && (
        <Elements options={{ clientSecret, appearance, loader }} stripe={stripePromise}>
            <CheckoutForm />  {/* Just show the form, no extra Routes */}
        </Elements>
    )}
    </div>
    </div>
    //     <Router>
    //   <div className="Donate-Stripe-Div">
    //     {clientSecret && (
    //       <Elements options={{clientSecret, appearance, loader}} stripe={stripePromise}>
    //         <Routes>
    //           <Route path="/checkout" element={<CheckoutForm />} />
    //           <Route path="/complete" element={<CompletePage />} />
    //         </Routes>
    //       </Elements>
    //     )}
    //   </div>
    // </Router>
    )
}

export default DisplayDonatePage;
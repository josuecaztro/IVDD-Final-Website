import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";
import "./Donate.css"

function DisplayDonatePage (){

    //look up online how to implement payment methods
  const [amount, setAmount] = useState(""); //defaults to 10 bucks- not sure if this is ok here?
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   fetch("https://iglesiavozdedios.net/api/payments/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ amount: amount }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: 'stripe',
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = 'auto';

  //new code...
  const predefinedAmounts = [500, 1000, 2500, 5000]; // Amounts in cents!
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const navigate = useNavigate();

  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // ONLY accept numbers
    setCustomAmount(value);
    setAmount(value ? parseInt(value, 10) : "");
  };

  const handleSubmit = () => {
  if (!amount || amount < 100) {
    alert("Please enter a valid amount (at least $1.00 / 100 cents).");
    return;
  }
  fetch("http://iglesiavozdedios.net/api/payments/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: amount }),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret))
    .catch((err) => console.error("Error fetching payment intent:", err));
};

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustom(true);
      setAmount("");
    } else {
      setIsCustom(false);
      setAmount(parseInt(value, 10));
    }
  };
  


return (
  
   <>

    <div className="don1-container">
      <h1 className="don1-title">Support Our Mission</h1>
      <p className="don1-caption">Select an amount or enter a custom donation.</p>

      <select className="don1-dropdown" value={isCustom ? "custom" : amount} onChange={handleAmountChange}>
  {predefinedAmounts.map((amt) => (
    <option key={amt} value={amt}>
      ${amt / 100}
    </option>
  ))}
  <option value="custom">Custom Amount</option>
</select>

{isCustom && (
  <input
    type="text"
    className="don1-input"
    placeholder="Enter amount in USD"
    value={customAmount}
    onChange={handleCustomAmount}
  />
)}


      <button className="don1-button" onClick={handleSubmit}>Proceed to Payment</button>
      <button className="don1-home-button" onClick={() => navigate("/donate")}>Cancel & Return Home</button>
    </div>

<div id="Donate-Stripe-Div">
{clientSecret && (
<Elements options={{ clientSecret, appearance, loader }} stripe={stripePromise}>
   <CheckoutForm />  
</Elements>
)}
</div>

</>
    
)
}

export default DisplayDonatePage;
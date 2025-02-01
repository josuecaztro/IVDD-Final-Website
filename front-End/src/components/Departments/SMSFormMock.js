import { useState } from "react";

export default function SmsSignup() {
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://iglesiavozdedios.net/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    if (response.ok) {
      alert("Signed up successfully!");
      setPhone(""); // Clear input
    } else {
      alert("Error signing up.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Enter your phone number" 
        required 
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
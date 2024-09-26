import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUsPage.css';



function DeployContactUs(){

//testing a comment

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        messageBody: ''
      });
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://iglesiavozdedios.net:8080/api/contact-requests', {
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyNDY4NjQ4NiwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzI0NjAwMDg2fQ.9r3Hgkek-DbF9JS4TMRuId4p0RvNiUCB803kQjaQM6gorgP5nTvi9PT3KwxS0KjmOZ0d_M90D8xl2viHsGibOA'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => {
          alert('Contact request submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            messageBody: ''
          });
        })
        .catch(error => {
          console.error('Error submitting contact request:', error);
          alert('Error submitting contact request');
        });
      };
    
    //   const handleBackClick = () => {
    //     window.location.href = 'http://3.18.110.219/';
    //     console.log("update is here");
    //   };
    
    return (
        <div id="body-for-cp">
        <div className="container1 mt-5">
        {/* <button id="back-button" className="btn btn-outline-primary mb-3" onClick={handleBackClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg> Return
        </button> */}
  
        <p id="bible-quote" className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
          </svg> 
          "Therefore encourage one another and build each other up, just as in fact you are doing." — 1 Thessalonians 5:11
        </p>
  
        <h2 className="mb-4">Send Us a Message!</h2>
  
        <form id="contact-form-id" className="p-4 rounded-3 shadow-sm bg-light" onSubmit={handleFormSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name..." required />
          </div>
  
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name..." required />
          </div>
  
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Enter your phone number..." pattern="[0-9\s\-]+" required />
          </div>
  
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="messageBody" rows="4" value={formData.messageBody} onChange={handleInputChange} placeholder="Type your message here..." required></textarea>
          </div>
  
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      </div>
    )
}

export default DeployContactUs;
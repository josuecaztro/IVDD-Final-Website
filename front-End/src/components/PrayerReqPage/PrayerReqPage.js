import React, { useState } from 'react';
import './PrayerReqPage.css'; 


function DisplayPrayerReqPage(){
   
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        messageBody: '',
        dateTime: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:8080/api/prayer-request-forms', {
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            alert('Prayer request submitted successfully!');
            setFormData({
              firstName: '',
              lastName: '',
              phoneNumber: '',
              messageBody: '',
              dateTime: ''
            });
          })
          .catch(error => {
            console.error('Error submitting prayer request:', error);
            alert('Error submitting prayer request');
          });
      };
    
      return (
        <div id="body-for-prp">
        <div id="request-container">
          <h3 id="verse" className="text-center mb-4">
            "The prayer of a righteous person is powerful and effective." — James 5:16
          </h3>
          {/* <button id="back-pr" className="btn btn-primary mb-4" onClick={handleBackClick}>
            Back to Home
          </button> */}
    
          <h1 className="mb-4">Submit Prayer Request</h1>
          <form id="prayerRequestForm" onSubmit={handleFormSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder="Enter your first name..."
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder="Enter your last name..."
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                placeholder="Enter your phone number..."
                pattern="[0-9\s\-]+"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="messageBody">What Is Your Prayer Request?</label>
              <textarea
                id="messageBody"
                name="messageBody"
                className="form-control"
                rows="4"
                placeholder="Enter your prayer request here..."
                value={formData.messageBody}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="dateTime">Date/Time Needed</label>
              <input
                type="text"
                id="dateTime"
                name="dateTime"
                className="form-control"
                placeholder="Enter date/time needed..."
                value={formData.dateTime}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <button type="submit" id="submit-id-pr" className="btn btn-success">Send</button>
          </form>
          <br />
          <br />
          <h4>
            "And whatever you ask in prayer, you will receive, if you have faith." — Matthew 21:22
          </h4>
          <br />
          <br />
        </div>
        </div>

    )
}

export default DisplayPrayerReqPage;
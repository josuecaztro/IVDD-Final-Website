import React, { useState } from 'react';
import './PrayerReqPage.css'; 
import prText from './PrayerReqTEXT';


function DisplayPrayerReqPage( { language } ){
   
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
        
        fetch('https://iglesiavozdedios.net/api/prayer-request-forms', {
          method: 'POST',
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            alert(prText[language].successMessage);
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
            alert(prText[language].errorMessage);
          });
      };
    
      return (
        <div id="body-for-prp">
        <div id="request-container">
          <h3 id="verse" className="text-center mb-4">
            {prText[language].verse}
          </h3>
          {/* <button id="back-pr" className="btn btn-primary mb-4" onClick={handleBackClick}>
            Back to Home
          </button> */}
    
          <h1 className="mb-4">{prText[language].title}</h1>
          <form id="prayerRequestForm" onSubmit={handleFormSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="firstName">{prText[language].firstName}</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                placeholder={prText[language].firstName}
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="lastName">{prText[language].lastName}</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                placeholder={prText[language].placeholderLastName}
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="phoneNumber">{prText[language].phoneNumber}</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                placeholder={prText[language].placeholderPhoneNumber}
                pattern="[0-9\s\-]+"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="messageBody">{prText[language].messageBody}  <span className="red-star">*</span></label>
              <textarea
                id="messageBody"
                name="messageBody"
                className="form-control"
                rows="4"
                placeholder={prText[language].placeholderMessageBody}
                value={formData.messageBody}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="dateTime">{prText[language].dateTime}  <span className="red-star">*</span></label>
              <input
                type="text"
                id="dateTime"
                name="dateTime"
                className="form-control"
                placeholder={prText[language].placeholderDateTime}
                value={formData.dateTime}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <button type="submit" id="submit-id-pr" className="btn btn-success">{prText[language].submit}</button>
          </form>
          <br />
          <br />
          <h4>
          {prText[language].verse2}
          </h4>
          <br />
          <br />
        </div>
        </div>

    )
}

export default DisplayPrayerReqPage;
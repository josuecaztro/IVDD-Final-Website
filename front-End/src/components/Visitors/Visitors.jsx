import React, { useState } from "react";
import "./Visitors.css";
import visitTEXT from "./visitorsTEXT";

const NewVisitors = ({ language }) => {
  const [visitName, setVisitName] = useState("");
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    setVisitSubmitted(true);
  };

  return (
    <div className="visit-container">
      <h1 className="visit-title">{visitTEXT[language].welcome}</h1>
      <p className="visit-description">{visitTEXT[language].intro}</p>

      <div className="visit-service-info">
        <h2 className="visit-heading">{visitTEXT[language].serviceTimes}</h2>
        <ul className="visit-list">
          <li className="visit-item"><strong>{visitTEXT[language].sunday}</strong> 3:30 PM</li>
          <li className="visit-item"><strong>{visitTEXT[language].saturday}</strong> 7:30 PM</li>
          <li className="visit-item"><strong>{visitTEXT[language].wednesday}</strong> 8:00 PM</li>
        </ul>
        <p className="visit-location"><strong>{visitTEXT[language].location}</strong> 1530 4th Ave, Folsom, PA 19033</p>
      </div>

      <div className="visit-plan">
        <h2 className="visit-heading">{visitTEXT[language].planVisit}</h2>
        {visitSubmitted ? (
          <p className="visit-thank-you">{visitTEXT[language].thankYou.replace("{name}", visitName)}</p>
        ) : (
          <form className="visit-form" onSubmit={handleVisitSubmit}>
            <input
              type="text"
              className="visit-input"
              placeholder={visitTEXT[language].namePlaceholder}
              value={visitName}
              onChange={(e) => setVisitName(e.target.value)}
              required
            />
            <button type="submit" className="visit-button">{visitTEXT[language].ctaButton}</button>
          </form>
        )}
      </div>

      <div className="visit-faq">
        <h2 className="visit-heading">{visitTEXT[language].faq}</h2>

        {visitTEXT[language].faqs.map((faq, index) => (
          <details key={index} className="visit-details">
            <summary className="visit-summary">{faq.question}</summary>
            <p className="visit-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default NewVisitors;

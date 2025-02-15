import React from "react";
import "./Give.css";
import { useNavigate } from "react-router-dom";
import { GiveText } from "./DonateTEXT";

const DisplayGivePage = ({ language }) => {
  const navigate = useNavigate();

  return (
    <div className="give-container">
      <h1 className="give-title">{GiveText[language].title}</h1>
      <p className="give-caption">{GiveText[language].caption}</p>
      
      <div className="give-options">
        <div className="give-option">
          <h2 className="give-option-title">{GiveText[language].optionTitle}</h2>
          <p className="give-option-text">{GiveText[language].optionText}</p>
          <h2>🙏</h2>
        </div>
        
        <div className="give-option">
          <h2 className="give-option-title">{GiveText[language].optionTitle2}</h2>
          <p className="give-option-text">{GiveText[language].optionText2}</p>
          <button className="give-button" onClick={() => navigate("/donate/online")}>{GiveText[language].button}</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayGivePage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaySuccess.css";
import { GiveText } from "./DonateTEXT";


function DisplayDonateCompletePage ({ language }){

    const navigate = useNavigate();
  
    return (
       <div className="SUCC-container">
      <h1 className="SUCC-title">{GiveText[language].succ.title}</h1>
      <p className="SUCC-message">{GiveText[language].succ.message}</p>
      
      <div className="SUCC-options">
        <button className="SUCC-button" onClick={() => alert(GiveText[language].succ.alert1)}>{GiveText[language].succ.option1}</button>
        <button className="SUCC-button" onClick={() => alert(GiveText[language].succ.alert2)}>{GiveText[language].succ.option2}</button>
      </div>
      
      <button className="SUCC-home-button" onClick={() => navigate("/")}>{GiveText[language].succ.return}</button>
    </div>
    )
}

export default DisplayDonateCompletePage;
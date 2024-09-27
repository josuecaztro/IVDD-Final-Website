import React, { useState } from 'react';
import './toggleLangButton.css';

function ShowToggleButton() {
    const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="toggle-container" onClick={toggleLanguage}>
      <div className={`toggle-btn ${isEnglish ? "english" : "spanish"}`}>
        <div className="toggle-circle"></div>
      </div>
      {/* <p className="label5 english-label">English</p>
      <p className="label5 spanish-label">Spanish</p> */}
    </div>
  );
}

export default ShowToggleButton;
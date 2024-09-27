import React, { useState } from 'react';
import './toggleLangButton.css';

function ShowToggleButton( { language, setLanguage } ) {
    const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <div className="toggle-container" onClick={toggleLanguage}>
            <div className={`toggle-btn ${isEnglish ? 'english' : 'spanish'}`}>
                <div 
                    className="toggle-circle"
                ></div>
            </div>
        </div>
  );
}

export default ShowToggleButton;
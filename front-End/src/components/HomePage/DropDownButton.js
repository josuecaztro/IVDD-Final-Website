import React, { useState } from 'react';
import './DropDownButton.css';
import { useNavigate } from 'react-router-dom'; 
import siteText from './HomePageTEXT';

const Dropdown = ( { setTopic, language }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (topic) => {
    setTopic(topic);
    // navigate("/livetopics")
    navigate('/livetopics', { state: { selectedTopic: topic } });
    console.log("Set topic is: " + topic);
    setIsOpen(false);
  };

  return (
    <div className="dropdown0">
      <button className="dropdown-button1" onClick={toggleDropdown}>
        {siteText[language].topicButton}<span className="arrow">
          <svg
         xmlns="http://www.w3.org/2000/svg"
          width="16"
           height="16"
            fill="currentColor"
             class="bi bi-chevron-down"
              viewBox="0 0 16 16"
                className={`dropdown-icon1 ${isOpen ? "opened" : ""}`}>
  <path fill-rule="evenodd"
   d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
</span>
      </button>
      {isOpen && (
        <ul className="dropdown-list2">
          <li onClick={() => handleOptionClick('Discipleship')}>{siteText[language].dOption}</li>
          <li onClick={() => handleOptionClick('Marriage')}>{siteText[language].mOption}</li>
          <li onClick={() => handleOptionClick('Mind')}>{siteText[language].tmOption}</li>
          {/* Add more topics here */}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

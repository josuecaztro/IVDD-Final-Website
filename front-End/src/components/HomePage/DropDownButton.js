import React, { useState } from 'react';
import './DropDownButton.css'; // Import CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (topic) => {
    // Replace with your logic for what to do when an option is clicked
    console.log(`Selected topic: ${topic}`);
    // Optionally close the dropdown after selection
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        View by Topic <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={() => handleOptionClick('Topic 1')}>Topic 1</li>
          <li onClick={() => handleOptionClick('Topic 2')}>Topic 2</li>
          <li onClick={() => handleOptionClick('Topic 3')}>Topic 3</li>
          {/* Add more topics here */}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

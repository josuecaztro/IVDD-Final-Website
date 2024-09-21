import React from 'react';
import './AwesomeButton.css';

function CoolButton({ text, onClick }) {
  return (
    <button className="cool-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default CoolButton;

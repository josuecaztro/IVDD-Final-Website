import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    fetch('http://localhost:8080/api/prayer-request-forms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <button onClick={handleClick}>Show Prayer Requests</button>
  );
};

export default ButtonComponent;

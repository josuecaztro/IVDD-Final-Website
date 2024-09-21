import React from 'react';

const ButtonComponent2 = () => {
  const handleClick = () => {
    fetch('http://localhost:8080/api/contact-requests')
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
    <button onClick={handleClick}>Show Messages</button>
  );
};

export default ButtonComponent2;

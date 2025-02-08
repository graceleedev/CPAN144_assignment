import React, { useState } from 'react';

//handler for hover event
function ButtonHandler() {
  const [showButton, setShowButton] = useState(false); //set false to hide list by default

  const toggleButton = () => {
    setShowButton(!showButton);
  }

  const enableButton = () => {
    setShowButton(true);
  }

  return (
    <div>
      {showButton ? <button onClick={toggleButton}>Hide</button> : <button onClick={enableButton}>Check</button>}
      {showButton && (
      <ul>
      <li>11:00</li>
      <li>12:00</li>
      <li>13:00</li>
      </ul>
      )
      }
    </div>
  );
}

export default function App() {
  return (
    <div>
      <span>Available Time Slots</span>
      <ButtonHandler />
    </div>
  );
}
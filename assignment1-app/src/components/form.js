import React, { useState } from 'react';

//function to pass data using prop
function Welcome(props) {
    return <h2>{props.name}, recommendations for you!</h2>;
  }


//handler for submit event
function SubmitHandler() {
  const [name, setName] = useState('Guest');
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault ();
    if (!name || !number) {
      setMessage('Please enter value.')
    } else {
      setMessage('Table booked successfully!')
    }
  }

  return (
  <div>
    <form onSubmit={(event) => handleSubmit(event)}>
      <p>Name</p>
      <input 
        type="text" 
        name="name" 
        onChange={(e) => setName(e.target.value)}
      />
      <p>Number of guests</p>
      <input 
        type="number" 
        name="number" 
        onChange={(e) => setNumber(e.target.value)}
      />
      
    <button type="submit">Submit</button>
  </form>
  {message && <p>{message}</p>}
  <Welcome name={name}/>
  </div>
  ) ;
  }

  export default function App() {
  return (
    <div>
        <SubmitHandler />
    </div>
  );
  }
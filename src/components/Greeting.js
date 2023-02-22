import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message.greeting);
  const status = useSelector((state) => state.greeting.status);
  
  if (status === 'succeeded') {
    return (
        <>
        <h1>From API:</h1>
        <p className=".App-link">{ greeting }</p>
      </>
    );
  }
}

export default Greeting;
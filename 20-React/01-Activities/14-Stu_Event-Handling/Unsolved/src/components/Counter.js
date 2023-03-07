import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// It's the equivalent to modules.export (This is how it's written for REACT)
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // Sets the count in the useState to the starting number you want
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // Increments the count when clicked
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Decrements the count when cicked
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* Passes down the event handlers */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}

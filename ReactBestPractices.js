// React Best Practices Guide

/**
 * 1. Component Structure:
 *    - Break down the UI into reusable and small components.
 *    - Keep your components simple, single-purpose, and composable.
 */
import React, { useState, useEffect } from "react";

// A simple reusable Button component
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

/**
 * 2. Use Hooks Appropriately:
 *    - UseState for state management.
 *    - UseEffect for side effects like API calls, subscriptions.
 */
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Example of a side effect
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button text="Increment" onClick={() => setCount(count + 1)} />
    </div>
  );
};

/**
 * 3. Conditional Rendering:
 *    - Render components or elements conditionally using logical operators or ternary operators.
 */
const UserGreeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please sign in.</h2>;
};

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

/**
 * 4. Prop Validation:
 *    - Validate the props passed to components using PropTypes.
 */
import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * 5. Avoid Inline Functions:
 *    - Avoid inline functions in render as it causes the function to be re-created on every render.
 *    - Define event handlers outside the render method to optimize performance.
 */
const handleButtonClick = () => {
  console.log("Button clicked!");
};

const App = () => {
  return (
    <div>
      <h1>React Best Practices</h1>
      <UserGreeting isLoggedIn={true} />
      <Counter />
      <Button text="Click Me" onClick={handleButtonClick} />
    </div>
  );
};

export default App;

/**
 * 6. Organize Files:
 *    - Keep files and folders structured logically, e.g., one component per file, using folders for related components. */
// * 7. Avoid Deeply Nested JSX:
// *    - Avoid deeply nested components in JSX, keep the structure shallow for better readability.
// *

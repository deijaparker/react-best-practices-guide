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

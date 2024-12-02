import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate an authentication check (you can replace this with your actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem("auth_token"); // Example check (assuming token is stored in localStorage)
};

// ProtectedRoute will return the component or redirect based on authentication status
const ProtectedRoute = ({ element }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }
  
  return element;  // If authenticated, render the component
};

export default ProtectedRoute;

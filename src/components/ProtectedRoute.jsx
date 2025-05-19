import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  if (!loginStatus) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

import React from 'react';
import Auth from '../services/auth';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...others }) => {
  if (!Auth.checkAuth()) {
    return <Redirect to="/login" />
  }
  return <Route {...others} />;
}

export default ProtectedRoute;
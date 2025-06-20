import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface CustomerRouteProps {
  children: React.ReactNode;
}

const CustomerRoute: React.FC<CustomerRouteProps> = ({ children }) => {
  const { state } = useAuth();

  // Check if user is authenticated
  if (!state.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If user is admin, redirect to admin panel
  if (state.user?.email === 'abc@gmail.com') {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default CustomerRoute;
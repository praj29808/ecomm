import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { state } = useAuth();

  // Check if user is authenticated and is admin
  if (!state.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Check if user is admin (email: abc@gmail.com)
  if (state.user?.email !== 'abc@gmail.com') {
    return <Navigate to="/customer" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
  return props.user? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
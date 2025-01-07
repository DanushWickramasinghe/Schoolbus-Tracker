import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getAccessTokenWithRefreshToken } from '../apis/auth.api';

const ProtectedRoute = ({ children, roles }) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken) {
    return <Navigate to='/login' />;
  }

  try {
    const decodedToken = jwtDecode(accessToken);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      if (!refreshToken) {
        return <Navigate to='/login' />;
      }

      const decodedRefreshToken = jwtDecode(refreshToken);
      if (decodedRefreshToken.exp * 1000 < new Date().getTime()) {
        return <Navigate to='/login' />;
      }

      try {
        const response = getAccessTokenWithRefreshToken();
        if (!response.accessToken && !response.refreshToken) {
          return <Navigate to='/login' />;
        }
      } catch (error) {
        console.error('Error:', error);
        return <Navigate to='/login' />;
      }

      const newAccessToken = localStorage.getItem('accessToken');
      const newDecodedToken = jwtDecode(newAccessToken);
      if (!roles.includes(newDecodedToken.role)) {
        return <Navigate to='/login' />;
      }
      return children;
    }

    if (!roles.includes(decodedToken.role)) {
      return <Navigate to='/login' />;
    }
    return children;
  } catch (error) {
    console.error('Error:', error);
    return <Navigate to='/login' />;
  }
};

export default ProtectedRoute;

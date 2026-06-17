import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import authService from '../services/authService';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
          setUser({
            id: decoded.userId,
            email: decoded.sub,
            role: decoded.role,
            name: decoded.name
          });
        } else {
          logout();
        }
      } catch (error) {
        console.error('Invalid token:', error);
        logout();
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      // ApiResponse wraps data: { success, message, data: { token, ... } }
      const authData = response.data.data || response.data;
      const newToken = authData.token;
      localStorage.setItem('token', newToken);
      setToken(newToken);
      const decoded = jwtDecode(newToken);
      setUser({
        id: decoded.userId,
        email: decoded.sub,
        role: decoded.role,
        name: decoded.name
      });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      // ApiResponse: { success, message, data }
      const body = response.data;
      if (body.success === false) {
        return { success: false, message: body.message || 'Registration failed' };
      }
      return { success: true, message: body.message || 'Registered successfully' };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const hasRole = (requiredRole) => {
    return user && user.role === requiredRole;
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    hasRole,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

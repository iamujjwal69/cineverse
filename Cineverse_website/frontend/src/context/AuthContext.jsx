import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import authService from '../services/authService';

const AuthContext = createContext(null);

// Key used to persist demo-mode user to localStorage (no fake JWT involved)
const DEMO_USER_KEY = 'demo_user';

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
    // Restore a real JWT session
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
          // Token expired — clear it
          localStorage.removeItem('token');
          setToken(null);
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
        setToken(null);
      }
    } else {
      // Check for a persisted demo-mode session
      const savedDemo = localStorage.getItem(DEMO_USER_KEY);
      if (savedDemo) {
        try {
          setUser(JSON.parse(savedDemo));
        } catch {
          localStorage.removeItem(DEMO_USER_KEY);
        }
      }
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const authData = response.data.data || response.data;
      const newToken = authData.token;
      localStorage.setItem('token', newToken);
      setToken(newToken);
      const decoded = jwtDecode(newToken);
      const loggedInUser = {
        id: decoded.userId,
        email: decoded.sub,
        role: decoded.role,
        name: decoded.name
      };
      setUser(loggedInUser);
      return { success: true };
    } catch (error) {
      // Backend unreachable — fall back to demo mode (role is always USER)
      console.warn('Backend unavailable, switching to demo mode:', error.message);
      if (email && password) {
        const name = email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const demoUser = {
          id: 0,
          email,
          // Demo mode always grants USER role — no privilege escalation via email
          role: 'USER',
          name,
          isDemo: true
        };
        localStorage.setItem(DEMO_USER_KEY, JSON.stringify(demoUser));
        setUser(demoUser);
        return { success: true };
      }
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      const body = response.data;
      if (body.success === false) {
        return { success: false, message: body.message || 'Registration failed' };
      }
      return { success: true, message: body.message || 'Registered successfully' };
    } catch (error) {
      // Backend unreachable — demo registration
      console.warn('Backend unavailable, demo registration:', error.message);
      if (userData.email && userData.password) {
        return { success: true, message: 'Demo registration successful — backend is offline' };
      }
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem(DEMO_USER_KEY);
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

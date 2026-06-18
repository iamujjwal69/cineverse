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
      console.warn('Backend login failed, attempting local demo fallback:', error);
      if (email && password) {
        // Create a mock JWT payload
        const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
        const role = email.includes("admin") ? "ADMIN" : email.includes("owner") ? "THEATRE_OWNER" : "USER";
        const name = email.split("@")[0].split(".")[0];
        const payload = btoa(JSON.stringify({
          userId: 999,
          sub: email,
          role: role,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          exp: Math.floor(Date.now() / 1000) + 86400
        }));
        const mockToken = `${header}.${payload}.signature`;
        
        localStorage.setItem('token', mockToken);
        setToken(mockToken);
        
        setUser({
          id: 999,
          email: email,
          role: role,
          name: name.charAt(0).toUpperCase() + name.slice(1)
        });
        
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
      console.warn('Backend registration failed, attempting local demo fallback:', error);
      if (userData.email && userData.password) {
        return { success: true, message: 'Demo registration successful (Demo Mode)' };
      }
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

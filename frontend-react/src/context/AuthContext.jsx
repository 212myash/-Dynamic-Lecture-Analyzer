import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5001';
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load token and user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedUser = localStorage.getItem(USER_KEY);

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error loading auth data:', err);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const signup = async (fullName, email, mobileNumber, password, confirmPassword) => {
    setError(null);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/auth/signup`, {
        fullName,
        email,
        mobileNumber,
        password,
        confirmPassword
      });

      const { token, user } = response.data;
      
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      
      setToken(token);
      setUser(user);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Signup failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const signin = async (identifier, password) => {
    setError(null);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/auth/signin`, {
        identifier,
        password
      });

      const { token, user } = response.data;
      
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      
      setToken(token);
      setUser(user);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Signin failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUser(null);
    setError(null);
  };

  const updateProfile = async (fullName, mobileNumber, profileImage) => {
    setError(null);
    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/auth/profile/update`,
        { fullName, mobileNumber, profileImage },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const updatedUser = response.data.user;
      localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Profile update failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.user;
    } catch (err) {
      console.error('Error fetching profile:', err);
      throw err;
    }
  };

  const value = {
    user,
    token,
    isLoading,
    error,
    signup,
    signin,
    logout,
    updateProfile,
    getProfile,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

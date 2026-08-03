/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { authApi } from '../lib/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

const normalizeUser = (profile) => ({
  id: profile.id,
  email: profile.email,
  role: profile.role,
  name: profile.full_name,
  full_name: profile.full_name,
  phone: profile.phone,
  municipality_id: profile.municipality_id,
});

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem('landx_token');
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('landx_user');
    if (!storedToken || !stored) return null;
    return JSON.parse(stored);
  });
  const [token, setToken] = useState(() => storedToken);
  const [loading, setLoading] = useState(Boolean(storedToken));

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('landx_user');
      return;
    }

    let active = true;
    authApi
      .me(token)
      .then((profile) => {
        if (!active) return;
        const normalizedUser = normalizeUser(profile);
        setUser(normalizedUser);
        localStorage.setItem('landx_user', JSON.stringify(normalizedUser));
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        setToken(null);
        localStorage.removeItem('landx_user');
        localStorage.removeItem('landx_token');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [token]);

  const login = useCallback(async (email, password) => {
    try {
      const auth = await authApi.login(email, password);
      const profile = await authApi.me(auth.access_token);
      const normalizedUser = normalizeUser(profile);
      setToken(auth.access_token);
      setUser(normalizedUser);
      localStorage.setItem('landx_token', auth.access_token);
      localStorage.setItem('landx_user', JSON.stringify(normalizedUser));
      return { success: true, message: 'تم تسجيل الدخول بنجاح', role: normalizedUser.role };
    } catch (error) {
      return { success: false, message: error.message || 'فشل تسجيل الدخول' };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('landx_user');
    localStorage.removeItem('landx_token');
  }, []);

  const isAuthenticated = !!user;
  const isRole = useCallback((role) => user?.role === role, [user]);

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated, isRole }}>
      {children}
    </AuthContext.Provider>
  );
};

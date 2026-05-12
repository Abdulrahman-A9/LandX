import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

const MOCK_USERS = [
  { email: 'investor@landx.sa', password: '123456', role: 'investor', name: 'أحمد المستثمر' },
  { email: 'municipality@landx.sa', password: '123456', role: 'municipality', name: 'فهد المسؤول' },
  { email: 'admin@landx.sa', password: '123456', role: 'admin', name: 'عبدالرحمن المشرف' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('landx_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = useCallback((email, password) => {
    const found = MOCK_USERS.find((u) => u.email === email && u.password === password);
    if (!found) return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
    const userData = { email: found.email, role: found.role, name: found.name };
    setUser(userData);
    localStorage.setItem('landx_user', JSON.stringify(userData));
    return { success: true, message: 'تم تسجيل الدخول بنجاح', role: found.role };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('landx_user');
  }, []);

  const isAuthenticated = !!user;
  const isRole = useCallback((role) => user?.role === role, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isRole }}>
      {children}
    </AuthContext.Provider>
  );
};

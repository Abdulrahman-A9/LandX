import React, { createContext, useContext, useState, useCallback } from 'react';
import { XIcon, CheckCircleIcon, AlertTriangleIcon, InfoIcon } from '../components/ui/Icons';

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

const icons = {
  success: <CheckCircleIcon className="w-5 h-5 text-success" />,
  error: <AlertTriangleIcon className="w-5 h-5 text-danger" />,
  info: <InfoIcon className="w-5 h-5 text-accent" />,
};

const styles = {
  success: 'border-success bg-success/10',
  error: 'border-danger bg-danger/10',
  info: 'border-accent bg-accent/10',
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed top-4 left-4 z-[60] space-y-3 w-full max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg backdrop-blur animate-fade-in ${styles[toast.type] || styles.info}`}
          >
            <div className="flex-shrink-0 mt-0.5">{icons[toast.type] || icons.info}</div>
            <p className="text-sm font-medium text-app-text flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-app-text-muted hover:text-app-text transition-colors flex-shrink-0"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

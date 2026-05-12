import React, { createContext, useContext, useState, useCallback } from 'react';
import { XIcon, CheckCircleIcon, AlertTriangleIcon, InfoIcon } from '../components/ui/Icons';

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

const icons = {
  success: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
  error: <AlertTriangleIcon className="w-5 h-5 text-red-600" />,
  info: <InfoIcon className="w-5 h-5 text-blue-600" />,
};

const styles = {
  success: 'border-green-400 bg-green-50/90',
  error: 'border-red-400 bg-red-50/90',
  info: 'border-blue-400 bg-blue-50/90',
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
            <p className="text-sm font-medium text-brown-900 flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-brown-500 hover:text-brown-700 transition-colors flex-shrink-0"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

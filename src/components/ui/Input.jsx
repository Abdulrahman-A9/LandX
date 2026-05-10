import React from 'react';

const Input = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-dark-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 bg-dark-800/80 text-white border ${error ? 'border-red-500' : 'border-primary-500/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;

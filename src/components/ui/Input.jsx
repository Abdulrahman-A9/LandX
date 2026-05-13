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
        <label className="block text-sm font-medium text-brown-700 dark:text-stone-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 bg-pearl-50 dark:bg-stone-900 text-brown-900 dark:text-stone-100 border ${error ? 'border-red-500' : 'border-brown-300 dark:border-stone-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-stone-500 focus:border-transparent placeholder:text-brown-400 dark:placeholder:text-stone-500 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;

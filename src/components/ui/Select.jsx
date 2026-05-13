import React from 'react';

const Select = ({ 
  label, 
  options, 
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
      <select
        className={`w-full px-3 py-2 bg-pearl-50 dark:bg-stone-900 text-brown-900 dark:text-stone-100 border ${error ? 'border-red-500' : 'border-brown-300 dark:border-stone-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-stone-500 focus:border-transparent ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Select;

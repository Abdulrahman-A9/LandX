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
        <label className="block text-sm font-medium text-app-text-muted mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full px-4 py-3 bg-app-surface text-app-text border ${error ? 'border-danger' : 'border-app-border'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-danger">{error}</p>
      )}
    </div>
  );
};

export default Select;

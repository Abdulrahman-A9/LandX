import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brown-600 to-brown-700 text-white hover:from-brown-700 hover:to-brown-800 focus:ring-brown-500',
    secondary: 'bg-gradient-to-r from-pearl-400 to-pearl-500 text-brown-900 hover:from-pearl-500 hover:to-pearl-600 focus:ring-pearl-300 dark:from-stone-600 dark:to-stone-500 dark:text-stone-100 dark:hover:from-stone-500 dark:hover:to-stone-400 dark:focus:ring-stone-500',
    outline: 'border-2 border-brown-500 text-brown-700 hover:bg-brown-100 focus:ring-brown-500 dark:border-stone-500 dark:text-stone-200 dark:hover:bg-stone-800 dark:focus:ring-stone-500',
    ghost: 'text-brown-700 hover:bg-brown-100 hover:text-brown-900 focus:ring-brown-500 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-100 dark:focus:ring-stone-500',
    danger: 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

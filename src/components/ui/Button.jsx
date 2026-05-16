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
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brand to-brand-deep text-app-text hover:from-brand-deep hover:to-brand focus:ring-brand shadow-lg hover:shadow-xl',
    secondary: 'bg-app-surface border border-app-border text-app-text hover:bg-app-surface-strong hover:border-brand focus:ring-accent',
    outline: 'border-2 border-app-border text-app-text hover:bg-app-surface-soft hover:border-brand focus:ring-brand',
    ghost: 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text focus:ring-brand',
    danger: 'bg-gradient-to-r from-danger to-danger/90 text-app-text hover:from-danger/90 hover:to-danger focus:ring-danger shadow-lg',
    success: 'bg-gradient-to-r from-success to-success/90 text-app-text hover:from-success/90 hover:to-success focus:ring-success shadow-lg',
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

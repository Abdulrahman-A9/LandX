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
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-app-bg disabled:cursor-not-allowed disabled:opacity-50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brand to-brand-deep text-app-text shadow-lg shadow-brand/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/25 focus:ring-brand',
    secondary: 'border border-brand/20 bg-brand/10 text-app-text hover:bg-brand/15 hover:border-brand/30 focus:ring-brand',
    outline: 'border border-app-border bg-app-surface-soft/60 text-app-text hover:bg-app-surface hover:border-brand/30 focus:ring-brand',
    ghost: 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text focus:ring-brand',
    danger: 'bg-gradient-to-r from-danger to-danger/90 text-app-text shadow-lg shadow-danger/20 hover:-translate-y-0.5 focus:ring-danger',
    success: 'bg-gradient-to-r from-success to-success/90 text-app-text shadow-lg shadow-success/20 hover:-translate-y-0.5 focus:ring-success',
  };
  
  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
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

import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'border border-app-border bg-app-surface-soft text-app-text-muted',
    primary: 'border border-brand/30 bg-brand/10 text-brand',
    success: 'border border-success/30 bg-success/10 text-success',
    warning: 'border border-warning/30 bg-warning/10 text-warning',
    danger: 'border border-danger/30 bg-danger/10 text-danger',
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

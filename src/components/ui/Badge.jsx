import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'border border-[#dbc5b0] bg-[#fff7ef] text-[#8b674f]',
    primary: 'border border-brand/20 bg-[#f7ecdf] text-brand',
    success: 'border border-success/25 bg-[#eef3e7] text-success',
    warning: 'border border-warning/25 bg-[#fbf1e6] text-warning',
    danger: 'border border-danger/25 bg-[#f5e5e2] text-danger',
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

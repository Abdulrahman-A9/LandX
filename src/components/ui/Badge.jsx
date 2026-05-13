import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-dark-800 text-dark-300 border border-dark-700',
    primary: 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-brown-700 dark:text-stone-200 border border-primary-500/30',
    success: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30',
    warning: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 border border-red-500/30',
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`bg-card-gradient dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-800 backdrop-blur rounded-lg shadow-sm dark:shadow-black/30 border border-brown-300 dark:border-stone-700 transition-all duration-300 ${hover ? 'hover:shadow-lg hover:scale-105 hover:border-brown-400 dark:hover:border-stone-500' : 'hover:shadow-md hover:border-brown-400 dark:hover:border-stone-500'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-b border-brown-300 dark:border-stone-700 ${className}`}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-t border-brown-300 dark:border-stone-700 ${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

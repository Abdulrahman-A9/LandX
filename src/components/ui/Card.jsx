import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`bg-card-gradient backdrop-blur rounded-lg shadow-lg border border-app-border transition-all duration-300 ${hover ? 'hover:shadow-xl hover:scale-105 hover:border-brand' : 'hover:shadow-md hover:border-muted'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-b border-app-border ${className}`}>
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
    <div className={`px-6 py-4 border-t border-app-border ${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

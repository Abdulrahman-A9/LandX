import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`rounded-[1.75rem] border border-app-border/80 bg-card-gradient shadow-[var(--landx-shadow-soft)] backdrop-blur-xl transition-all duration-300 ${
        hover
          ? 'hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[var(--landx-shadow)]'
          : 'hover:border-app-border'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`border-b border-app-border/70 px-6 py-5 ${className}`}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-5 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '' }) => {
  return (
    <div className={`border-t border-app-border/70 px-6 py-5 ${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;

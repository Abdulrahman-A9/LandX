import React from 'react';

const BrandLogo = ({ alt = 'LandX', className = '', imageClassName = 'h-12 w-auto' }) => (
  <img
    src="/landx-logo.png"
    alt={alt}
    className={`block object-contain ${imageClassName} ${className}`}
  />
);

export default BrandLogo;

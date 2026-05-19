import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AnimatedSection = ({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin,
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold, rootMargin);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        filter: isVisible ? 'blur(0)' : 'blur(3px)',
        transition: 'opacity 650ms ease, transform 650ms ease, filter 650ms ease',
        transitionDelay: isVisible && delay > 0 ? `${delay}ms` : undefined,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

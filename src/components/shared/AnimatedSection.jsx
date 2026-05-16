import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const animations = {
  fadeUp: 'animate-fade-in-up',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideLeft: 'animate-slide-in-left',
  slideRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  blurIn: 'animate-blur-in',
};

const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animations[animation] : 'opacity-0'}`}
      style={{
        animationDelay: isVisible && delay > 0 ? `${delay}ms` : undefined,
        willChange: isVisible ? 'transform, opacity' : 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

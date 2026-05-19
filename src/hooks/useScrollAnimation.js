import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.15, rootMargin = '0px 0px -8% 0px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) {
      return undefined;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

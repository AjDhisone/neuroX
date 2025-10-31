import { useEffect, useMemo, useRef, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

export default function useScrollAnimation(customOptions = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const observerOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...customOptions,
    }),
    [customOptions.root, customOptions.rootMargin, customOptions.threshold]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, observerOptions);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [observerOptions]);

  return [elementRef, isVisible];
}

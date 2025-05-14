import React, { useEffect, useRef, useState } from 'react';

interface StorySectionProps {
  children: React.ReactNode;
}

const StorySection: React.FC<StorySectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className={`fade-in text-lg md:text-xl leading-relaxed ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default StorySection;
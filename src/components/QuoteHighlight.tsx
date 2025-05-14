import React, { useEffect, useRef, useState } from 'react';

interface QuoteHighlightProps {
  quote: string;
}

const QuoteHighlight: React.FC<QuoteHighlightProps> = ({ quote }) => {
  const quoteRef = useRef<HTMLDivElement>(null);
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
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={quoteRef}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      <blockquote className="quote text-xl md:text-2xl lg:text-3xl font-medium">
        {quote}
      </blockquote>
    </div>
  );
};

export default QuoteHighlight;
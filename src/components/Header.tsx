import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <header 
      className={`sticky top-0 z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-amber-800/90 text-amber-50 shadow-md backdrop-blur-md py-2' 
          : 'bg-transparent text-stone-800 py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-center items-center">
        <h1 className="font-semibold text-xl md:text-2xl tracking-tight">A boy's story</h1>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-800 text-amber-50 py-2">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <span className="font-['Playfair_Display'] italic tracking-wide">
            The boy = <span className="font-['Montserrat'] font-medium not-italic">Dheepak karan</span>
          </span>
          <span className="text-amber-200/50">|</span>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:your.email@gmail.com" className="text-amber-200 hover:text-white transition-colors">
            <Mail size={16} />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-white transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
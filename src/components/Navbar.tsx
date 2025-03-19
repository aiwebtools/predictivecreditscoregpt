
import { useState, useEffect } from 'react';
import { SearchCheck, Menu, X } from 'lucide-react';
import { Separator } from './ui/separator';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <SearchCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white text-xl leading-tight">
              Predictive Credit Score<span className="text-neon-cyan">.</span>
            </h1>
            <p className="text-xs text-gray-400 -mt-1">
              Presented by <a href="https://www.aiwebtools.ai" className="text-neon-cyan hover:text-neon-purple transition-colors">AiWebTools.Ai</a>
            </p>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Use Predictor
          </a>
          <a 
            href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Real Estate Tools
          </a>
          <a 
            href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Insurance Tools
          </a>
          <Separator orientation="vertical" className="h-5 bg-gray-700" />
          <div className="flex space-x-6">
            <a 
              href="#faq" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </nav>
        
        {/* CTA Button */}
        <a 
          href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
          className="hidden md:flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
        >
          Try It Now
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass p-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker" 
              className="text-sm font-medium text-white py-2 border-b border-white/10"
            >
              Use Predictive Credit Score Checker
            </a>
            <a 
              href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
              className="text-sm font-medium text-white py-2 border-b border-white/10"
            >
              Real Estate AI Tools Suite
            </a>
            <a 
              href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
              className="text-sm font-medium text-white py-2 border-b border-white/10"
            >
              Insurance Industry AI Tools Suite
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-sm font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
              className="mt-4 text-center py-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold"
            >
              Try It Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

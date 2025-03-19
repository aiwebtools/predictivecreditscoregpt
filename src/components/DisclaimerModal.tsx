
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Show the modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="glass-card rounded-xl w-full max-w-md p-6 relative animate-fade-up">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={handleAccept}
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-semibold text-white mb-4">Disclaimer</h3>
        
        <div className="text-gray-300 text-sm mb-6 space-y-3">
          <p>
            The Predictive Credit Score Checker provides estimates based on publicly available data and statistical models. Results are not guaranteed to be accurate and should not replace official credit reports.
          </p>
          <p>
            This tool does not access personal credit information and is intended for educational purposes only. AI WEB TOOLS LLC is not responsible for decisions made based on these predictions.
          </p>
          <p>
            By clicking "I Agree" below, you acknowledge that you have read and understand this disclaimer.
          </p>
        </div>
        
        <button
          className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          onClick={handleAccept}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;

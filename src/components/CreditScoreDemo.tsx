
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, FileCheck, SearchCheck } from 'lucide-react';

const CreditScoreDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      setIsSubmitted(true);
    }
  };
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-80 -right-80 w-[800px] h-[800px] rounded-full bg-neon-purple/10 blur-3xl"></div>
      <div className="absolute -bottom-80 -left-80 w-[800px] h-[800px] rounded-full bg-neon-cyan/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Demo content */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-neon-cyan"></div>
              <span className="text-neon-cyan text-sm font-medium">INTERACTIVE DEMO</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Try Our Predictor
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Enter an address below to see a demonstration of our credit score prediction technology.
              For the full experience, use our complete tool.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-300 mb-2">Property Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter property address"
                  className="w-full p-4 rounded-lg bg-dark-lighter border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 flex items-center justify-center gap-2"
              >
                Run Demo Prediction <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            <p className="text-gray-400 text-sm">
              This is a demonstration only. For full functionality, use our complete tool.
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <a 
                href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
                className="text-neon-cyan hover:text-neon-purple transition-colors flex items-center gap-2"
              >
                <FileCheck className="w-5 h-5" />
                Access Full Tool
              </a>
            </div>
          </div>
          
          {/* Demo visualization */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                  <SearchCheck className="w-5 h-5 text-dark" />
                </div>
                <h3 className="font-semibold text-white">Demo Prediction</h3>
              </div>
              
              {!isSubmitted ? (
                <div className="text-center py-10">
                  <p className="text-gray-400">
                    Enter an address to see a demo prediction.
                  </p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Address Analyzed</p>
                    <p className="text-white">{address}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Prediction Confidence</span>
                      <span className="text-white">Demo: 85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Sample Prediction Ranges</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="glass p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400 mb-1">Best Case</p>
                        <p className="text-white font-bold">780-850</p>
                      </div>
                      <div className="p-3 rounded-lg text-center bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30">
                        <p className="text-xs text-gray-300 mb-1">Most Likely</p>
                        <p className="text-neon-cyan font-bold">720-779</p>
                      </div>
                      <div className="glass p-3 rounded-lg text-center">
                        <p className="text-xs text-gray-400 mb-1">Worst Case</p>
                        <p className="text-white font-bold">660-719</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Sample Contributing Factors</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                        <span className="text-gray-300">Neighborhood property values</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                        <span className="text-gray-300">Local income levels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
                        <span className="text-gray-300">Regional credit utilization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-4">This is a demonstration with sample data.</p>
                    <a 
                      href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
                      className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
                    >
                      Access Full Tool
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreDemo;

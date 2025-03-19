
import { useState, useEffect } from 'react';
import { SearchCheck, TrendingUp, Sparkles, BarChart4, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Animation on mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center">
      <div className="container mx-auto px-6">
        {/* Small Disclaimer Alert */}
        <Alert className="mb-8 bg-gray-900/70 border-neon-cyan/30 text-gray-300">
          <AlertTriangle className="h-4 w-4 text-neon-cyan" />
          <AlertDescription className="text-sm">
            <span className="font-medium text-white">Disclaimer:</span> This tool provides predictive estimates only and should not be used as a substitute for official credit checks. Results are not guaranteed.
          </AlertDescription>
        </Alert>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-neon-cyan"></div>
              <span className="text-neon-cyan text-sm font-medium">AI-POWERED CREDIT SCORE PREDICTION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Predict Credit Scores with </span>
              <span className="text-gradient">Precision</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              Advanced AI technology that accurately predicts potential credit scores based on address data and multiple economic factors, helping you make informed financial decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 text-center"
              >
                Try It Now
              </a>
              <a 
                href="#how-it-works"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/10 text-center"
              >
                Learn How It Works
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-dark" />
                </div>
                <h3 className="text-white font-semibold mb-2">Data-Driven Predictions</h3>
                <p className="text-gray-400 text-sm">Using multiple economic and geographic factors for accuracy</p>
              </div>
              
              <div className="glass p-4 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mb-2">
                  <BarChart4 className="w-5 h-5 text-dark" />
                </div>
                <h3 className="text-white font-semibold mb-2">Detailed Analysis</h3>
                <p className="text-gray-400 text-sm">Comprehensive breakdown of all factors influencing predictions</p>
              </div>
            </div>
          </div>
          
          {/* Hero 3D Visual */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mx-auto max-w-md">
              {/* Main Card */}
              <div className="glass-card rounded-2xl overflow-hidden aspect-[5/6] p-6 shadow-xl relative z-10 animate-float">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-neon-cyan animate-pulse" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center">
                    <SearchCheck className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Credit Score Predictor</h3>
                    <p className="text-gray-400 text-xs">Powered by advanced AI</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">Prediction Confidence</span>
                    <span className="text-white text-sm">92%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="glass p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-400 mb-1">Best Case</p>
                    <p className="text-white font-bold text-lg">780-850</p>
                  </div>
                  <div className="p-3 rounded-lg text-center bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30">
                    <p className="text-xs text-gray-300 mb-1">Most Likely</p>
                    <p className="text-neon-cyan font-bold text-lg">710-779</p>
                  </div>
                  <div className="glass p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-400 mb-1">Worst Case</p>
                    <p className="text-white font-bold text-lg">670-709</p>
                  </div>
                </div>
                
                <a 
                  href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] flex items-center justify-center"
                >
                  USE CREDIT SCORE PREDICTOR GPT NOW
                </a>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-1/4 -left-10 w-24 h-24 rounded-full bg-neon-cyan/20 blur-2xl"></div>
              <div className="absolute bottom-1/4 -right-10 w-32 h-32 rounded-full bg-neon-purple/20 blur-2xl"></div>
              <div className="absolute -bottom-6 left-1/4 w-1/2 h-12 bg-neon-cyan/30 blur-2xl"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 glass-card p-4 rounded-lg w-24 h-24 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <TrendingUp className="w-10 h-10 text-neon-cyan" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg w-20 h-20 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <BarChart4 className="w-8 h-8 text-neon-pink" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-5 h-10 rounded-full border border-gray-400 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

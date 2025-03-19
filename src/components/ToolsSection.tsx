
import { useRef, useState, useEffect } from 'react';
import { Search, FileCheck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ToolsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
  
  const tools = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Predictive Credit Score Checker",
      description: "Our flagship tool that predicts credit scores based on property addresses using advanced AI technology.",
      buttonText: "TRY IT NOW",
      url: "https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Property Data Finder",
      description: "Access comprehensive property data to enhance your real estate investment decisions.",
      buttonText: "EXPLORE TOOL",
      url: "https://propertydatafindergpt.lovable.app/?via=aiwebtools"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Claims Assistant",
      description: "Streamline insurance claims processing with our AI-powered assistant.",
      buttonText: "GET STARTED",
      url: "https://insuranceclaimsgpt.lovable.app/?via=aiwebtools"
    }
  ];
  
  return (
    <section id="tools" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-neon-cyan/10 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-neon-blue"></div>
            <span className="text-neon-blue text-sm font-medium">OUR TOOLS</span>
            <div className="h-px w-10 bg-neon-blue"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful AI Tools for Your Needs
          </h2>
          
          <p className="text-gray-300 leading-relaxed">
            Explore our suite of AI-powered tools designed to help you make better decisions.
          </p>
        </div>
        
        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-xl text-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:scale-110">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
              <p className="text-gray-300 mb-8">{tool.description}</p>
              
              <Button
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 transition-all duration-300"
                onClick={() => window.open(tool.url, '_blank')}
              >
                {tool.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

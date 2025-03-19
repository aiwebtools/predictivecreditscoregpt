
import { useState, useEffect, useRef } from 'react';
import { SearchCheck, Map, LineChart, Shield, BarChart, Building, Percent, Globe, TrendingUp, Database } from 'lucide-react';

const Features = () => {
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
  
  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-neon-cyan"></div>
            <span className="text-neon-cyan text-sm font-medium">HOW IT WORKS</span>
            <div className="h-px w-10 bg-neon-cyan"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Predictive Technology
          </h2>
          
          <p className="text-gray-300 leading-relaxed">
            Our AI-powered technology analyzes multiple data points to provide accurate credit score predictions based on property addresses and other relevant factors.
          </p>
        </div>
        
        {/* Main features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Process steps */}
        <div 
          className={`glass-card p-10 rounded-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl font-semibold text-white mb-10 text-center">The Prediction Process</h3>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-14 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"></div>
            
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-dark font-bold">{index + 1}</span>
                </div>
                
                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Data points */}
      <div className="mt-24 py-16 bg-dark-lighter">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-10 bg-neon-purple"></div>
              <span className="text-neon-purple text-sm font-medium">DATA ANALYSIS</span>
              <div className="h-px w-10 bg-neon-purple"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Data Factors
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              Our AI considers a wide range of data points to ensure the most accurate credit score predictions possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {dataFactors.map((factor, index) => (
              <div 
                key={index}
                className={`glass p-5 rounded-xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 10) * 50}ms` }}
              >
                <factor.icon className="w-6 h-6 text-neon-cyan mb-3" />
                <h4 className="text-white font-semibold mb-1">{factor.title}</h4>
                <p className="text-gray-400 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <SearchCheck className="w-6 h-6 text-dark" />,
    title: "Address-Based Prediction",
    description: "Our AI analyzes property addresses to determine various economic and demographic factors that influence credit score prediction."
  },
  {
    icon: <LineChart className="w-6 h-6 text-dark" />,
    title: "Multi-Scenario Analysis",
    description: "We provide best-case, worst-case, and most likely scenarios to give you a comprehensive view of potential credit scores."
  },
  {
    icon: <Shield className="w-6 h-6 text-dark" />,
    title: "Privacy Focused",
    description: "Your data security is our priority. All predictions are made without storing personal information."
  }
];

const processSteps = [
  {
    title: "Input Address",
    description: "Enter the property address you want to analyze."
  },
  {
    title: "Data Gathering",
    description: "Our AI collects relevant economic and demographic data."
  },
  {
    title: "Analysis",
    description: "Advanced algorithms process multiple factors to generate predictions."
  },
  {
    title: "Results",
    description: "Receive detailed credit score predictions with confidence intervals."
  }
];

const dataFactors = [
  {
    icon: Map,
    title: "Location Demographics",
    description: "Age, education, and income distribution in the area."
  },
  {
    icon: Building,
    title: "Property Value Trends",
    description: "Historical and current property valuations."
  },
  {
    icon: Percent,
    title: "Mortgage Rates",
    description: "Local mortgage delinquency and approval rates."
  },
  {
    icon: TrendingUp,
    title: "Economic Indicators",
    description: "Employment rates and economic stability."
  },
  {
    icon: Globe,
    title: "Regional Factors",
    description: "Location-specific economic conditions."
  },
  {
    icon: BarChart,
    title: "Credit Utilization",
    description: "Average credit usage patterns in the region."
  },
  {
    icon: Database,
    title: "Historical Data",
    description: "Past credit behavior in the geographic area."
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Overall risk factors associated with the location."
  }
];

export default Features;

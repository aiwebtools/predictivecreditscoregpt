
import { useRef, useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
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
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-neon-cyan"></div>
            <span className="text-neon-cyan text-sm font-medium">FAQ</span>
            <div className="h-px w-10 bg-neon-cyan"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-300 leading-relaxed">
            Get answers to common questions about our Predictive Credit Score Checker.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`glass-card mb-4 rounded-xl overflow-hidden transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-neon-cyan" />
                  ) : (
                    <Plus className="w-5 h-5 text-neon-cyan" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/10">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div 
          className={`mt-16 glass-card p-10 rounded-2xl text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-8">
            Contact our support team for more information about our Predictive Credit Score Checker.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Contact@ai-webtools.com"
              className="px-6 py-3 rounded-full glass text-white font-medium transition-all duration-300 hover:bg-white/10"
            >
              Contact Support
            </a>
            <a 
              href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
            >
              Try It Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "How accurate are the credit score predictions?",
    answer: "Our predictions are based on comprehensive data analysis of multiple factors including demographic information, economic indicators, and historical credit data associated with the provided address. While we strive for high accuracy, predictions are estimates and may vary from actual credit scores. We provide best-case, worst-case, and most likely scenarios to give a comprehensive view of potential outcomes."
  },
  {
    question: "Does this tool access my personal credit information?",
    answer: "No, our Predictive Credit Score Checker does not access your personal credit information or credit history. It uses publicly available data related to the property address and surrounding area to make predictions based on statistical models and machine learning algorithms."
  },
  {
    question: "What data is used to make credit score predictions?",
    answer: "Our AI analyzes factors such as age demographics, education levels, income statistics, mortgage delinquency rates, bankruptcy and foreclosure rates, credit utilization patterns, loan approval rates, local economic conditions, real estate trends, homeownership rates, and historical home value appreciation in the geographic area."
  },
  {
    question: "Can I use this tool for official credit decisions?",
    answer: "This tool is designed to provide preliminary insights and should not be used as the sole basis for official credit decisions. It's meant to complement traditional credit assessment methods and to give early indicators before formal credit checks are performed."
  },
  {
    question: "How do I get more specific or accurate predictions?",
    answer: "For more refined predictions, our AI can incorporate additional factors beyond just the address. During the prediction process, you'll be prompted to provide more information if you wish to increase prediction accuracy. This might include more specific details about the property or additional demographic information."
  },
  {
    question: "Is my data secure when using this tool?",
    answer: "Yes, data security is our priority. We don't store personal information entered for predictions. All analyses are performed securely, and we comply with relevant data protection regulations. For more details, please review our Privacy Policy."
  }
];

export default FAQ;

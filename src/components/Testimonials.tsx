
import { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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
    <section ref={sectionRef} className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neon-cyan/10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-neon-purple/10 blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-neon-pink"></div>
            <span className="text-neon-pink text-sm font-medium">TESTIMONIALS</span>
            <div className="h-px w-10 bg-neon-pink"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Users Say
          </h2>
          
          <p className="text-gray-300 leading-relaxed">
            Discover how our Predictive Credit Score Checker is helping professionals make better decisions.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neon-cyan/20" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-neon-cyan" fill="#0ff" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-neon-cyan to-neon-blue">
                  <div className="w-full h-full bg-dark-card/80 flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partners section */}
        <div className="mt-24">
          <p className="text-center text-gray-400 mb-10">Trusted by leading companies</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className={`text-gray-500 text-lg font-semibold transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "This tool has revolutionized our loan pre-qualification process. The accuracy of credit score predictions has helped us target the right customers effectively.",
    name: "Jennifer R.",
    title: "Mortgage Broker"
  },
  {
    quote: "The detailed analysis provided for each prediction gives me confidence in making financial recommendations to my clients. A game-changer for our advisory services.",
    name: "Michael T.",
    title: "Financial Advisor"
  },
  {
    quote: "I was skeptical at first, but the predictions have been remarkably close to actual credit scores. This saves us valuable time in the qualification process.",
    name: "Sarah L.",
    title: "Real Estate Agent"
  }
];

const partners = [
  "FINANCE PRO", "REALTY GROUP", "MORTGAGE DIRECT", "CREDIT ADVISORS", "LEND SMART"
];

export default Testimonials;

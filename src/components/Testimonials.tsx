
import { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

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
                {/* Render stars based on the testimonial's rating */}
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-neon-cyan' : 'text-gray-600'}`}
                    fill={i < testimonial.rating ? "#0ff" : "transparent"}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border border-neon-cyan/30">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-neon-cyan to-neon-blue">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tool information section - replacing partners section */}
        <div className="mt-24 glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white text-center mb-8">About Our Technology</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: `300ms` }}>
              <h4 className="text-neon-cyan font-semibold text-lg mb-3">AI-Powered Predictions</h4>
              <p className="text-gray-300">
                Our tool leverages cutting-edge GPT-4o technology to analyze regional trends, economic indicators, and demographic data to predict credit worthiness with remarkable accuracy.
              </p>
            </div>
            
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: `400ms` }}>
              <h4 className="text-neon-pink font-semibold text-lg mb-3">Privacy-First Approach</h4>
              <p className="text-gray-300">
                We never collect or store personal credit information. Our predictions are based on anonymized data patterns and advanced modeling without compromising individual privacy.
              </p>
            </div>
            
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`} style={{ transitionDelay: `500ms` }}>
              <h4 className="text-neon-blue font-semibold text-lg mb-3">Constantly Evolving</h4>
              <p className="text-gray-300">
                Our models are continuously trained on the latest economic data and credit industry trends to ensure the most accurate and relevant predictions available.
              </p>
            </div>
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
    title: "Mortgage Broker",
    rating: 5,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The detailed analysis provided for each prediction gives me confidence in making financial recommendations to my clients. A game-changer for our advisory services.",
    name: "Michael T.",
    title: "Financial Advisor",
    rating: 4,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "I was skeptical at first, but the predictions have been remarkably close to actual credit scores. This saves us valuable time in the qualification process.",
    name: "Sarah L.",
    title: "Real Estate Agent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150"
  }
];

export default Testimonials;

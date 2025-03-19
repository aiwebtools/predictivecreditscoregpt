
import { useEffect } from 'react';
import BackgroundEffect from '../components/BackgroundEffect';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CreditScoreDemo from '../components/CreditScoreDemo';
import Footer from '../components/Footer';
import DisclaimerModal from '../components/DisclaimerModal';
import ToolsSection from '../components/ToolsSection';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Predictive Credit Score Checker | AI-Powered Credit Prediction";
    
    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Background effect */}
      <BackgroundEffect />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Disclaimer modal */}
      <DisclaimerModal />
      
      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero />
        
        {/* Features section */}
        <Features />
        
        {/* Demo section */}
        <CreditScoreDemo />
        
        {/* FAQ section */}
        <FAQ />
        
        {/* Tools section - added between FAQ and Testimonials */}
        <ToolsSection />
        
        {/* Testimonials section */}
        <Testimonials />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* External demo image (embedded as required) */}
      <div className="hidden">
        <a href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true">
          <img 
            src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
            alt="Predictive Credit Score Checker"
          />
        </a>
      </div>
    </div>
  );
};

export default Index;

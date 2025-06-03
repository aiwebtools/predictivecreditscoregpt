
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
import Disclaimer from '../components/Disclaimer';

const Index = () => {
  useEffect(() => {
    // Update document title with SEO optimized content
    document.title = "AI Web Tools - Predictive Credit Score Checker | Advanced AI Tools by AIWEBTOOLS.AI";
    
    // Add SEO meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional AI web tools for credit score prediction, real estate analysis, and insurance claims. Powered by GPT-4 technology. Free AI tools for businesses and professionals by AI WEB TOOLS.');
    }
    
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
      {/* SEO Hidden Content for Keyword Targeting */}
      <div className="sr-only">
        <h1>AI WEB TOOLS - Professional AI Tools by AIWEBTOOLS.AI</h1>
        <p>Leading provider of AI web tools including credit score predictors, real estate AI tools, insurance claim assistants, and business automation solutions. Our AI tools are powered by advanced GPT technology.</p>
        <p>Keywords: AI web tools, AI tools, artificial intelligence tools, business AI tools, GPT tools, predictive analytics, credit score AI, real estate AI tools, insurance AI tools, AIWEBTOOLS.AI, AI WEB TOOLS LLC</p>
      </div>
      
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
      
      {/* Disclaimer section - moved above footer */}
      <Disclaimer />
      
      {/* Footer */}
      <Footer />
      
      {/* External demo image (embedded as required) */}
      <div className="hidden">
        <a href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true">
          <img 
            src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-screenshot-of-a-web-app-with-the-text-predic.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
            alt="AI Web Tools - Predictive Credit Score Checker by AIWEBTOOLS.AI"
          />
        </a>
      </div>
    </div>
  );
};

export default Index;

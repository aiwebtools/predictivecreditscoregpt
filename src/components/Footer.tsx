
import { Mail, Phone } from 'lucide-react';
import SearchCheck from './SearchCheck';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-16 mb-16">
          {/* Company info */}
          <div className="col-span-12 md:col-span-4">
            <a 
              href="/"
              className="flex items-center gap-3 mb-6 group" 
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <SearchCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-white text-xl leading-tight">
                  Predictive Credit Score<span className="text-neon-cyan">.</span>
                </h1>
                <p className="text-xs text-gray-400 -mt-1">
                  by <a href="https://www.aiwebtools.ai" className="hover:text-neon-cyan">AiWebTools.Ai</a>
                </p>
              </div>
            </a>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advanced AI technology that predicts potential credit scores based on property addresses and multiple economic factors.
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-TK9FyyklD-predictive-credit-score-checker" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Use Predictor
                </a>
              </li>
              <li>
                <a 
                  href="https://propertydatafindergpt.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Real Estate Suite
                </a>
              </li>
              <li>
                <a 
                  href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Insurance Suite
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-12 md:col-span-4">
            <h4 className="text-white font-semibold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:(475) 800-8096"
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-neon-cyan" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-neon-cyan" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a
                href="https://www.aiwebtools.ai"
                className="inline-flex items-center px-5 py-2.5 rounded-full glass text-white font-medium transition-all duration-300 hover:bg-white/10"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        {/* Disclaimer section */}
        <div id="disclaimer" className="glass-card p-8 rounded-xl mb-16">
          <h3 className="text-xl font-semibold text-white mb-4">Legal Disclaimer</h3>
          
          <div className="text-gray-400 text-sm space-y-4 max-w-4xl">
            <p>
              The Predictive Credit Score Checker provides estimates and predictions based on publicly available data and statistical models. These predictions are not guaranteed to be accurate and should not be relied upon for making financial or credit decisions.
            </p>
            <p>
              The tool does not access personal credit information or credit history and is not a substitute for official credit reports or scores from authorized credit reporting agencies. The predicted credit scores are purely educational and informational in nature.
            </p>
            <p>
              Predictions are based on multiple factors including but not limited to location demographics, economic indicators, property values, and regional credit patterns. Individual credit scores are influenced by numerous personal factors that this tool cannot account for.
            </p>
            <p>
              AI WEB TOOLS LLC makes no warranties, express or implied, regarding the accuracy, reliability, or completeness of any predictions or information provided by the Predictive Credit Score Checker. By using this tool, you acknowledge and accept these limitations.
            </p>
            <p>
              This tool is powered by GPT-4o technology and may contain errors or inaccuracies. Always consult with qualified financial professionals before making any credit-related decisions.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <Separator className="mb-6 bg-white/5" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-neon-cyan">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex items-center">
            <a href="https://www.aiwebtools.ai" className="text-gray-400 text-sm hover:text-neon-cyan transition-colors">
              Visit AiWebTools.Ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, SearchX } from "lucide-react";
import BackgroundEffect from "../components/BackgroundEffect";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      <BackgroundEffect />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="glass-card p-10 rounded-2xl max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-dark-lighter flex items-center justify-center mx-auto mb-6">
            <SearchX className="w-10 h-10 text-neon-pink" />
          </div>
          
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-xl text-gray-300 mb-6">Page not found</p>
          <p className="text-gray-400 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

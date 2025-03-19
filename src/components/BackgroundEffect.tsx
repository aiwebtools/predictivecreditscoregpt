
import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      color: string;
      alpha: number;
      pulse: number;
    }> = [];
    
    // Create stars
    const createStars = () => {
      const starCount = Math.floor(canvas.width * canvas.height / 10000);
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        const speed = Math.random() * 0.05 + 0.01;
        
        // Different star colors with neon effect
        const colors = [
          'rgba(0, 255, 255, 0.8)', // Cyan
          'rgba(155, 135, 245, 0.8)', // Purple
          'rgba(255, 61, 138, 0.8)', // Pink
          'rgba(31, 206, 255, 0.8)', // Blue
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const alpha = Math.random() * 0.5 + 0.5;
        const pulse = Math.random() * 0.02 + 0.01;
        
        stars.push({
          x,
          y,
          size,
          speed,
          color,
          alpha,
          pulse,
        });
      }
    };
    
    createStars();
    
    // Draw stars with animation
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(8, 12, 20, 1)');
      gradient.addColorStop(1, 'rgba(16, 22, 34, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        
        // Pulsating effect
        star.alpha += Math.sin(Date.now() * star.pulse) * 0.005;
        star.alpha = Math.max(0.5, Math.min(1, star.alpha));
        
        // Moving effect
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw star with glow
        const glow = ctx.createRadialGradient(
          star.x, 
          star.y, 
          0, 
          star.x, 
          star.y, 
          star.size * 2
        );
        
        glow.addColorStop(0, star.color);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = glow;
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw star center
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Add subtle nebula effect
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 100 + 50;
        
        const nebula = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const nebulaColors = [
          'rgba(155, 135, 245, 0.03)',
          'rgba(31, 206, 255, 0.02)',
          'rgba(255, 61, 138, 0.025)',
        ];
        
        nebula.addColorStop(0, nebulaColors[i]);
        nebula.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundEffect;

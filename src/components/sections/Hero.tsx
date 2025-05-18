import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: { x: number; y: number; radius: number; dx: number; dy: number; color: string }[] = [];
    
    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 50 : 100;
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = (Math.random() - 0.5) * 0.5;
        const color = Math.random() > 0.5 ? 'rgba(108, 99, 255, 0.5)' : 'rgba(0, 201, 167, 0.5)';
        
        particles.push({ x, y, radius, dx, dy, color });
      }
    };
    
    const animateParticles = () => {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        p.x += p.dx;
        p.y += p.dy;
        
        if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
          p.dx = -p.dx;
        }
        
        if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
          p.dy = -p.dy;
        }
      }
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    createParticles();
    animateParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <canvas id="particles" className="absolute inset-0 z-0"></canvas>
      
      <div className="absolute inset-0 z-0 grid-bg opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-inter text-base sm:text-lg md:text-xl mb-4 reveal">
            Hello, I am
          </p>
          
          <h1 ref={headlineRef} className="heading-primary mb-6 reveal">
            <span className="typing-animation">
              <span className="md:hidden">Arindra Rifky</span>
              <span className="hidden md:inline">Arindra Rifky Saputra</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 reveal">
            Mobile Developer & UI/UX Designer based in Semarang, Indonesia.
          </p>
          
          <div className="flex justify-center gap-3 sm:gap-4 reveal">
            <a 
              href="https://github.com/user-attachments/files/20266378/CV-UNIVERSAL-EN.pdf" 
              className="btn btn-primary flex items-center gap-1.5 sm:gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
              <Download size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="btn btn-secondary flex items-center gap-1.5 sm:gap-2 group">
              Let's Connect
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-neutral-400 text-xs sm:text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <span className="animate-bounce mt-2 block w-1 h-1 bg-primary rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
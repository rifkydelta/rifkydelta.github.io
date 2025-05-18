import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateProgress = () => {
      // Calculate how much the user has scrolled through the page
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', updateProgress);
    
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);
  
  return (
    <div 
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
    ></div>
  );
};

export default ScrollProgress;
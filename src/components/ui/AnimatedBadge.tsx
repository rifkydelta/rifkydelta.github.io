import React from 'react';

interface AnimatedBadgeProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  delay?: number;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ icon, label, description, delay = 0 }) => {
  return (
    <div 
      className="glass rounded-lg p-4 hover:border-primary/50 transition-all hover:scale-105 reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center">
        <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
          {icon}
        </div>
        <div>
          <p className="font-medium text-white">{label}</p>
          <p className="text-sm text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBadge;
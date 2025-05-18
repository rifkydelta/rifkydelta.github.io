import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  delay?: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index, delay = 0 }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`relative flex flex-col md:flex-row items-start reveal`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-neutral-800 border-4 border-primary rounded-full z-10 flex items-center justify-center">
        <Briefcase size={14} className="text-primary" />
      </div>
      
      {/* Content */}
      <div 
        className={`pl-16 md:pl-0 ${
          isEven 
            ? 'md:pr-12 md:text-right md:items-end md:self-end md:w-1/2' 
            : 'md:pl-12 md:w-1/2 md:ml-auto'
        }`}
      >
        <div className="glass p-6 rounded-xl hover:border-primary/50 transition-all">
          <div className={`flex flex-col ${isEven ? 'md:items-end' : ''}`}>
            <span className="text-sm text-primary font-medium">{experience.period}</span>
            <h3 className="text-xl font-semibold mt-1 mb-1">{experience.title}</h3>
            <p className="text-neutral-400">{experience.company}</p>
          </div>
          
          <p className="mt-4 text-neutral-300">{experience.description}</p>
          
          {/* Skills tags */}
          <div className={`mt-4 flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
            {experience.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
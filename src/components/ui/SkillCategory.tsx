import React from 'react';

interface SkillCategoryProps {
  category: {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    skills: string[];
  };
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, delay = 0 }) => {
  return (
    <div 
      className="card hover:transform hover:scale-[1.02] transition-all reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      
      {/* Skills list */}
      <ul className="space-y-3">
        {category.skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
            <span className="text-neutral-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
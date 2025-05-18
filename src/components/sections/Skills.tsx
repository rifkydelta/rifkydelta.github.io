import React from 'react';
import { Code, Smartphone, Layers, Database, GitBranch, PenTool } from 'lucide-react';
import SkillCategory from '../ui/SkillCategory';

// Skill data
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <Code size={24} />,
    color: 'from-blue-500 to-purple-500',
    skills: ['Kotlin', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS']
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: <Smartphone size={24} />,
    color: 'from-primary to-primary-light',
    skills: ['Android Studio', 'SOLID Principles', 'ML Integration', 'Flutter', 'Firebase']
  },
  {
    id: 'ux',
    title: 'UI/UX Design',
    icon: <Layers size={24} />,
    color: 'from-secondary to-secondary-light',
    skills: ['Figma', 'Wireframing', 'User Research', 'Prototyping', 'UX Optimization']
  },
  {
    id: 'graphics',
    title: 'Graphic Design',
    icon: <PenTool size={24} />,
    color: 'from-pink-500 to-rose-500',
    skills: ['Photoshop', 'Illustrator', 'Canva', 'Motion Graphics', 'Brand Identity']
  },
  {
    id: 'version',
    title: 'Version Control',
    icon: <GitBranch size={24} />,
    color: 'from-amber-500 to-orange-500',
    skills: ['Git', 'GitHub', 'Collaborative Workflow', 'Code Review']
  },
  {
    id: 'methods',
    title: 'Methodologies',
    icon: <Database size={24} />,
    color: 'from-green-500 to-emerald-500',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Problem Solving', 'Critical Thinking']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-neutral-900 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary reveal">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto reveal">
            My professional toolkit spans development, design, and methodologies. 
            These are the technologies and skills I've mastered through education, work experience, and personal projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.id}
              category={category}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
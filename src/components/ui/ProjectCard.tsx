import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  role: string;
  techStack: string[];
  tags: string[];
  link: string;
  github: string | null;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card group w-full md:w-[350px] lg:w-[400px] flex-shrink-0 overflow-hidden">
      {/* Project image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <div>
            <span className="text-xs text-neutral-400">{project.role}</span>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-neutral-300">{project.subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Project details */}
      <div>
        <p className="text-neutral-300 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tech stack */}
        <div className="mb-4">
          <h4 className="text-sm text-neutral-400 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex space-x-4">
            {project.github && (
              <a 
                href={project.github}
                className="text-neutral-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                className="text-neutral-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live project`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          {/* Tags */}
          <div className="flex space-x-2">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
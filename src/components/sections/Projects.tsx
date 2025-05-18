import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';

// Project data
const projects = [
  {
    id: 1,
    title: "RempahRia",
    subtitle: "Real-Time Spice Identifier",
    description: "Developed a mobile app using smartphone camera and machine learning to identify spices in real-time. Designed for cooking enthusiasts, the app provides recipe inspiration and market assistance.",
    image: "https://media.licdn.com/dms/image/v2/D562DAQEInnQ03mfZww/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1718949719759?e=1748080800&v=beta&t=jbkwYspaiAt6TpStWeEGcruqs5fMWqmKdl5M9TrWrIc",
    role: "Android Developer / UI/UX Designer",
    techStack: ["Kotlin", "Android Studio", "VGG16", "TensorFlow Lite"],
    tags: ["Android", "AI", "ML"],
    link: null,
    github: "https://github.com/rifkydelta/RempahRia",
  },
  {
    id: 2,
    title: "Niagahoster",
    subtitle: "Checkout UX Redesign",
    description: "Redesigned the checkout process for a major hosting provider, optimizing the UX flow and increasing conversion rates by 23%. Implemented A/B testing methodologies to validate design decisions.",
    image: "https://cdn.dribbble.com/userupload/11730288/file/original-560f003196226c516a98002f880927d1.png?resize=1024x728&vertical=center",
    role: "UI/UX Designer / UX Researcher",
    techStack: ["Figma", "Adobe XD", "Hotjar", "Optimal Workshop"],
    tags: ["UX", "Design", "Internship"],
    link: "https://dribbble.com/shots/23173730-Payment-proccess-Niagahoster",
    github: null,
  },
  {
    id: 3,
    title: "FundEx",
    subtitle: "Social Media Campaign",
    description: "Created a comprehensive social media campaign for an investment platform, including visual assets, animated posts, and educational content targeted at young investors.",
    image: "https://media.licdn.com/dms/image/v2/D562DAQH6CFJXnnuc2Q/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1693547311060?e=1748476800&v=beta&t=2xKhdW7Rm3yCMWOa_cq_miEwik1VYEmttzq60P6qNKI",
    role: "Graphic Designer / Content Creator",
    techStack: ["Photoshop", "Illustrator", "After Effects", "Canva"],
    tags: ["Design", "Social Media", "Internship"],
    link: "https://www.linkedin.com/in/arindra-rifky-saputra/overlay/1635539129467/single-media-viewer/?profileId=ACoAADSvWQMB9zM1-4z9yAvXE4E_wODyyaequd4",
    github: null,
  },,
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects by tag
  const filteredProjects = activeTag 
    ? projects.filter(project => project.tags.includes(activeTag))
    : projects;
  
  // Scroll the slider
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="heading-secondary mb-4 reveal">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl reveal">
              A showcase of my work across mobile development, UI/UX design, and graphic design.
              Each project represents a unique challenge and solution.
            </p>
          </div>
          
          {/* Desktop Navigation arrows */}
          <div className="hidden md:flex space-x-4 mt-8 md:mt-0 reveal">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-8 reveal">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTag === null 
                ? 'bg-primary text-white' 
                : 'bg-surface text-neutral-400 hover:text-white'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === tag 
                  ? 'bg-primary text-white' 
                  : 'bg-surface text-neutral-400 hover:text-white'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
        
        {/* Project cards - horizontal scrollable for desktop, vertical for mobile */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar md:pb-4 lg:-mx-4 reveal"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="flex items-center justify-center w-full py-20">
                <p className="text-neutral-500 text-lg">No projects found with this tag.</p>
              </div>
            )}
          </div>
          
          {/* Mobile navigation arrows */}
          <div className="flex justify-center space-x-4 mt-4 md:hidden">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* GitHub link */}
        <div className="flex justify-center mt-12 reveal">
          <a 
            href="https://github.com/rifkydelta/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn btn-secondary"
          >
            <Github size={18} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
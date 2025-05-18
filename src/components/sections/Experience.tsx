import React from 'react';
import ExperienceItem from '../ui/ExperienceItem';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Event Staff',
    company: 'Santos Production',
    period: '2024–Present',
    description: 'Assist in event setup and breakdown, maintain safe environment, collaborate with team members for successful event execution, and follow established protocols for smooth operations.',
    skills: ['Event Management', 'Customer Service', 'Team Collaboration'],
  },
  {
    id: 2,
    title: 'Chairperson',
    company: 'BP2M UNNES',
    period: '2024–2025',
    description: 'Led 40+ members, restructured publication workflow, increased social media engagement by 35%, and managed cross-departmental collaboration.',
    skills: ['Leadership', 'Project Management', 'Strategic Planning'],
  },
  {
    id: 3,
    title: 'Android Developer',
    company: 'Bangkit Academy',
    period: '2024',
    description: 'Completed 490+ hours of technical training, collaborated on ML-powered Android applications, and participated in capstone project developing image recognition for Indonesian spices.',
    skills: ['Kotlin', 'ML Integration', 'API Development'],
  },
  {
    id: 4,
    title: 'Head of Artistic Division',
    company: 'BP2M UNNES',
    period: '2023–2024',
    description: 'Designed visual assets for campus media, streamlined design workflow for 10+ team members, and established brand guidelines.',
    skills: ['Team Leadership', 'Creative Direction', 'Brand Identity'],
  },
  {
    id: 5,
    title: 'UI/UX Intern',
    company: 'Niagahoster',
    period: '2023',
    description: 'Optimized checkout funnel based on user behavior analytics, resulting in 23% conversion increase. Conducted usability tests and implemented design improvements.',
    skills: ['UI/UX Design', 'User Research', 'Conversion Optimization'],
  },
  {
    id: 6,
    title: 'Graphic Design Intern',
    company: 'FundEx',
    period: '2022',
    description: 'Designed investment slides for social campaigns, created cohesive visual identity for product launch, and produced educational content for investors.',
    skills: ['Graphic Design', 'Social Media', 'Visual Storytelling'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-neutral-900 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary reveal">
            Work & <span className="text-gradient">Leadership</span> Experience
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto reveal">
            My professional journey spans leadership roles, technical positions, and creative contributions.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-px"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience} 
                index={index} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
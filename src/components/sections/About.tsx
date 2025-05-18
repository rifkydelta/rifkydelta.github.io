import React from 'react';
import { GraduationCap, Code, Palette, Clock } from 'lucide-react';
import AnimatedBadge from '../ui/AnimatedBadge';

const About = () => {
  return (
    <section id="about" className="section bg-neutral-900 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary reveal">
            Who <span className="text-gradient">Am I</span>?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile and info */}
          <div className="flex flex-col items-center reveal">
            {/* Profile image */}
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQEkQs8ABe_Ipg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709478662180?e=1752710400&v=beta&t=CFmIEshJQ2ImGw8HUWRBe4wxRoIEJoc8_EVKhBFU_BI" 
                    alt="Arindra Rifky Saputra" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-surface px-4 py-1.5 rounded-full text-sm font-medium text-primary border border-primary whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Available for Work
                </span>
              </div>
            </div>
            
            {/* Stats/badges */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <AnimatedBadge 
                icon={<Clock size={18} />}
                label="490+ hours"
                description="Android Training"
                delay={0}
              />
              <AnimatedBadge 
                icon={<GraduationCap size={18} />}
                label="UNNES"
                description="Education Background"
                delay={200}
              />
              <AnimatedBadge 
                icon={<Code size={18} />}
                label="Kotlin Expert"
                description="Mobile Development"
                delay={400}
              />
              <AnimatedBadge 
                icon={<Palette size={18} />}
                label="40+ projects"
                description="UI/UX Designs"
                delay={600}
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="reveal">
            <h3 className="heading-tertiary mb-6">Hi there, nice to meet you!</h3>
            
            <div className="space-y-4 text-neutral-300">
              <p>
                I'm <span className="text-white font-medium">Arindra Rifky Saputra</span>, a passionate student majoring in Japanese Language Education at Universitas Negeri Semarang, with extensive experience in mobile application development and user-centered design.
              </p>
              
              <p>
                I specialize in Android app development using Kotlin and love integrating AI/ML features to enhance digital experiences. My approach combines technical expertise with a deep understanding of user needs.
              </p>
              
              <p>
                Beyond coding, I have a background in graphic design and content creation through active roles in student media organizations. This multidisciplinary experience allows me to bring both technical and creative perspectives to every project.
              </p>
              
              <p>
                I'm constantly learning and exploring new technologies, with a particular interest in how mobile applications can solve real-world problems through intuitive design and innovative functionality.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#skills" className="btn btn-secondary">Explore Skills</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
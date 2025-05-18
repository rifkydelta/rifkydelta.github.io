import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
}

interface CertificationCardProps {
  certification: Certification;
  delay?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, delay = 0 }) => {
  return (
    <div 
      className="card group hover:transform hover:scale-[1.02] transition-all reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Certificate image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={certification.image} 
          alt={certification.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <div className="p-2 bg-primary rounded-full">
            <Award size={18} className="text-white" />
          </div>
        </div>
      </div>
      
      {/* Certificate details */}
      <div>
        <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {certification.title}
        </h3>
        <p className="text-neutral-400 mt-1">Issued by {certification.issuer}</p>
        <div className="flex justify-between items-center mt-3 text-sm text-neutral-500">
          <span>{certification.date}</span>
          <span>ID: {certification.credentialId}</span>
        </div>
        
        {/* View certificate link */}
        <a 
          href="#" 
          className="mt-4 flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors"
        >
          View Certificate <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
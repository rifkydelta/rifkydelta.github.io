import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Arindra's leadership and creativity make him an asset in both tech and design fields. His ability to understand complex problems and translate them into user-friendly solutions is remarkable.",
    name: "Dr. Widodo",
    position: "Mentor, Bangkit Academy",
    avatar: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 2,
    text: "Working with Arindra on our mobile app project was a fantastic experience. His technical knowledge combined with his eye for design helped us create a product that exceeded our expectations.",
    name: "Sinta Dewi",
    position: "Product Manager, Niagahoster",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 3,
    text: "Arindra consistently delivered high-quality graphic designs that perfectly captured our brand's essence. His attention to detail and ability to meet tight deadlines made him invaluable to our team.",
    name: "Rahmat Hidayat",
    position: "Marketing Director, FundEx",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Generate stars for rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-secondary reveal">
            What <span className="text-gradient">Others Say</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto reveal">
            Feedback from mentors, collaborators, and clients who have worked with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div className="glass rounded-2xl p-6 md:p-10 relative reveal">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-primary/20">
              <Quote size={64} />
            </div>
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {renderStars(currentTestimonial.rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl italic text-neutral-200 mb-8">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{currentTestimonial.name}</p>
                  <p className="text-neutral-400">{currentTestimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8 reveal">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === i ? 'bg-primary' : 'bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-surface hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
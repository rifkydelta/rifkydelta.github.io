import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to URL-encoded string matching the spreadsheet headers
    const data = new URLSearchParams();
    data.append('Name', formData.get('name')?.toString() || '');
    data.append('Email', formData.get('email')?.toString() || '');
    data.append('Subject', formData.get('subject')?.toString() || '');
    data.append('Message', formData.get('message')?.toString() || '');
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzuZdpoHltxr9yykGKIrlItmVI0Prze-N-6EgBzS5dxnBR2pGm0PLNG45vhXrS_BfBW/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      setFormStatus('success');
      form.reset();
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again later. If the problem persists, please contact me directly via email.');
      
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section bg-neutral-900 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="heading-secondary reveal">
            Let's Build Something <span className="text-gradient">Awesome</span> Together
          </h2>
          <p className="text-neutral-400 mx-auto max-w-2xl reveal">
            Have a project in mind or want to discuss opportunities? I'm always open to new connections and exciting collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact information */}
          <div className="lg:col-span-2 reveal">
            <div className="space-y-8">
              <div className="bg-surface rounded-xl p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:andrarifky26@gmail.com" 
                      className="text-neutral-300 hover:text-primary transition-colors"
                    >
                      andrarifky26@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface rounded-xl p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-neutral-300">
                      Semarang, Indonesia
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface rounded-xl p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500 mr-4">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/arindra-rifky-saputra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-300 hover:text-blue-500 transition-colors"
                    >
                      Arindra Rifky Saputra
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-6 md:p-8">
              <h3 className="heading-tertiary mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={formStatus !== 'idle'}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-70"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={formStatus !== 'idle'}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-70"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={formStatus !== 'idle'}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-70"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={formStatus !== 'idle'}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:opacity-70"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className={`w-full btn ${
                      formStatus === 'success' 
                        ? 'bg-success hover:bg-success-light text-white' 
                        : formStatus === 'error'
                        ? 'bg-error hover:bg-error-light text-white'
                        : 'btn-primary'
                    } flex items-center justify-center gap-2 disabled:opacity-70`}
                  >
                    {formStatus === 'idle' && (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        Sending...
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        Message Sent!
                        <CheckCircle size={18} />
                      </>
                    )}
                    {formStatus === 'error' && (
                      <>
                        Error
                        <AlertCircle size={18} />
                      </>
                    )}
                  </button>
                  
                  {/* Error message */}
                  {errorMessage && (
                    <p className="mt-2 text-sm text-error text-center">{errorMessage}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
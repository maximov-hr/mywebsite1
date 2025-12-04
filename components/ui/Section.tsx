import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 relative overflow-hidden ${dark ? 'bg-navy text-white' : 'bg-platinum text-graphite'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
      {/* Decorative subtle grid for "Expensive Minimalism" feel */}
      {!dark && (
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }} 
        />
      )}
    </section>
  );
};
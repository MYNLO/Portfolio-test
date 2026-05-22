import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  background = 'default' 
}) => {
  const backgroundClass = background === 'gradient' 
    ? 'bg-gradient-to-br from-blue-50 via-gray-50 to-slate-50' 
    : '';

  return (
    <section 
      id={id}
      className={`relative ${backgroundClass} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};
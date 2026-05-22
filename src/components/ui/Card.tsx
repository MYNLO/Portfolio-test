import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false
}) => {
  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' 
    : '';

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
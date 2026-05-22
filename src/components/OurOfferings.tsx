'use client';

import React, { useRef } from 'react';
import { useAnimateOnScroll } from './animations/useAnimateOnScroll';
import { Section } from './ui/Section';

export const OurOfferings: React.FC = () => {
  const offeringsRef = useRef<HTMLDivElement>(null);

  useAnimateOnScroll(offeringsRef, {
    trigger: true,
    start: 'top 80%',
    end: 'bottom 20%',
    stagger: 0.1,
    opacity: 0,
    y: 30
  });

  const offerings = [
    {
      title: "Independent Perspective",
      description: "An independent perspective helps leaders see patterns and decisions more clearly.",
      icon: "🔍"
    },
    {
      title: "Disciplined Approach",
      description: "A disciplined approach ensures consistency, depth, and thoughtful progress over time.",
      icon: "📊"
    },
    {
      title: "Long-term Trust",
      description: "Long-term trust enables open dialogue, and meaningful leadership development.",
      icon: "🤝"
    }
  ];

  return (
    <Section id="offerings" className="section-padding bg-gradient-to-br from-blue-50 via-gray-50 to-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Our offerings
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Focused areas of expertise across strategy, leadership, and organizational decision-making.
        </p>
      </div>

      <div ref={offeringsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerings.map((offering, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-4xl mb-6">{offering.icon}</div>
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              {offering.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {offering.description}
            </p>
          </div>
        ))}
      </div>

      {/* Horizontal scroll section */}
      <div className="mt-16">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-8 text-center">
          Key Focus Areas
        </h3>
        <div className="flex overflow-x-auto pb-4 space-x-6 scrollbar-hide">
          {[
            "Strategic Planning & Execution",
            "Leadership Development", 
            "Organizational Design",
            "Change Management",
            "Executive Coaching",
            "Team Performance"
          ].map((area, index) => (
            <div 
              key={index}
              className="flex-shrink-0 bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 min-w-[200px]"
            >
              <p className="text-gray-700 font-medium text-center">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
'use client';

import React, { useRef } from 'react';
import { useAnimateOnScroll } from './animations/useAnimateOnScroll';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export const ValuePropositions: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useAnimateOnScroll(gridRef, {
    trigger: true,
    start: 'top 80%',
    end: 'bottom 20%',
    stagger: 0.1,
    opacity: 0,
    y: 30
  });

  const propositions = [
    {
      title: "Strategic decisions and advisory engagements contributing to measurable revenue impact across multi-market.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      alt: "Business strategy meeting"
    },
    {
      title: "A strong record of long-term engagements, reflecting trust, consistent value, and sustained collaboration.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      alt: "Strategy discussion"
    },
    {
      title: "Clear structure brings focus to leadership and challenges without unnecessary complexity.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
      alt: "Leadership focus"
    }
  ];

  return (
    <Section id="about" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Our approach
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Years of focused advisory experience supporting leaders through growth phases and high-stakes strategic decisions.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {propositions.map((proposition, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={proposition.image}
                alt={proposition.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {proposition.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
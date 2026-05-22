'use client';

import React, { useRef } from 'react';
import { useFadeInOnLoad } from './animations/useAnimateOnScroll';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Cast to satisfy the hook’s HTMLElement type
  useFadeInOnLoad(headlineRef as unknown as React.RefObject<HTMLElement>, 0, 0.8);
  // Cast to satisfy the hook’s HTMLElement type
  useFadeInOnLoad(subheadRef as unknown as React.RefObject<HTMLElement>, 0.3, 0.8);
  // Cast to satisfy the hook’s HTMLElement type
  useFadeInOnLoad(ctaRef as unknown as React.RefObject<HTMLElement>, 0.6, 0.8);

  return (
    <Section 
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      background="gradient"
    >
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-gray-50/20 to-slate-50/30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6"
        >
          For professional leaders
        </h1>

        {/* Subhead */}
        <p 
          ref={subheadRef}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Years of focused advisory experience supporting leaders through growth phases and high-stakes strategic decisions.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="flex justify-center">
          <Button 
            variant="primary" 
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Begin a partnership
          </Button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30"></div>
    </Section>
  );
};
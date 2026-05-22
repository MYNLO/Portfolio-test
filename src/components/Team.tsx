'use client';

import React, { useRef } from 'react';
import { useAnimateOnScroll } from './animations/useAnimateOnScroll';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useAnimateOnScroll(teamRef, {
    trigger: true,
    start: 'top 80%',
    end: 'bottom 20%',
    stagger: 0.1,
    opacity: 0,
    y: 30
  });

  const teamMembers = [
    {
      name: "Alex Thorne",
      role: "Strategic Advisory",
      bio: "Focused on strategic advisory and executive-level decision-making.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen", 
      role: "Organizational Design",
      bio: "Specializes in organizational design and leadership systems.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Wellington",
      role: "Leadership Development", 
      bio: "Works with executives on clarity, alignment, and leadership growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Elena Rodriguez",
      role: "Complex Strategy",
      bio: "Supports leaders in navigating complexity and long-term strategy.",
      image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <Section id="team" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Begin a partnership
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          A focused advisory team built on experience
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our team brings decades of combined experience in executive coaching, strategic planning, and organizational transformation. We partner with leaders to navigate complex challenges and drive sustainable growth.
        </p>
      </div>

      <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-slate-700 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50/50 to-slate-50/50 rounded-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            Ready to transform your leadership approach?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Connect with our team to discuss how we can support your strategic goals and leadership development needs.
          </p>
          <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Schedule a consultation
          </button>
        </div>
      </div>
    </Section>
  );
};
'use client';
import React, { useRef } from 'react';
import { useAnimateOnScroll } from './animations/useAnimateOnScroll';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useAnimateOnScroll(formRef, {
    trigger: true,
    start: 'top 80%',
    end: 'bottom 20%',
    stagger: 0.1,
    opacity: 0,
    y: 30,
  });

  return (
    <Section id="contact" className="section-padding bg-gradient-to-br from-blue-50 via-gray-50 to-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Ready to start a partnership? Fill out the short form and we’ll reach out.
        </p>
        <div ref={formRef}>
        <form          className="grid grid-cols-1 gap-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            // Placeholder submit – in real app integrate with backend
            alert('Form submitted (placeholder)');
          }}
        >
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-slate-700"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-slate-700"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-slate-700"
            />
          </label>
          <div className="flex justify-center mt-4">
            <Button type="submit" variant="primary" size="lg" className="px-8 py-3">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  trigger?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  opacity?: number;
  y?: number;
}

export const useAnimateOnScroll = (
  ref: React.RefObject<HTMLElement>,
  options: AnimationOptions = {}
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      trigger = true,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      duration = 0.8,
      delay = 0,
      stagger,
      ease = 'power2.out',
      opacity = 0,
      y = 30
    } = options;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Skip animation, ensure element is visible
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }
    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (scrub) {
          ScrollTrigger.create({
            trigger: element,
            start,
            end,
            scrub: true,
            animation: timeline
          });
        }
      }
    });

    if (stagger && element.children) {
      gsap.fromTo(
        element.children,
        { opacity, y },
        { 
          opacity: 1, 
          y: 0, 
          duration, 
          delay, 
          ease,
          stagger: stagger * 1000
        }
      );
    } else {
      timeline.fromTo(
        element,
        { opacity, y },
        { opacity: 1, y: 0, duration, delay, ease }
      );
    }

    if (trigger && !scrub) {
      ScrollTrigger.create({
        trigger: element,
        start,
        end,
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.reverse(),
        onEnterBack: () => timeline.play()
      });
    }

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, options]);
};

export const useFadeInOnLoad = (
  ref: React.RefObject<HTMLElement>,
  delay = 0,
  duration = 0.8
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration, 
        delay,
        ease: 'power2.out'
      }
    );

    return () => {
      gsap.killTweensOf(element);
    };
  }, [ref, delay, duration]);
};
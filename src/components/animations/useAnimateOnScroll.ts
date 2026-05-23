'use client';
import { useEffect, useRef } from 'react';
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

export const useAnimateOnScroll = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: AnimationOptions = {}
) => {
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

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
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    const timeline = gsap.timeline({ paused: true });

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
          stagger
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
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: element,
        start,
        end,
        onEnter: () => timeline.play(),
        onLeaveBack: () => timeline.progress(0).pause(),
      });
    }

    return () => {
      timeline.kill();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [ref, options]);
};

export const useFadeInOnLoad = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  delay = 0,
  duration = 0.8
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.fromTo(
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
      tween.kill();
    };
  }, [ref, delay, duration]);
};

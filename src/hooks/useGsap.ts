import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (selector: string, options?: gsap.TweenVars) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          ...options,
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [selector]);
};

export const useStaggerReveal = (containerSelector: string, childSelector: string, stagger = 0.1) => {
  useEffect(() => {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach((container) => {
      const children = container.querySelectorAll(childSelector);
      gsap.fromTo(
        children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [containerSelector, childSelector, stagger]);
};

export const useParallax = (selector: string, speed = 0.3) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [selector, speed]);
};

export { gsap, ScrollTrigger };

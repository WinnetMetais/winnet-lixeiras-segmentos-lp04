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

/**
 * Premium magnetic hover effect for cards
 */
export const useMagneticHover = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const handlers: Array<{ el: Element; move: (e: MouseEvent) => void; leave: () => void }> = [];

    elements.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.08, y: y * 0.08, duration: 0.4, ease: "power2.out" });
      };
      const leave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      };
      (el as HTMLElement).addEventListener("mousemove", move);
      (el as HTMLElement).addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        (el as HTMLElement).removeEventListener("mousemove", move);
        (el as HTMLElement).removeEventListener("mouseleave", leave);
      });
    };
  }, [selector]);
};

/**
 * Text split reveal animation
 */
export const useSplitReveal = (ref: React.RefObject<HTMLElement | null>, selector: string) => {
  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(selector);

    elements.forEach((el) => {
      const text = el.textContent || "";
      const words = text.split(" ");
      el.innerHTML = words.map((w) => `<span class="inline-block overflow-hidden"><span class="split-word inline-block">${w}</span></span>`).join(" ");

      const wordSpans = el.querySelectorAll(".split-word");
      gsap.fromTo(
        wordSpans,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [selector]);
};

export { gsap, ScrollTrigger };

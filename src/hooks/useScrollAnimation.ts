import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  /** Map of container CSS class to child selector + stagger delay */
  staggerChildren?: Record<string, { selector: string; delay: number }>;
}

/**
 * Custom hook to observe elements and add 'visible'/'animate' classes
 * when they scroll into view. Replaces the duplicated IntersectionObserver
 * pattern found across all page components.
 */
export function useScrollAnimation(
  selectors: string[],
  options: ScrollAnimationOptions = {}
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      staggerChildren = {},
    } = options;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('visible', 'animate');

          // Check if this element has staggered children
          for (const [containerClass, config] of Object.entries(staggerChildren)) {
            if (entry.target.classList.contains(containerClass)) {
              const children = entry.target.querySelectorAll(config.selector);
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate');
                }, index * config.delay);
              });
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observe all matching elements
    const elements: Element[] = [];
    for (const selector of selectors) {
      // Support both ID selectors (#id) and class/query selectors
      const els = selector.startsWith('#')
        ? [document.getElementById(selector.slice(1))].filter(Boolean)
        : Array.from(document.querySelectorAll(selector));

      els.forEach((el) => {
        if (el) {
          observerRef.current!.observe(el);
          elements.push(el);
        }
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

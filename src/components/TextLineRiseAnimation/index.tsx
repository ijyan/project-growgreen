import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface LineRiseAnimationProps {
  text: string; // 텍스트 줄 배열
  delay?: number;
}

function Index({ text, delay = 0 }: LineRiseAnimationProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay,
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top top',
            end: 'bottom top',
            toggleActions: 'play none none none',
            markers: false,
          },
        },
      );
    }
  }, [text, delay]);

  return <div ref={lineRef}>{text}</div>;
}

export default Index;

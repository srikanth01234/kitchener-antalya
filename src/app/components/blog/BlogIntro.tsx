"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function BlogIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className={`relative w-full py-20 lg:py-28 bg-[#faf6f0] overflow-hidden transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      
      {/* Background Decorative Sketches */}
      <div className="absolute top-10 left-[-5%] w-[30%] pointer-events-none text-[#c5a880] select-none scroll-reveal-skyline">
        {/* Placeholder SVG for Minaret sketch */}
        <svg viewBox="0 0 200 400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
          <path d="M100 0 L110 50 L110 100 C130 110 130 130 110 140 L110 200 C130 210 130 230 110 240 L110 350 L140 400 L60 400 L90 350 L90 240 C70 230 70 210 90 200 L90 140 C70 130 70 110 90 100 L90 50 Z" />
          <path d="M100 0 L100 50 M90 100 L110 100 M90 140 L110 140 M90 200 L110 200 M90 240 L110 240 M80 350 L120 350" />
          <circle cx="100" cy="80" r="10" />
        </svg>
      </div>

      <div className="absolute top-20 right-[-5%] w-[25%] pointer-events-none text-[#c5a880] select-none scroll-reveal-skyline" style={{ transitionDelay: '150ms' }}>
        {/* Placeholder SVG for Teapot sketch */}
        <svg viewBox="0 0 300 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
          <path d="M200 150 C250 150 280 120 250 80 C230 50 200 50 180 60" />
          <path d="M100 150 C50 150 20 120 50 80 C70 50 100 50 120 60" />
          <ellipse cx="150" cy="150" rx="60" ry="30" />
          <path d="M120 120 C120 50 180 50 180 120" />
          <path d="M140 40 L160 40 L155 30 L145 30 Z" />
          <path d="M130 120 L170 120" />
          <path d="M120 150 L180 150" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="flex items-center gap-3 text-[#c5a880] font-bold tracking-[3px] text-[11px] uppercase mb-6 scroll-reveal-fade-up">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 22h20L12 2z" />
          </svg>
          <span>Antalya</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
        </div>
        
        {/* Decorative line */}
        <div className="flex items-center gap-2 mb-8 scroll-reveal-fade-up" style={{ transitionDelay: '150ms' }}>
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/70 rotate-45"></div>
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-[#2d2219] font-medium leading-[1.2] tracking-tight mb-8 scroll-reveal-fade-up" style={{ transitionDelay: '300ms' }}>
          Stories Crafted Through <br className="hidden md:block"/>
          <span className="text-[#e10613]">Flavor & Celebration</span>
        </h2>

        {/* Paragraph */}
        <p className="text-[#2d2219] text-[14px] md:text-[15px] leading-relaxed max-w-[600px] mx-auto font-medium scroll-reveal-fade-up" style={{ transitionDelay: '450ms' }}>
          Discover how Antalya brings Turkish heritage to your table through our catering. 
          From handcrafted mezze and slow-grilled kebabs to the warmth of Turkish hospitality, 
          we create dining moments that tell stories — making every event memorable and meaningful.
        </p>

      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function GalleryIntro() {
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
      className={`w-full bg-[#faf6f0] py-16 md:py-24 px-6 md:px-12 relative transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Top Brand Icon */}
        <div className="flex flex-col items-center mb-6 scroll-reveal-fade-up">
          <div className="flex items-center gap-3 text-[#c5a880] mb-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2z" />
            </svg>
            <span className="font-sans text-[10px] font-black tracking-[3px] uppercase">Antalya</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2z" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] rotate-45"></div>
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
          </div>
        </div>

        {/* Heading */}
        <h2 
          className="font-serif text-4xl md:text-5xl text-[#2d2219] font-medium leading-[1.2] mb-6 tracking-tight scroll-reveal-fade-up"
          style={{ transitionDelay: '150ms' }}
        >
          A Visual Journey Through <br className="hidden md:block" />
          <span className="text-[#e10613]">Authentic</span> Turkish Dining
        </h2>

        {/* Small Decorative Separator */}
        <div 
          className="w-6 h-6 mb-6 text-[#c5a880] opacity-60 scroll-reveal-fade-up"
          style={{ transitionDelay: '300ms' }}
        >
           <svg viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
           </svg>
        </div>

        {/* Paragraph */}
        <p 
          className="text-[#2d2219]/70 text-[14px] md:text-[15px] leading-relaxed max-w-[650px] mx-auto mb-12 scroll-reveal-fade-up"
          style={{ transitionDelay: '450ms' }}
        >
          Explore our gallery that captures the flavours, artistry, and elegance of Antalya. From charcoal-grilled kebabs to handcrafted baklava and vibrant interiors, every image reflects our passion for culinary excellence and warm Turkish hospitality.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <button 
            className="bg-[#e10613] text-white px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[2px] uppercase shadow-md transition-all hover:bg-[#c00510] scroll-reveal-fade-up"
            style={{ transitionDelay: '550ms' }}
          >
            All
          </button>
          <button 
            className="bg-transparent border border-[#c5a880]/40 text-[#2d2219]/70 hover:border-[#e10613] hover:text-[#e10613] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[2px] uppercase transition-all scroll-reveal-fade-up"
            style={{ transitionDelay: '650ms' }}
          >
            Food
          </button>
          <button 
            className="bg-transparent border border-[#c5a880]/40 text-[#2d2219]/70 hover:border-[#e10613] hover:text-[#e10613] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[2px] uppercase transition-all scroll-reveal-fade-up"
            style={{ transitionDelay: '750ms' }}
          >
            Interior
          </button>
          <button 
            className="bg-transparent border border-[#c5a880]/40 text-[#2d2219]/70 hover:border-[#e10613] hover:text-[#e10613] px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[2px] uppercase transition-all scroll-reveal-fade-up"
            style={{ transitionDelay: '850ms' }}
          >
            Experience
          </button>
        </div>

      </div>

    </section>
  );
}

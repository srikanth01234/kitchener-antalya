"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function BlogCTA() {
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
      className={`w-full bg-[#faf6f0] py-16 px-6 md:px-12 transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-[1300px] mx-auto bg-[#1a120b] rounded-xl overflow-hidden shadow-2xl relative flex flex-col lg:flex-row items-center">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col items-start">
          
          {/* Eyebrow */}
          <span className="text-[#c5a880] font-bold tracking-[3px] text-[10px] uppercase mb-4 scroll-reveal-fade-up">
            Stay Inspired
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl text-white font-medium leading-[1.2] mb-6 scroll-reveal-fade-up" style={{ transitionDelay: '150ms' }}>
            More Stories. <br className="hidden md:block"/>
            More Flavors.
          </h2>

          {/* Paragraph */}
          <p className="text-white/90 text-[14px] leading-relaxed mb-10 max-w-sm scroll-reveal-fade-up" style={{ transitionDelay: '300ms' }}>
            Join us as we share traditions, behind-the-scenes moments, and the art of Turkish hospitality.
          </p>

          {/* Button */}
          <div className="scroll-reveal-fade-up" style={{ transitionDelay: '450ms' }}>
            <Link href="#" className="bg-[#e10613] hover:bg-[#c00510] text-white px-8 py-3.5 rounded-sm text-[11px] font-bold tracking-[2px] uppercase transition-colors flex items-center gap-3 shadow-md">
              Explore All Stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Right Images Collage */}
        <div className="relative z-10 w-full lg:w-1/2 h-[350px] md:h-[420px] lg:h-[480px] overflow-hidden flex items-end justify-center py-0 px-4">
          
          <div className="relative w-full max-w-[450px] h-full mt-8 lg:mt-0 lg:ml-auto lg:mr-20">
            
            {/* Image 1 (Left, rotated back) */}
            <div 
              className="absolute bottom-[20px] lg:bottom-[35px] left-[2%] lg:left-[-2%] w-[150px] md:w-[185px] lg:w-[200px] aspect-[3/4] border-4 border-white rounded-sm shadow-xl transform -rotate-6 z-10 hover:z-40 hover:scale-105 transition-all duration-300 scroll-reveal-grid-item"
              style={{ transitionDelay: '400ms' }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=600&auto=format&fit=crop" 
                 alt="Sweet Dessert" 
                 className="w-full h-full object-cover rounded-sm"
               />
            </div>

            {/* Image 2 (Center, front) */}
            <div 
              className="absolute bottom-[40px] lg:bottom-[60px] left-[26%] lg:left-[24%] w-[170px] md:w-[205px] lg:w-[220px] aspect-[3/4] border-4 border-white rounded-sm shadow-2xl transform rotate-3 z-30 hover:scale-105 transition-all duration-300 scroll-reveal-grid-item"
              style={{ transitionDelay: '600ms' }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" 
                 alt="Charcoal Grilling" 
                 className="w-full h-full object-cover rounded-sm"
               />
            </div>

            {/* Image 3 (Right, rotated forward) */}
            <div 
              className="absolute bottom-[10px] lg:bottom-[20px] right-[2%] lg:right-[-2%] w-[150px] md:w-[185px] lg:w-[200px] aspect-[3/4] border-4 border-white rounded-sm shadow-xl transform rotate-12 z-20 hover:z-40 hover:scale-105 transition-all duration-300 scroll-reveal-grid-item"
              style={{ transitionDelay: '800ms' }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop" 
                 alt="Turkish Table Spread" 
                 className="w-full h-full object-cover rounded-sm"
               />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

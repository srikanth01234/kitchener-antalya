"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function FeaturedStory() {
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
      className={`relative w-full py-16 bg-[#faf6f0] transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center relative">
        
        {/* Left Image Container */}
        <div 
          className="relative w-full lg:w-[60%] z-10 flex-shrink-0 scroll-reveal-grid-item"
          style={{ transitionDelay: '100ms' }}
        >
          
          {/* Red Tag Overlapping */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-[#e10613] text-white z-20 px-6 py-6 md:px-8 md:py-8 rounded-md shadow-lg flex flex-col items-center justify-center">
             <svg className="w-4 h-4 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
             </svg>
             <span className="text-[10px] font-bold tracking-[2px] uppercase text-center leading-tight">
               Featured<br/>Story
             </span>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop" 
              alt="Turkish Tea" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Content Card Container - Overlaps Image on Desktop */}
        <div 
          className="relative w-full lg:w-[45%] lg:-ml-24 z-20 mt-[-40px] lg:mt-0 px-4 md:px-0 scroll-reveal-grid-item"
          style={{ transitionDelay: '300ms' }}
        >
          
          <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-14 relative flex flex-col items-start border border-[#e5dacf]/30">
             
             {/* Category Tag */}
             <div className="flex items-center gap-2 text-[#e10613] font-bold tracking-[2px] text-[10px] uppercase mb-5">
               <svg className="w-4 h-4 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
               </svg>
               <span>Culture & Tradition</span>
             </div>

             {/* Title */}
             <h3 className="font-serif text-3xl md:text-4xl text-[#e10613] font-medium leading-[1.2] mb-4">
               The Art of <br/> Turkish Tea
             </h3>

             {/* Date */}
             <div className="flex items-center gap-2 text-[#2d2219]/85 text-xs font-semibold mb-6">
               <svg className="w-3.5 h-3.5 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
               <span>October 15, 2025</span>
             </div>

             {/* Excerpt */}
             <p className="text-[#2d2219]/90 text-[14px] leading-relaxed mb-8 max-w-[340px]">
               Explore Turkish tea culture — its history, brewing style, and the meaning behind this timeless tradition that brings people together.
             </p>

             {/* Link */}
             <Link href="#" className="flex items-center gap-2 text-[#e10613] font-bold tracking-[2px] text-[11px] uppercase hover:text-[#c00510] transition-colors">
               Read The Story
               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>

             {/* Right arrow button floating on edge */}
             <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#f0ebe4] text-[#2d2219]/40 hover:text-[#2d2219] hover:bg-[#e5dacf] transition-colors flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
             </button>

          </div>

        </div>

      </div>
    </section>
  );
}

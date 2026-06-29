"use client";

import React, { useEffect, useRef, useState } from 'react';

interface GalleryGridProps {
  selectedCategory: string;
}

const galleryItems = [
  { id: 1, src: "/gallery/images/left.webp", alt: "Restaurant Interior", category: "interior" },
  { id: 2, src: "/gallery/images/top-1.webp", alt: "Charcoal Grilling", category: "experience" },
  { id: 3, src: "/gallery/images/top-2.webp", alt: "Turkish Tea and Baklava", category: "food" },
  { id: 4, src: "/gallery/images/right.webp", alt: "Long Dining Table", category: "interior", isVideo: true },
  { id: 5, src: "/gallery/images/1.webp", alt: "Meze Spread", category: "food" },
  { id: 6, src: "/gallery/images/2.webp", alt: "Interior Plates", category: "interior" },
  { id: 7, src: "/gallery/images/3.webp", alt: "Chef Preparing Food", category: "experience" },
  { id: 8, src: "/gallery/images/4.webp", alt: "Baklava Dessert", category: "food" }
];

export default function GalleryGrid({ selectedCategory }: GalleryGridProps) {
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

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section 
      ref={containerRef}
      className={`w-full bg-[#faf6f0] pb-24 px-6 md:px-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {selectedCategory === "all" ? (
          /* Main Grid Container for 'all' (Complex Grid Layout) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[250px] lg:auto-rows-[300px]">
            
            {/* 1. Left Tall Image (Col 1-3, Row 1-2) */}
            <div className="lg:col-span-3 lg:row-span-2 rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item">
              <img 
                src="/gallery/images/left.webp" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>

            {/* 2. Middle Left Stack - Top Image (Col 4-6, Row 1) */}
            <div 
              className="lg:col-span-3 lg:row-span-1 rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
              style={{ transitionDelay: '100ms' }}
            >
              <img 
                src="/gallery/images/top-1.webp" 
                alt="Charcoal Grilling" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* 3. Middle Left Stack - Bottom Image (Col 4-6, Row 2) */}
            <div 
              className="lg:col-span-3 lg:row-span-1 rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
              style={{ transitionDelay: '200ms' }}
            >
              <img 
                src="/gallery/images/top-2.webp" 
                alt="Turkish Tea and Baklava" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* 4. Center Large Video (Col 7-9, Row 1-2) */}
            <div 
              className="lg:col-span-3 lg:row-span-2 rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
              style={{ transitionDelay: '300ms' }}
            >
              <img 
                src="/gallery/images/right.webp" 
                alt="Long Dining Table" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                   <svg className="w-6 h-6 text-[#2d2219] ml-1" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
              </div>
            </div>

            {/* 5. Right Side 2x2 Sub-Grid (Col 10-12, Row 1-2) */}
            <div className="lg:col-span-3 lg:row-span-2 grid grid-cols-2 grid-rows-2 gap-4 lg:gap-5">
              
              <div 
                className="rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
                style={{ transitionDelay: '400ms' }}
              >
                <img 
                  src="/gallery/images/1.webp" 
                  alt="Meze Spread" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div 
                className="rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
                style={{ transitionDelay: '500ms' }}
              >
                <img 
                  src="/gallery/images/2.webp" 
                  alt="Interior Plates" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div 
                className="rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
                style={{ transitionDelay: '600ms' }}
              >
                <img 
                  src="/gallery/images/3.webp" 
                  alt="Chef Preparing Food" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div 
                className="rounded-2xl overflow-hidden group relative shadow-md scroll-reveal-grid-item"
                style={{ transitionDelay: '700ms' }}
              >
                <img 
                  src="/gallery/images/4.webp" 
                  alt="Baklava Dessert" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

          </div>
        ) : (
          /* Filtered Category Uniform Grid Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="rounded-2xl overflow-hidden group relative shadow-md aspect-[4/3] scroll-reveal-grid-item"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {item.isVideo ? (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <svg className="w-6 h-6 text-[#2d2219] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Decorative Circular Badge ("CAPTURING THE ESSENCE") */}
        <div 
          className="hidden lg:flex absolute top-[40%] -right-16 w-28 h-28 bg-[#faf6f0] border-[1px] border-[#c5a880]/30 rounded-full items-center justify-center shadow-sm z-30 transform -translate-y-1/2 scroll-reveal-scale-in"
          style={{ transitionDelay: '800ms' }}
        >
           {/* Outer circular text (approximation using SVG textPath) */}
           <svg className="absolute inset-0 w-full h-full animate-spin-slow text-[#c5a880]" viewBox="0 0 100 100">
             <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
             <text className="text-[10.5px] font-bold tracking-[3px] uppercase fill-current">
               <textPath href="#circlePath" startOffset="0%">
                 CAPTURING THE ESSENCE •
               </textPath>
             </text>
           </svg>
           {/* Inner Camera Icon */}
           <div className="w-10 h-10 border border-[#c5a880] rounded-full flex items-center justify-center bg-white">
             <svg className="w-5 h-5 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
           </div>
        </div>

      </div>

    </section>
  );
}

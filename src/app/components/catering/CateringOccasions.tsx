"use client";

import React, { useEffect, useRef, useState } from "react";

interface OccasionItem {
  id: string;
  title: string;
  desc: string;
  points: string[];
  imgUrl: string;
  icon: React.ReactNode;
}

const occasions: OccasionItem[] = [
  {
    id: "01",
    title: "Corporate & Social Events",
    desc: "Elevate your corporate meetings, conferences, and social events with menus that leave a lasting impression.",
    points: ["Custom Menus", "Professional Service", "Memorable Experience"],
    imgUrl: "/catering/every-celebration/every-celebration-corporate.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .9-.74 1.6-1.6 1.6H5.35c-.9 0-1.6-.7-1.6-1.6V14.15m16.5 0c0-.9-.74-1.6-1.6-1.6H5.35c-.9 0-1.6.7-1.6 1.6m16.5 0V9.85c0-.9-.74-1.6-1.6-1.6H5.35c-.9 0-1.6.7-1.6 1.6m16.5 0a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v4.3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25V5.375a2.125 2.125 0 00-4.25 0V8.25m4.25 0h4.25" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Family Gatherings & Weddings",
    desc: "Celebrate life's special moments with authentic flavours and warm Turkish hospitality.",
    points: ["Made With Love", "Authentic Flavours", "Tailored For You"],
    imgUrl: "/catering/every-celebration/every-celebration-weddings.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v4.5m-2.25-2.25h4.5" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Birthday Parties & Baby Showers",
    desc: "Delicious menus crafted to make your celebrations joyful, flavourful, and truly unforgettable.",
    points: ["Creative Menus", "Joyful Moments", "Hassle Free Planning"],
    imgUrl: "/catering/every-celebration/every-celebration-birthdays.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75" />
      </svg>
    )
  }
];

export default function CateringOccasions() {
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
      { threshold: 0.05 }
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
      className="relative w-full py-24 lg:py-32 bg-[#faf6f0] overflow-hidden border-b border-[#e5dacf]/50 select-none"
    >
      
      {/* Background flourishes */}
      <div className={`absolute top-20 right-10 lg:right-40 opacity-10 pointer-events-none scale-150 transition-all duration-[2000ms] ease-out transform ${
        isVisible ? "opacity-10 rotate-[75deg]" : "opacity-0 rotate-0"
      }`}>
        <svg width="120" height="120" viewBox="0 0 24 24" className="fill-[#c5a880]">
          <path d="M12,2C12,2 4,6 4,13C4,17.41 7.59,21 12,22C16.41,21 20,17.41 20,13C20,6 12,2 12,2ZM12,19.9C8.75,18.96 6.08,15.93 6.08,13C6.08,8.23 10.37,4.89 12,3.84C13.63,4.89 17.92,8.23 17.92,13C17.92,15.93 15.25,18.96 12,19.9Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-24 flex flex-col items-center transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#c5a880]"></div>
            <span className="font-sans text-[#8a6538] text-xs font-extrabold tracking-[3px] uppercase">
              Perfect For
            </span>
            <div className="h-[1px] w-8 bg-[#c5a880]"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2d2219]">
            Every <span className="text-[#e10613] italic">Celebration</span>
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-6xl mx-auto">
          {occasions.map((item, index) => {
            const isImageLeft = index === 1;

            // Stagger direction: Odd slides from left (-translate-x), Even from right (translate-x)
            const slideInClass = isImageLeft
              ? (isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12")
              : (isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12");

            return (
              <div 
                key={item.id}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`flex flex-col lg:flex-row items-stretch bg-white rounded-[2rem] shadow-[0_15px_45px_-15px_rgba(45,34,25,0.06)] border border-[#e5dacf]/30 overflow-hidden relative min-h-[250px] transition-all duration-[1000ms] ease-out transform ${slideInClass}`}
              >
                
                {/* 1. SLANTED IMAGE SEGMENT (Alternating layout on desktop) */}
                {isImageLeft ? (
                  /* IMAGE ON LEFT (Row 2) */
                  <div className="w-full lg:w-[35%] h-64 lg:h-auto relative shrink-0">
                    <div className="absolute inset-0 lg:[clip-path:polygon(0_0,_100%_0,_85%_100%,_0_100%)] overflow-hidden bg-[#faf6f0]">
                      <img 
                        src={item.imgUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  </div>
                ) : null}

                {/* 2. TEXT & DETAILS SEGMENT */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between z-10 relative">
                  
                  {/* Top Line: Icon + Number + Vertical Divider + Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-4">
                    <div className="flex items-center gap-4 shrink-0">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-full bg-[#fdfaf5] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shadow-sm shrink-0">
                        {item.icon}
                      </div>

                      {/* Number */}
                      <span className="font-serif text-3xl text-[#e10613] leading-none shrink-0 select-none">
                        {item.id}
                      </span>
                    </div>

                    {/* Vertical Divider with diamond */}
                    <div className="hidden sm:flex h-10 w-[1px] bg-[#c5a880]/30 items-center justify-center shrink-0 relative">
                      <div className="w-1.5 h-1.5 bg-[#c5a880] rotate-45 absolute"></div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2d2219] font-medium leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#2d2219]/90 leading-relaxed mb-6 max-w-xl font-semibold">
                    {item.desc}
                  </p>

                  {/* Sub points */}
                  <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-[#e5dacf]/40 pt-5 mt-auto">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {/* Gold Checkmark */}
                        <div className="w-4 h-4 rounded-full bg-[#faf6f0] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shrink-0">
                          <svg className="w-2.5 h-2.5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="font-sans text-xs font-extrabold text-[#2d2219]">{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* 3. SLANTED IMAGE SEGMENT (Row 1 and Row 3 on right side) */}
                {!isImageLeft ? (
                  /* IMAGE ON RIGHT (Row 1, Row 3) */
                  <div className="w-full lg:w-[35%] h-64 lg:h-auto relative shrink-0">
                    <div className="absolute inset-0 lg:[clip-path:polygon(15%_0,_100%_0,_100%_100%,_0_100%)] overflow-hidden bg-[#faf6f0]">
                      <img 
                        src={item.imgUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                  </div>
                ) : null}

                {/* 4. BUTTON SEGMENT (Always far right on desktop) */}
                <div className="w-full lg:w-20 shrink-0 h-16 lg:h-auto flex items-center justify-center bg-[#faf6f0] border-t lg:border-t-0 lg:border-l border-[#e5dacf]/30 z-10 relative">
                  <a 
                    href="/contact" 
                    className="w-12 h-12 rounded-full border border-[#c5a880]/30 hover:bg-[#e10613]/10 hover:border-[#e10613] flex items-center justify-center text-[#e10613] hover:text-[#e10613] transition-all shadow-sm cursor-pointer"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

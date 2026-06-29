"use client";

import React, { useEffect, useRef, useState } from "react";

interface DetailCard {
  title: string;
  desc: string;
  imgUrl: string;
  icon: React.ReactNode;
}

const cards: DetailCard[] = [
  {
    title: "Fresh Ingredients",
    desc: "We source premium local ingredients from trusted suppliers to ensure unmatched freshness in every dish.",
    imgUrl: "/about/section-2/section-2-fresh-ingredients.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    )
  },
  {
    title: "Expert Chefs",
    desc: "Our culinary team brings decades of mastery in Turkish cuisine, crafting flavours with passion.",
    imgUrl: "/about/section-2/section-2-expert-chefs.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4v2h8V6a4 4 0 00-4-4zM6 8h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
      </svg>
    )
  },
  {
    title: "Authentic Recipes",
    desc: "Time-honoured family recipes preserved through generations bring true Turkish heritage to your plate.",
    imgUrl: "/about/section-2/section-2-authentic-recipes.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" />
      </svg>
    )
  }
];

export default function AboutDetails() {
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
      className={`relative w-full py-8 lg:py-10 bg-[#faf6f0] text-[#2d2219] overflow-hidden transition-all duration-700 ${isVisible ? "is-visible" : ""}`}
    >
      
      {/* SVG ClipPath Definition for the Scoop Notch */}
      <svg width="0" height="0" className="absolute pointer-events-none select-none">
        <defs>
          <clipPath id="scoopNotch" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.4,0 C 0.44,0.08 0.56,0.08 0.6,0 L 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[#fdfaf5] border border-[#e5dacf]/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full scroll-reveal-grid-item"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Top Text Details */}
              <div className="p-8 pb-4 flex flex-col items-center text-center">
                
                {/* Gold Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-white border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[#e10613] text-lg sm:text-xl font-bold tracking-wider uppercase mb-3">
                  {card.title}
                </h3>

                {/* Gold Diamond ornament */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[0.5px] w-4 bg-[#c5a880]/30"></div>
                  <div className="w-1 h-1 rotate-45 bg-[#c5a880]"></div>
                  <div className="h-[0.5px] w-4 bg-[#c5a880]/30"></div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#2d2219] leading-relaxed font-medium">
                  {card.desc}
                </p>

              </div>

              {/* Bottom Image with Scoop Notch */}
              <div className="w-full h-56 sm:h-64 overflow-hidden relative shrink-0">
                <div 
                  className="w-full h-full"
                  style={{ clipPath: "url(#scoopNotch)" }}
                >
                  <img 
                    src={card.imgUrl} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-95"
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

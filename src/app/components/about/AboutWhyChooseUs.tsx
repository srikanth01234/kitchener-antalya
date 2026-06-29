"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "CHARCOAL GRILLED PERFECTION",
    desc: "Rich, smoky flavours that bring out the best in every bite.",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 006.102 6.107L15.362 5.214z" />
      </svg>
    )
  },
  {
    title: "WARM HOSPITALITY",
    desc: "We treat every guest like family, creating memories that last.",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    title: "INSPIRED BY TRADITION",
    desc: "Rooted in heritage, refined for today – the true taste of Turkey.",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
      </svg>
    )
  },
  {
    title: "UNFORGETTABLE EXPERIENCES",
    desc: "Great food, beautiful ambiance, and moments you'll cherish.",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.561 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  }
];

export default function AboutWhyChooseUs() {
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
      className={`relative w-full pt-8 pb-12 lg:pt-10 lg:pb-16 bg-[#faf6f0] text-[#2d2219] overflow-hidden transition-all duration-700 ${isVisible ? "is-visible" : ""}`}
    >
      
      {/* Decorative Frame Box */}
      <div className="border border-[#c5a880]/30 rounded-[2.5rem] p-8 lg:p-14 relative w-full max-w-5xl mx-auto z-10 bg-white/10 backdrop-blur-[2px] scroll-reveal-fade-up">
        
        {/* Rosette Absolute Badge Centered on Top Border */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf6f0] px-4 py-1 z-20 text-[#c5a880] scroll-reveal-scale-in"
          style={{ transitionDelay: '200ms' }}
        >
          <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
            <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        </div>

        {/* Inner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Texts & bullet list */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Overtitle */}
            <div className="flex items-center gap-3 mb-5 scroll-reveal-fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="w-5 h-5 text-[#c5a880] flex items-center justify-center shrink-0">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                  <path d="M12 4C9 4 6 6.5 6 9.5V11H18V9.5C18 6.5 15 4 12 4ZM4 12V14H20V12H4ZM5 15V16C5 18.2 6.8 20 9 20H15C17.2 20 19 18.2 19 16V15H5Z"/>
                  <circle cx="12" cy="2" r="1.5"/>
                </svg>
              </div>
              <span className="font-sans text-[#c5a880] text-xs font-extrabold tracking-[3px] uppercase">
                ANTALYA
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2d2219] font-medium leading-none tracking-tight mb-6 scroll-reveal-fade-up" style={{ transitionDelay: '200ms' }}>
              WHY <span className="text-[#e10613]">CHOOSE US</span>
            </h2>

            {/* Separator Ornament */}
            <div className="flex items-center gap-2 mb-6 scroll-reveal-fade-up" style={{ transitionDelay: '300ms' }}>
              <div className="h-[1px] w-6 bg-[#c5a880]/30"></div>
              <div className="w-1 h-1 rotate-45 bg-[#c5a880]"></div>
              <div className="h-[1px] w-6 bg-[#c5a880]/30"></div>
            </div>

            {/* Copy */}
            <div className="flex flex-col gap-4 font-sans text-[#2d2219] text-sm sm:text-base leading-relaxed mb-8 font-medium scroll-reveal-fade-up" style={{ transitionDelay: '400ms' }}>
              <p>
                At Antalya Restaurant, we don&apos;t just serve meals – we create meaningful dining moments. Our commitment to authenticity ensures that every ingredient, seasoning, and cooking method honours true Turkish culinary heritage.
              </p>
              <p>
                From our charcoal-grilled kebabs to handcrafted baklava, every dish is made with care to transport you to the bustling streets of Istanbul and the coastal charm of Antalya.
              </p>
            </div>

            {/* List block */}
            <div className="flex flex-col gap-6 mb-10">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 items-start scroll-reveal-fade-up"
                  style={{ transitionDelay: `${500 + idx * 100}ms` }}
                >
                  {/* Badge circle */}
                  <div className="w-9 h-9 rounded-full bg-[#fdfaf5] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0 shadow-sm mt-0.5">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans font-extrabold text-[10px] text-[#e10613] tracking-[1.5px] uppercase">
                      {feature.title}
                    </span>
                    <span className="font-sans text-xs text-[#2d2219]/90 mt-1 font-semibold leading-normal">
                      {feature.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="scroll-reveal-fade-up" style={{ transitionDelay: '900ms' }}>
              <Link 
                href="/catering"
                className="inline-flex items-center justify-center bg-[#c00510] hover:bg-[#90040a] text-white px-8 py-4 rounded-sm text-xs font-extrabold tracking-[2px] uppercase transition-all shadow-md hover:shadow-lg gap-3"
              >
                Discover Our Story
                <span>&rarr;</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Image Collage */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full h-[450px] sm:h-[500px]">
            
            {/* Watermarks */}
            <div className="absolute top-4 right-[10%] opacity-25 select-none pointer-events-none scroll-reveal-fade-in" style={{ transitionDelay: '200ms' }}>
              <svg width="60" height="40" className="text-[#c5a880] fill-current">
                <pattern id="chooseDotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1" />
                </pattern>
                <rect width="60" height="40" fill="url(#chooseDotGrid)" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-[5%] opacity-25 select-none pointer-events-none scroll-reveal-fade-in" style={{ transitionDelay: '300ms' }}>
              <svg width="40" height="60" className="text-[#c5a880] fill-current">
                <rect width="40" height="60" fill="url(#chooseDotGrid)" />
              </svg>
            </div>

            {/* Main Arch Image */}
            <div className="absolute top-[20px] left-[5%] w-[75%] aspect-[1/1.1] rounded-t-full border border-[#c5a880]/15 overflow-hidden z-10 shadow-lg scroll-reveal-grid-item" style={{ transitionDelay: '400ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
                alt="Turkish Food Platter" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Smaller Slanted Arch Image Overlapping Bottom-Right */}
            <div className="absolute bottom-[20px] right-[2%] w-[45%] aspect-[1/1.1] rounded-t-full rounded-br-2xl border-2 border-white overflow-hidden z-20 shadow-2xl scroll-reveal-grid-item" style={{ transitionDelay: '600ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=500&auto=format&fit=crop" 
                alt="Antalya interior dining ambiance" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Circular badge overlapping the main image bottom-left */}
            <div className="absolute bottom-[60px] left-[5%] w-24 h-24 sm:w-28 sm:h-28 z-25 drop-shadow-xl select-none pointer-events-none scroll-reveal-scale-in" style={{ transitionDelay: '800ms' }}>
              <div className="w-full h-full rounded-full bg-[#c00510] border-4 border-[#faf6f0] flex flex-col items-center justify-center relative p-2 animate-[spin_60s_linear_infinite]">
                {/* Circular text */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-[#faf6f0] text-[#faf6f0]">
                  <path id="passionBadgeCurve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text fontSize="8.5" fontWeight="900" letterSpacing="2.5" className="uppercase font-sans">
                    <textPath href="#passionBadgeCurve" startOffset="0%">
                      PASSION • TASTE • EXPERIENCE • 
                    </textPath>
                  </text>
                </svg>
                {/* Center flower */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c5a880] fill-none stroke-current" strokeWidth="1" viewBox="0 0 24 24" style={{ animation: "spin 60s linear infinite reverse" }}>
                    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

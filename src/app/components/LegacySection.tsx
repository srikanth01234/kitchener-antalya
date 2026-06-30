"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function LegacySection() {
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
        threshold: 0.08,
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
      id="about"
      className={`relative w-full min-h-[600px] flex flex-col lg:flex-row overflow-hidden bg-[#faf6f0] border-b border-[#2d2219]/10 ${isVisible ? "is-visible" : ""
        }`}
    >

      {/* LEFT SIDE: Text Content */}
      <div className="relative w-full lg:w-[40%] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:pl-[calc((100vw-min(100vw,1440px))/2+4rem)] lg:pr-16 py-20 lg:py-24 z-20 bg-[#faf6f0]">

        {/* Faded Watermark Background Text */}
        <div className="absolute top-12 left-10 lg:top-20 lg:left-[calc((100vw-min(100vw,1440px))/2+2rem)] pointer-events-none select-none z-0 scroll-reveal-watermark">
          <span className="font-script text-[8rem] sm:text-[10rem] lg:text-[14rem] text-[#2d2219] leading-none whitespace-nowrap">
            Antalya
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-start max-w-xl mx-auto lg:mx-0 w-full">

          {/* Over-title */}
          <div className="flex items-center gap-3 text-[#e10613] font-extrabold tracking-[3px] text-xs uppercase mb-6 scroll-reveal-up-safe scroll-reveal-title">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" />
              <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z" />
            </svg>
            <span>Antalya</span>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" />
              <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z" />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-[#2d2219] leading-[1.1] mb-6 tracking-tight scroll-reveal-up-safe scroll-reveal-title">
            More Than a <br className="hidden sm:block" />
            Restaurant, <br className="hidden sm:block" />
            <span className="text-[#e10613]">It's a Legacy</span>
            <span className="inline-block text-[#e10613] ml-3 text-2xl align-middle mb-2 font-sans font-light">-</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#2d2219] text-base font-medium leading-relaxed mb-12 max-w-[380px] scroll-reveal-up-safe scroll-reveal-sub">
            Experience unforgettable Turkish fusion where tradition meets modern culinary excellence.
          </p>

          {/* Features Icons */}
          <div className="flex items-start gap-2 sm:gap-8 md:gap-12 mb-14 w-full border-l border-[#c5a880]/30 pl-4 py-2 relative">
            {/* Subtle line decoration */}
            <div className="absolute left-[-3px] top-0 bottom-0 w-[5px] bg-[#faf6f0] flex flex-col justify-between items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/60"></div>
            </div>

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center gap-3 scroll-reveal-feat scroll-reveal-feat-1">
              <div className="w-12 h-12 rounded-full border border-[#c5a880]/40 flex items-center justify-center shrink-0 text-[#e10613]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2zm1.8 11.2c-.3.4-.8.8-1.3 1-.3.1-.5.3-.5.5 0 .4.4.8.8.8.2 0 .4-.1.5-.2.5-.3 1-.8 1.2-1.4.1-.3-.2-.7-.7-.7z" />
                </svg>
              </div>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#2d2219] leading-tight">
                Authentic<br />Recipes
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center gap-3 scroll-reveal-feat scroll-reveal-feat-2">
              <div className="w-12 h-12 rounded-full border border-[#c5a880]/40 flex items-center justify-center shrink-0 text-[#e10613]">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-3v3m4-3H8m4-12a8 8 0 00-8 8h16a8 8 0 00-8-8zm0 0v-2m0 0h-2m2 0h2" />
                </svg>
              </div>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#2d2219] leading-tight">
                Premium<br />Experience
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center gap-3 scroll-reveal-feat scroll-reveal-feat-3">
              <div className="w-12 h-12 rounded-full border border-[#c5a880]/40 flex items-center justify-center shrink-0 text-[#e10613]">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.5 6h6.5l-5 4.5 2 6.5-6-4.5-6 4.5 2-6.5-5-4.5h6.5z" />
                </svg>
              </div>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#2d2219] leading-tight">
                Turkish<br />Hospitality
              </span>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-6 scroll-reveal-up-safe scroll-reveal-action">
            <a href="#about" className="bg-[#e10613] hover:bg-[#c00510] text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-[2px] uppercase transition-colors flex items-center gap-3 shadow-md">
              Our Story
              <span>&rarr;</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-8 border-b border-[#c5a880]/50" />
              <span className="font-script text-[#c5a880] text-2xl rotate-[-2deg] pt-1">
                Crafted with Passion
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Image & Floating Card */}
      <div className="relative w-full lg:w-[60%] min-h-[400px] lg:min-h-full bg-[#1a120b] overflow-hidden">

        {/* The Curve SVG Separator (Desktop) */}
        <div className="hidden lg:block absolute top-0 -left-[1px] h-full w-[120px] text-[#faf6f0] fill-current z-10 pointer-events-none drop-shadow-[8px_0_15px_rgba(0,0,0,0.25)]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 C80,20 20,30 20,50 C20,70 80,80 100,100 L0,100 Z" />
          </svg>
        </div>

        {/* Mobile Curve Separator (top horizontal) */}
        <div className="block lg:hidden absolute top-[-1px] left-0 w-full h-[60px] text-[#faf6f0] fill-current z-10 pointer-events-none drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 C80,80 20,80 0,0 Z" />
          </svg>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full scroll-reveal-image">
          <img
            src="/home/More-Than-a-Restaurant/More-Than-a-Restaurant.webp"
            alt="Turkish Feast"
            className="w-full h-full object-cover lg:scale-105"
          />
        </div>

        {/* Dark overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

        {/* Floating Card */}
        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 bg-[#faf6f0] p-5 md:p-6 rounded-sm shadow-2xl flex items-center gap-5 max-w-[320px] scroll-reveal-up-safe scroll-reveal-card">
          <div className="w-12 h-12 rounded-full border border-primary/20 bg-white flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#e10613] fill-current" viewBox="0 0 24 24">
              <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2zm1.8 11.2c-.3.4-.8.8-1.3 1-.3.1-.5.3-.5.5 0 .4.4.8.8.8.2 0 .4-.1.5-.2.5-.3 1-.8 1.2-1.4.1-.3-.2-.7-.7-.7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs font-extrabold tracking-widest uppercase text-[#2d2219] mb-1.5 leading-none">
              Grilled to Perfection
            </h4>
            <p className="text-xs text-[#2d2219] font-medium leading-snug">
              Every dish is crafted over charcoal grill for that authentic smoky flavour.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

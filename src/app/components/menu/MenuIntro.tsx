"use client";

import React, { useEffect, useRef, useState } from "react";

const MenuIntro = () => {
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
      className="w-full bg-[#fdfdfb] py-16 px-4 flex flex-col items-center select-none"
    >
      {/* Script Title & Flourish */}
      <div className={`flex items-center gap-2 mb-2 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}>
        <span className="font-script text-3xl md:text-4xl text-[#B89564]">
          Antalya
        </span>
        <svg
          className="w-4 h-4 text-[#B89564]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      </div>

      {/* Main Title */}
      <h2 className={`text-3xl md:text-5xl font-serif text-[#e10613] text-center mb-6 tracking-wide uppercase transition-all duration-1000 delay-100 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        A JOURNEY OF <br className="hidden md:block" /> TURKISH FLAVOURS
      </h2>

      {/* Decorative Divider */}
      <div className={`flex items-center justify-center mb-8 transition-all duration-1000 delay-200 ease-out transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}>
        <svg
          className="w-5 h-5 text-[#e10613]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      </div>

      {/* Description */}
      <p className={`max-w-2xl text-center text-gray-600 font-sans text-sm md:text-base leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        Our menu is a celebration of traditional Turkish cuisine, crafted with authentic
        ingredients and timeless recipes. From sizzling grills to refreshing mezze,
        every dish tells a story of Anatolian heritage.
      </p>
    </section>
  );
};

export default MenuIntro;

import React from 'react';

export default function GalleryFooterText() {
  return (
    <section className="w-full bg-[#faf6f0] pb-24 pt-8 px-6 relative flex flex-col items-center justify-center text-center">
      
      {/* Script Text */}
      <h3 className="font-script text-3xl md:text-4xl lg:text-5xl text-[#c5a880] mb-4">
        Every detail, a story. Every moment, a memory.
      </h3>

      {/* Decorative Separator */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-[1px] bg-[#c5a880]/40"></div>
        <div className="w-3 h-3 text-[#c5a880] opacity-80">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
        <div className="w-10 h-[1px] bg-[#c5a880]/40"></div>
      </div>

      {/* Background City Skyline Sketch (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] opacity-10 pointer-events-none">
        {/* Simple placeholder skyline path to match design's faint outline */}
        <svg viewBox="0 0 400 150" className="w-full h-auto fill-current text-[#2d2219]">
          <path d="M0,150 L0,120 L20,120 L25,90 L30,120 L40,120 L40,130 L60,130 L65,70 L70,130 L80,130 L80,100 L110,100 L110,130 L130,130 L135,40 L140,130 L150,130 L150,110 L180,110 L180,150 Z" />
          <path d="M135,20 L130,40 L140,40 Z" />
        </svg>
      </div>

    </section>
  );
}

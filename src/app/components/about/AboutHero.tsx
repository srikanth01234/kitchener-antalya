import React from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] flex items-center bg-black overflow-hidden z-20">
      
      {/* Background Image (Fish platter) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1500&auto=format&fit=crop" 
          alt="Antalya Culinary Selection" 
          className="w-full h-full object-cover object-[50%_70%] opacity-70"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 z-10 pt-10 pb-20 relative">
        <div className="flex flex-col text-left max-w-xl">
          
          {/* Logo & Overtitle */}
          <div className="flex items-center gap-3 mb-4">
            {/* Cloche Icon */}
            <div className="w-5 h-5 text-[#c5a880] flex items-center justify-center shrink-0">
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 4C9 4 6 6.5 6 9.5V11H18V9.5C18 6.5 15 4 12 4ZM4 12V14H20V12H4ZM5 15V16C5 18.2 6.8 20 9 20H15C17.2 20 19 18.2 19 16V15H5Z"/>
                <circle cx="12" cy="2" r="1.5"/>
              </svg>
            </div>
            <span className="font-sans text-[#c5a880] text-xs font-extrabold tracking-[4px] uppercase">
              ANTALYA
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-medium tracking-tight mb-4">
            ABOUT <span className="text-[#c5a880]">US</span>
          </h1>

          {/* Gold Diamond Ornament */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
            <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
          </div>

          {/* Breadcrumbs */}
          <div className="font-sans text-xs md:text-sm text-white/60 font-medium tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2.5 text-[#c5a880]/60 select-none">/</span>
            <span className="text-white">About</span>
          </div>

        </div>
      </div>

      {/* Bézier Wave bottom transition */}
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[50px] md:h-[80px] z-10 pointer-events-none select-none"
      >
        <path 
          d="M0,80 C360,130 720,130 1080,90 C1260,70 1350,60 1440,30 L1440,120 L0,120 Z" 
          fill="#faf6f0" 
        />
      </svg>

    </section>
  );
}

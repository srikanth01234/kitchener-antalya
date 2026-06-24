import React from 'react';

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center bg-[#1a120b] overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop" 
          alt="Gallery Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120b] via-[#1a120b]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col items-start pt-10">
        
        {/* Script Subheading */}
        <span className="font-script text-[#c5a880] text-3xl md:text-4xl lg:text-5xl mb-2 ml-1">
          Our Gallery
        </span>
        
        {/* Main Heading */}
        <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-8">
          Moments That <br/>
          Tell <span className="text-[#9c1010]">Our Story</span>
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-white/70 text-[11px] font-bold tracking-[2px] uppercase">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="text-[#c5a880] text-[10px]">/</span>
          <span className="text-white">Gallery</span>
        </div>
        
      </div>

      {/* Decorative Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[90px] lg:h-[120px]"
          fill="#faf6f0"
        >
          <path d="M0,110 C400,110 800,10 1200,10 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}

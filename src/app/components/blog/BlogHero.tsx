import React from 'react';
import Link from 'next/link';

export default function BlogHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/blog/banner/blog-banner.webp"
          alt="Turkish Food"
          className="w-full h-full object-cover hero-zoom-in"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col justify-center">

        {/* Subtitle / Script */}
        <h2 className="font-script text-4xl md:text-5xl text-[#c5a880] mb-2 -rotate-2 origin-left gallery-hero-fade-up">
          Our Blog
        </h2>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] font-medium text-white leading-[1.1] mb-6 max-w-2xl tracking-tight gallery-hero-fade-up-d1">
          Flavors, Stories & <br className="hidden md:block" />
          Turkish <span className="text-[#c5a880]">Heritage</span>
        </h1>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#c5a880]/50 mb-6 gallery-hero-fade-up-d2"></div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase gallery-hero-fade-up-d2">
          <Link href="/" className="text-white hover:text-[#c5a880] transition-colors">Home</Link>
          <span className="text-white/50">/</span>
          <span className="text-[#c5a880]">Blog</span>
        </div>

      </div>

      {/* Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] lg:h-[120px]">
          <path d="M0,120 L1200,120 L1200,0 C900,120 300,120 0,0 Z" fill="#faf6f0"></path>
        </svg>
      </div>

    </section>
  );
}

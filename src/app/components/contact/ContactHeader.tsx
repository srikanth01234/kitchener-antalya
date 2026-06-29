import React from "react";

const ContactHeader = () => {
  return (
    <div className="w-full flex flex-col items-center text-center pt-20 pb-12 px-4">
      {/* Overtitle */}
      <div className="flex items-center gap-4 mb-4 gallery-hero-fade-up">
        <svg className="w-3 h-3 text-[#B89564]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
        <span className="font-sans text-[#B89564] text-xs md:text-sm font-bold tracking-[4px] uppercase">
          ANTALYA
        </span>
        <svg className="w-3 h-3 text-[#B89564]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      </div>

      {/* Main Title */}
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#333] mb-6 tracking-wide gallery-hero-fade-up-d1">
        CONTACT <span className="text-[#7a1f1f]">US</span>
      </h1>

      {/* Decorative Diamond Divider */}
      <div className="flex items-center justify-center mb-8 gallery-hero-fade-up-d1">
        <div className="w-16 h-[1px] bg-[#e6e2d8]" />
        <svg className="w-4 h-4 text-[#e6e2d8] mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4l3 8-3 8-3-8z" />
        </svg>
        <div className="w-16 h-[1px] bg-[#e6e2d8]" />
      </div>

      {/* Subtitle */}
      <p className="font-sans text-gray-900 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-6 gallery-hero-fade-up-d2">
        We'd love to hear from you. Whether it's a reservation, a special request, or just a hello.
      </p>

      {/* Script Text & Underline */}
      <div className="relative inline-flex flex-col items-center gallery-hero-fade-up-d2">
        <span className="font-script text-4xl md:text-5xl text-[#B89564] -rotate-2">
          We are here for you.
        </span>
        {/* Squiggly Underline (Approximation with SVG path) */}
        <svg className="w-48 h-4 text-[#B89564]/50 mt-1" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
          <path d="M5,10 C30,-5 50,25 75,10 C100,-5 120,25 145,10 C170,-5 190,25 195,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default ContactHeader;

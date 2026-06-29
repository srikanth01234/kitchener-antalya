import React from "react";

const ContactHeader = () => {
  return (
    <section className="relative w-full h-[45vh] sm:h-[50vh] md:h-[55vh] flex items-center bg-black overflow-hidden z-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/contact/contact-banner.webp" 
          alt="Antalya Contact Banner" 
          className="w-full h-full object-cover opacity-60 gallery-hero-bg"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 z-10 pt-10 pb-20 relative">
        <div className="flex flex-col text-left max-w-xl">
          {/* Logo & Overtitle */}
          <div className="flex items-center gap-3 mb-4 gallery-hero-fade-up">
            <div className="w-5 h-5 text-[#c5a880] flex items-center justify-center shrink-0">
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 4C9 4 6 6.5 6 9.5V11H18V9.5C18 6.5 15 4 12 4ZM4 12V14H20V12H4ZM5 15V16C5 18.2 6.8 20 9 20H15C17.2 20 19 18.2 19 16V15H5Z"/>
                <circle cx="12" cy="2" r="1.5"/>
              </svg>
            </div>
            <span className="w-[1px] h-4.5 bg-[#c5a880]/40"></span>
            <span className="font-sans text-white text-xs font-black tracking-[4px] uppercase leading-none">
              ANTALYA
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-white text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-wide mb-6 gallery-hero-fade-up-d1">
            Contact <span className="text-[#c5a880] italic">Us</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-white/90 text-sm md:text-base leading-relaxed max-w-md font-semibold gallery-hero-fade-up-d2">
            We&apos;d love to hear from you. Reach out to book a table, plan an event, or ask us any questions.
          </p>
        </div>
      </div>

      {/* Decorative Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]"
          fill="#fdfdfb"
        >
          <path d="M0,110 C400,110 800,10 1200,10 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHeader;

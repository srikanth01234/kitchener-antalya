"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const MenuHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop"
          alt="Antalya Turkish Cuisine Dining Table"
          className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
            isMounted ? "scale-100" : "scale-110"
          }`}
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-10">
        <h1 className={`text-white text-5xl md:text-7xl font-serif tracking-wide mb-4 transition-all duration-[1000ms] ease-out transform ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}>
          OUR MENU
        </h1>
        
        {/* Decorative Divider */}
        <div className={`flex items-center gap-4 mb-6 transition-all duration-[1000ms] delay-300 ease-out transform ${
          isMounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}>
          <div className="w-12 h-[1px] bg-[#B89564]" />
          <svg
            className="w-4 h-4 text-[#B89564]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <div className="w-12 h-[1px] bg-[#B89564]" />
        </div>

        {/* Breadcrumbs */}
        <div className={`flex items-center gap-2 text-sm md:text-base font-sans tracking-widest uppercase transition-all duration-[1000ms] delay-500 ease-out transform ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Link href="/" className="text-white hover:text-[#B89564] transition-colors">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#B89564]">Menu</span>
        </div>
      </div>

      {/* Curved Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z"
            className="fill-[#fdfdfb]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default MenuHero;

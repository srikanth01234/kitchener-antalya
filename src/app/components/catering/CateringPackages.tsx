"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface PackageData {
  id: string;
  name: string;
  badge?: string;
  desc: string;
  price: number;
  inclusions: string[];
  imgUrl: string;
}

const packages: Record<string, PackageData> = {
  silver: {
    id: "silver",
    name: "Silver Package",
    badge: "Best Value",
    desc: "An elegant, budget-friendly selection of our most popular street-food style dishes.",
    price: 25,
    inclusions: [
      "Minimum 15 Guests",
      "Choice of 2 Main Dishes (Chicken Shish / Kofte)",
      "Choice of 2 Sides (Rice / Bulgur)",
      "Fresh Salads & Dips (Hummus / Cacik)",
      "Warm Pita Bread & Garlic Sauce",
      "Traditional Turkish Tea"
    ],
    imgUrl: "/catering/choose-your-experience-1.webp"
  },
  gold: {
    id: "gold",
    name: "Gold Package",
    badge: "Most Popular",
    desc: "Perfect balance of variety, quality, and generous portions.",
    price: 35,
    inclusions: [
      "Minimum 25 Guests",
      "Choice of 3 Main Dishes",
      "Choice of 3 Sides",
      "Fresh Salads & Appetizers",
      "Dessert (Baklava / Rice Pudding)",
      "Turkish Tea & Soft Drinks"
    ],
    imgUrl: "/catering/choose-your-experience-2.webp"
  },
  platinum: {
    id: "platinum",
    name: "Platinum Package",
    badge: "Ultimate Dining",
    desc: "Our premium dining package including signature mixed grills and custom dessert stations.",
    price: 48,
    inclusions: [
      "Minimum 30 Guests",
      "Choice of 4 Main Dishes (Lamb Shish, Adana Kebab, Salmon)",
      "Unlimited Sides & Hot Appetizers",
      "Premium Salads & Specialty Mezze Platters",
      "Specialty Desserts & Fresh Fruits",
      "Turkish Coffee, Tea & Mocktails"
    ],
    imgUrl: "/catering/choose-your-experience-3.webp"
  }
};

export default function CateringPackages() {
  const [activeTab, setActiveTab] = useState<string>("gold");
  const [renderedTab, setRenderedTab] = useState<string>("gold");
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);

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
      { threshold: 0.05 }
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

  const handleTabClick = (tab: string) => {
    if (tab === renderedTab || isTabTransitioning) return;
    setIsTabTransitioning(true);
    setActiveTab(tab);
    setTimeout(() => {
      setRenderedTab(tab);
      setIsTabTransitioning(false);
    }, 250);
  };

  const currentPkg = packages[renderedTab];

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-12 lg:py-16 bg-[#120e0b] text-[#faf6f0] overflow-hidden select-none"
    >
      {/* Background flourish textures */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Title & Features Box */}
          <div className={`lg:col-span-5 flex flex-col justify-center transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            
            {/* Overtitle */}
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-4 h-4 text-[#dfb784] fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-sans text-[#dfb784] text-xs font-extrabold tracking-[3px] uppercase">
                CHOOSE YOUR EXPERIENCE
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-white tracking-tight mb-4">
              Catering Packages <br />
              Designed <span className="font-script text-[#c5a880] text-4xl sm:text-5xl lg:text-6xl -rotate-1 inline-block ml-1">for You</span>
            </h2>

            {/* Small Separator Ornament */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
              <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
            </div>

            {/* Description */}
            <p className="font-sans text-[#faf6f0]/90 text-sm sm:text-base leading-relaxed mb-10 max-w-md font-medium">
              Carefully curated packages to suit your guest count, style, and preferences. Exceptional flavours, beautifully served.
            </p>

            {/* Feature List rounded box */}
            <div className="border border-[#c5a880]/20 bg-white/[0.02] rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
              {/* Islamic geometric corner watermark */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 text-[#c5a880]/[0.03] pointer-events-none">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="1" viewBox="0 0 100 100">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z M50 20 L80 50 L50 80 L20 50 Z M50 35 L65 50 L50 65 L35 50 Z" />
                </svg>
              </div>

              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm mb-1">Authentic Turkish Cuisine</h4>
                  <p className="font-sans text-xs text-[#faf6f0]/85">Traditional recipes with modern presentation</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.452L21 9l-2.288-2.288L9.813 15.904z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15h3M3 18h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm mb-1">Fresh & Quality Ingredients</h4>
                  <p className="font-sans text-xs text-[#faf6f0]/85">Only the finest, handpicked ingredients</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm mb-1">Professional Service</h4>
                  <p className="font-sans text-xs text-[#faf6f0]/85">Experienced team dedicated to your event</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177V3.75A1.125 1.125 0 0013.125 2.625h-3.75a1.125 1.125 0 00-1.125 1.125v3.823M16.5 7.5V12m0 0H8.25V7.5M16.5 12H18.75a1.125 1.125 0 011.125 1.125v1.5a1.125 1.125 0 01-1.125 1.125H16.5m0-3.75h-2.25M8.25 7.5H6a1.125 1.125 0 00-1.125 1.125v3.5A1.125 1.125 0 006 14.25h2.25m0-6.75V12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white text-sm mb-1">On-Time Delivery</h4>
                  <p className="font-sans text-xs text-[#faf6f0]/85">Reliable, punctual, and stress-free experience</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Packages Card */}
          <div className={`lg:col-span-7 flex flex-col items-center lg:items-end w-full transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            
            {/* TABS CONTAINER */}
            <div className="flex bg-[#231e1a] rounded-full p-1.5 mb-10 w-full max-w-lg border border-[#c5a880]/10 shadow-lg relative z-20">
              
              {/* Silver Tab */}
              <button
                onClick={() => handleTabClick("silver")}
                className={`flex-1 py-3.5 px-4 rounded-full text-xs font-bold tracking-[2px] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "silver"
                    ? "bg-[#faf6f0] text-[#2d2219] shadow-md"
                    : "text-[#faf6f0]/60 hover:text-white"
                }`}
              >
                Silver
              </button>

              {/* Gold Tab */}
              <button
                onClick={() => handleTabClick("gold")}
                className={`flex-1 py-3.5 px-4 rounded-full text-xs font-bold tracking-[2px] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "gold"
                    ? "bg-gradient-to-r from-[#b58c58] to-[#d4af37] text-white shadow-md"
                    : "text-[#faf6f0]/60 hover:text-white"
                }`}
              >
                Gold
              </button>

              {/* Platinum Tab */}
              <button
                onClick={() => handleTabClick("platinum")}
                className={`flex-1 py-3.5 px-4 rounded-full text-xs font-bold tracking-[2px] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === "platinum"
                    ? "bg-white/10 text-white border border-white/20 shadow-md"
                    : "text-[#faf6f0]/60 hover:text-white"
                }`}
              >
                Platinum
              </button>
            </div>

            {/* DETAIL DISPLAY CARD */}
            <div className={`bg-[#faf6f0] text-[#2d2219] rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col md:flex-row w-full max-w-3xl border border-[#c5a880]/20 min-h-[500px] transition-all duration-300 transform ${
              isTabTransitioning ? "opacity-0 scale-98 blur-[1px]" : "opacity-100 scale-100 blur-0"
            }`}>
              
              {/* Left Side: Package Image */}
              <div className="w-full md:w-[45%] h-64 md:h-auto relative shrink-0">
                <img 
                  src={currentPkg.imgUrl} 
                  alt={currentPkg.name}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                {/* Subtle border accent */}
                <div className="absolute inset-0 border-r border-[#c5a880]/20 hidden md:block"></div>
              </div>

              {/* Right Side: Package Details */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-between">
                <div>
                  
                  {/* Badge */}
                  {currentPkg.badge && (
                    <div className="inline-flex items-center gap-1 bg-[#c5a880] text-white text-[9px] font-black tracking-[1.5px] uppercase px-3 py-1 rounded-sm mb-4">
                      ★ {currentPkg.badge}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-serif text-3xl md:text-4xl text-[#2d2219] mb-3">
                    {currentPkg.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#2d2219]/90 leading-relaxed mb-6 font-semibold">
                    {currentPkg.desc}
                  </p>

                  {/* Divider ornament */}
                  <div className="flex items-center gap-3 my-4">
                    <div className="h-[0.5px] w-6 bg-[#c5a880]/30"></div>
                    <div className="w-1 h-1 rotate-45 bg-[#c5a880]"></div>
                    <div className="h-[0.5px] w-6 bg-[#c5a880]/30"></div>
                  </div>

                  {/* Inclusions list */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {currentPkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border border-[#c5a880]/50 flex items-center justify-center shrink-0 text-[#c5a880] mt-0.5 shadow-sm">
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <span className="font-sans text-xs font-extrabold text-[#2d2219]">{inc}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Footer of card: Price & Button */}
                <div className="border-t border-[#e5dacf] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] font-black text-[#c5a880] tracking-[2px] uppercase">
                      STARTING FROM
                    </span>
                    <div className="flex items-baseline mt-0.5">
                      <span className="font-serif text-3xl font-black text-[#2d2219]">${currentPkg.price}</span>
                      <span className="font-sans text-[10px] font-extrabold text-[#2d2219]/60 tracking-[1.5px] uppercase ml-1.5">
                        PER PERSON
                      </span>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#b0936b] text-white px-6 py-3.5 rounded-sm text-[10px] font-extrabold tracking-[2px] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    View Full Menu
                    <span>&rarr;</span>
                  </Link>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CALLOUT BANNER */}
        <div className={`mt-8 lg:mt-10 border border-[#c5a880]/20 bg-white/[0.02] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl mx-auto shadow-inner relative overflow-hidden transition-all duration-[1200ms] delay-300 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Subtle line decor */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent"></div>
          
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            {/* Headset Icon */}
            <div className="w-12 h-12 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
              <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-white">Let&apos;s Make Your Event Unforgettable</h3>
              <p className="font-sans text-xs text-[#faf6f0]/50 mt-1">Contact us today for a personalized catering quote.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="w-full md:w-auto text-center border border-white hover:border-[#c5a880] hover:text-[#c5a880] text-white px-8 py-3.5 rounded-sm text-xs font-extrabold tracking-[2px] uppercase transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Us
            <span>&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

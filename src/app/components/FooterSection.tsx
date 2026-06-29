"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-[#0f0c08] pt-12 pb-8 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Watermark Text "antalya" */}
      <div className={`absolute bottom-[-15px] right-1/2 translate-x-1/2 pointer-events-none select-none z-20 transition-all duration-[1200ms] ease-out transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
      }`}>
        <span 
          className="font-serif text-[16vw] font-black lowercase tracking-widest leading-none"
          style={{ color: "rgba(225, 6, 19, 0.08)" }}
        >
          antalya
        </span>
      </div>

      {/* Background Swirl Vector Decor (Bottom-Left) */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[450px] h-[450px] text-[#c5a880]/[0.02] pointer-events-none select-none z-0">
        <svg className="w-full h-full fill-none stroke-current" strokeWidth="0.5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="35" />
          <path d="M50 5 C55 30 70 45 95 50 C70 55 55 70 50 95 C45 70 30 55 5 50 C30 45 45 30 5 5" />
          <path d="M50 15 C52 35 65 48 85 50 C65 52 52 65 50 85 C48 65 35 52 15 50 C35 48 48 35 50 15" />
        </svg>
      </div>

      {/* Main Footer Card */}
      <div className="relative w-full max-w-[1360px] mx-auto px-6 sm:px-8 z-10 flex flex-col items-center">

        {/* Floating White Card */}
        <div className={`w-full bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#e5dacf]/30 p-6 sm:p-8 lg:p-10 flex flex-col gap-8 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>

          {/* Top Row: 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1: Brand Info */}
            <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out delay-150 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              {/* Islamic/Turkish Octagonal Emblem */}
              <div className="w-16 h-16 mb-4 text-[#c5a880]">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 100 100">
                  <path d="M50 5 L82 18 L95 50 L82 82 L50 95 L18 82 L5 50 L18 18 Z" />
                  <path d="M50 12 L77 23 L88 50 L77 77 L50 88 L23 77 L12 50 L23 23 Z" strokeWidth="0.8" strokeDasharray="2,2" />
                  <circle cx="50" cy="50" r="22" strokeWidth="1" />
                  <text x="50" y="58" textAnchor="middle" fill="#2d2219" className="font-serif text-2xl font-bold fill-[#2d2219]">A</text>
                </svg>
              </div>

              {/* Brand Headings */}
              <h3 className="font-serif text-[#2d2219] text-2xl font-extrabold tracking-widest uppercase mb-1 leading-none">
                Antalya
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#c5a880] text-[10px] sm:text-xs">✦</span>
                <span className="text-[#c5a880] text-[10px] sm:text-xs font-bold tracking-[3px] uppercase">
                  Turkish Restaurant
                </span>
                <span className="text-[#c5a880] text-[10px] sm:text-xs">✦</span>
              </div>

              {/* Description */}
              <p className="font-sans text-[#2d2219]/75 text-xs sm:text-sm font-medium leading-relaxed max-w-[280px]">
                Discover the richness of Turkish fusion dining in the heart of Ontario at Antalya Restaurant. Our thoughtfully curated menu showcases everything from fire-grilled kebabs and juicy doners to authentic pides, wraps, and sandwiches.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <h4 className="font-sans text-sm font-extrabold tracking-[2px] text-[#2d2219] uppercase mb-1">
                Quick Links
              </h4>
              {/* Divider Decor */}
              <div className="w-16 h-[2px] bg-[#c5a880]/30 relative my-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880] border border-white" />
              </div>

              {/* Links List */}
              <ul className="flex flex-col gap-3 font-sans text-sm font-bold text-[#2d2219]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Menu", href: "/menu" },
                  { label: "Catering", href: "/catering" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 hover:text-[#e10613] transition-all duration-300 transform hover:translate-x-1"
                    >
                      <span className="text-[#c5a880] group-hover:text-[#e10613] transition-colors duration-300">
                        &rsaquo;
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location */}
            <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out delay-450 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <h4 className="font-sans text-sm font-extrabold tracking-[2px] text-[#2d2219] uppercase mb-1">
                Location
              </h4>
              {/* Divider Decor */}
              <div className="w-16 h-[2px] bg-[#c5a880]/30 relative my-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880] border border-white" />
              </div>

              {/* Contact Info List */}
              <div className="flex flex-col gap-6 w-full">
                {/* Kitchener address */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center shrink-0 text-[#c5a880]">
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-center lg:text-left">
                    <span className="font-sans font-bold text-[#2d2219] text-sm mb-0.5">Kitchener</span>
                    <span className="font-sans text-xs font-semibold text-[#2d2219]/70 leading-relaxed whitespace-pre-line">
                      1187 Fischer-Hallman Rd #A35,{"\n"}Kitchener, ON N2E 4H9{"\n"}Canada
                    </span>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center shrink-0 text-[#c5a880]">
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-center lg:text-left">
                    <span className="font-sans font-bold text-[#2d2219] text-sm mb-0.5">Call Us</span>
                    <a href="tel:5195816363" className="font-sans text-xs font-bold text-[#2d2219]/70 hover:text-[#e10613] transition-colors">
                      519-581-6363
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center shrink-0 text-[#c5a880]">
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-center lg:text-left">
                    <span className="font-sans font-bold text-[#2d2219] text-sm mb-0.5">Email Us</span>
                    <a href="mailto:hello@antalyarestaurant.ca" className="font-sans text-xs font-bold text-[#2d2219]/70 hover:text-[#e10613] transition-colors">
                      hello@antalyarestaurant.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Opening Hours */}
            <div className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ease-out delay-600 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <h4 className="font-sans text-sm font-extrabold tracking-[2px] text-[#2d2219] uppercase mb-1">
                Opening Hours
              </h4>
              {/* Divider Decor */}
              <div className="w-16 h-[2px] bg-[#c5a880]/30 relative my-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#c5a880] border border-white" />
              </div>

              {/* Hours Info */}
              <div className="flex items-center lg:items-start gap-3 w-full justify-center lg:justify-start">
                {/* Clock icon */}
                <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center shrink-0 text-[#c5a880]">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col text-center lg:text-left gap-3">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[#2d2219] text-sm">Sunday – Saturday</span>
                    <span className="font-sans text-xs font-semibold text-[#2d2219]/70 mt-0.5">11:00 AM – 10:00 PM</span>
                  </div>
                  {/* Divider line inside hours */}
                  <div className="w-full h-[1px] bg-[#e5dacf]/50" />
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-[#2d2219] text-sm">Friday – Saturday</span>
                    <span className="font-sans text-xs font-semibold text-[#2d2219]/70 mt-0.5">11:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Circles (moved here) */}
              <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#2d2219] hover:bg-[#c5a880]/10 hover:border-[#e10613] hover:text-[#e10613] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#2d2219] hover:bg-[#c5a880]/10 hover:border-[#e10613] hover:text-[#e10613] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#c5a880]/60 flex items-center justify-center text-[#2d2219] hover:bg-[#c5a880]/10 hover:border-[#e10613] hover:text-[#e10613] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Middle Bar: Divider + Skyline + Reserve Banner */}
          <div className={`w-full border-t border-[#e5dacf]/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-[800ms] ease-out delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {/* Left: Istanbul Skyline Drawing */}
            <div className="flex items-center justify-center text-[#c5a880] opacity-85 select-none w-full md:w-auto overflow-hidden">
              <svg className="w-52 h-14" viewBox="0 0 200 50" fill="none">
                <path d="M0 45 L200 45" stroke="currentColor" strokeWidth="1.2" />

                {/* Mosque 1 (Left) */}
                <path d="M25 45 L25 25 C25 20 45 20 45 25 L45 45" stroke="currentColor" strokeWidth="1" />
                <path d="M21 45 L21 15 L20 15 L21 9 L22 15 L21 15" stroke="currentColor" strokeWidth="1" />
                <path d="M49 45 L49 15 L48 15 L49 9 L50 15 L49 15" stroke="currentColor" strokeWidth="1" />
                <path d="M35 21 L35 12" stroke="currentColor" strokeWidth="1" />
                <circle cx="35" cy="11" r="1.5" stroke="currentColor" strokeWidth="1" />

                {/* Mosque 2 (Middle) */}
                <path d="M75 45 L75 18 C75 10 105 10 105 18 L105 45" stroke="currentColor" strokeWidth="1.2" />
                <path d="M80 30 C80 24 100 24 100 30" stroke="currentColor" strokeWidth="0.8" />
                <path d="M71 45 L71 7 L70 7 L71 2 L72 7 L71 7" stroke="currentColor" strokeWidth="1" />
                <path d="M109 45 L109 7 L108 7 L109 2 L110 7 L109 7" stroke="currentColor" strokeWidth="1" />

                {/* Mosque 3 (Right) */}
                <path d="M135 45 L135 32 C135 28 147 28 147 32 L147 45" stroke="currentColor" strokeWidth="1" />
                <path d="M132 45 L132 20 L131 20 L132 15" stroke="currentColor" strokeWidth="0.8" />
                <path d="M150 45 L150 20 L149 20 L150 15" stroke="currentColor" strokeWidth="0.8" />

                {/* Birds */}
                <path d="M60 14 Q63 11 66 14 Q69 11 72 14" stroke="currentColor" strokeWidth="0.8" />
                <path d="M120 9 Q122 7 124 9 Q126 7 128 9" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Vertical Divider (Desktop) / Horizontal (Mobile) */}
            <div className="hidden md:block w-[1px] h-12 bg-[#e5dacf]/60" />

            {/* Right: Reserve CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto justify-end">
              <div className="flex items-center gap-3">
                {/* Plate cloche cover icon */}
                <div className="w-10 h-10 text-[#c5a880] shrink-0">
                  <svg className="w-full h-full fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m-7.25 15h14.5a.75.75 0 00.75-.75V17a7 7 0 00-14 0v.25a.75.75 0 00.75.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M12 6a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-sans font-bold text-[#2d2219] text-base">Reserve Your Table</span>
                  <span className="font-sans text-xs text-[#2d2219]/60 font-semibold mt-0.5">Experience the taste of tradition.</span>
                </div>
              </div>

              {/* Reserve Button */}
              <Link
                href="/contact"
                className="bg-[#e10613] hover:bg-[#c40510] px-8 py-3.5 rounded-lg text-xs font-bold tracking-[2px] uppercase text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                Reserve Now
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="w-full mt-10 flex items-center justify-center gap-4 text-[#c5a880]/70 select-none text-center">
          {/* Double Diamond Flourish Left */}
          <span className="text-gold text-sm hidden sm:inline">
            <svg className="w-8 h-3 text-gold/60 fill-current" viewBox="0 0 30 10">
              <path d="M0 5 L10 2 L20 5 L10 8 Z M10 5 L20 2 L30 5 L20 8 Z" />
            </svg>
          </span>

          <span className="font-sans text-[11px] sm:text-xs font-bold tracking-widest text-[#faf6f0]/70 uppercase">
            &copy; 2026 Antalya Restaurant. All Rights Reserved.
          </span>

          {/* Double Diamond Flourish Right */}
          <span className="text-gold text-sm hidden sm:inline">
            <svg className="w-8 h-3 text-gold/60 fill-current" viewBox="0 0 30 10">
              <path d="M0 5 L10 2 L20 5 L10 8 Z M10 5 L20 2 L30 5 L20 8 Z" />
            </svg>
          </span>
        </div>

      </div>
    </footer>
  );
}

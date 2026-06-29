"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ContactInfo = () => {
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
        rootMargin: "0px 0px -50px 0px",
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
    <div 
      ref={containerRef}
      className={`w-full relative h-full min-h-[950px] flex flex-col justify-end transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Background Arched Image */}
      <div className="absolute top-0 left-0 right-0 bottom-48 rounded-t-[10rem] md:rounded-t-[15rem] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
          alt="Candlelit Dining Table"
          className="w-full h-full object-cover hero-zoom-in"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Left Badge */}
      <div 
        className="absolute top-12 left-0 md:-left-8 w-24 h-24 bg-[#fdfdfb] rounded-full border border-[#B89564] shadow-lg flex items-center justify-center z-10 scroll-reveal-scale-in"
        style={{ transitionDelay: '200ms' }}
      >
        <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#B89564] flex items-center justify-center">
          <svg className="w-8 h-8 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.2-3 .554v9.962a14.735 14.735 0 003 1.01m6-9.238a8.967 8.967 0 016-2.292c1.052 0 2.062.2 3 .554v9.962a14.735 14.735 0 01-3 1.01m-6-9.238v10.962m0-10.962v.001" />
          </svg>
        </div>
      </div>

      {/* Bottom Floating Card */}
      <div 
        className="relative w-full z-10 bg-[#fdfdfb] rounded-t-[4rem] rounded-b-2xl pt-12 pb-8 px-8 shadow-xl border border-gray-100 mt-auto scroll-reveal-fade-up"
        style={{ transitionDelay: '300ms' }}
      >
        {/* Faint Skyline SVG Placeholder */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 40" fill="none" stroke="#B89564" strokeWidth="1">
            <path d="M10,40 L10,20 L20,20 L20,40 M40,40 L40,10 L50,10 L50,40 M60,40 L60,5 C60,0 70,0 70,5 L70,40 M85,40 L85,15 C95,5 115,5 125,15 L125,40 M140,40 L140,15 L150,15 L150,40 M170,40 L170,25 L180,25 L180,40" />
            <path d="M0,40 L200,40" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl text-[#7a1f1f] text-center mb-2 tracking-wide uppercase mt-4">
          LET'S CONNECT
        </h2>
        
        <div className="flex justify-center mb-8">
           <svg className="w-3 h-3 text-[#B89564]" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
           </svg>
        </div>

        {/* Info Rows */}
        <div className="flex flex-col gap-6 mb-10">
          {/* Visit Us */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-sans font-bold text-xs tracking-widest text-[#333] uppercase mb-1">VISIT US</span>
              <span className="font-sans text-sm text-gray-900 leading-relaxed">
                1187 Fischer-Hallman Rd #435,<br/> Kitchener, ON N2E 4H9
              </span>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.259.534l-1.49 2.464c-3.1-1.63-5.6-4.13-7.23-7.23l2.465-1.49a1.125 1.125 0 00.534-1.259l-.535-3.21C7.716 2.601 7.266 2.25 6.75 2.25H5.372C4.12 2.25 3.064 3.195 2.944 4.414A14.935 14.935 0 002.25 6.75z" />
              </svg>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-sans font-bold text-xs tracking-widest text-[#333] uppercase mb-1">CALL US</span>
              <span className="font-sans text-sm text-gray-900">
                519-581-6363
              </span>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-sans font-bold text-xs tracking-widest text-[#333] uppercase mb-1">EMAIL US</span>
              <span className="font-sans text-sm text-gray-900">
                hello@antalyarestaurant.ca
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col pt-6 border-t border-[#e6e2d8]">
          <span className="font-serif text-[#7a1f1f] text-sm tracking-widest uppercase mb-4 font-bold">
            FOLLOW US
          </span>
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <Link href="#" className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center text-[#B89564] hover:bg-[#B89564] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Facebook */}
            <Link href="#" className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center text-[#B89564] hover:bg-[#B89564] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* TripAdvisor Placeholder (Owl) */}
            <Link href="#" className="w-10 h-10 rounded-full border border-[#e6e2d8] flex items-center justify-center text-[#B89564] hover:bg-[#B89564] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

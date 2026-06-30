"use client";

import React, { useEffect, useRef, useState } from "react";

export default function PopularDishes() {
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
        rootMargin: "0px 0px -60px 0px",
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

  const dishes = [
    {
      id: "01",
      title: "ADANA KEBAB",
      description: "Charcoal-grilled minced lamb with warm pita, rice, and meze for a bold authentic Turkish flavour.",
      image: "/home/signature-dishes/signature-dishes-1.webp",
    },
    {
      id: "02",
      title: "MIXED GRILL",
      description: "A feast of lamb chops, kebabs, chicken, and meze - perfect for sharing true Turkish taste.",
      image: "/home/signature-dishes/signature-dishes-2.webp",
    },
    {
      id: "03",
      title: "BAKLAVA",
      description: "Crisp filo pastry layered with pistachios and honey syrup for a classic Turkish dessert.",
      image: "/home/signature-dishes/signature-dishes-3.webp",
    },
  ];

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-[#faf6f0] text-[#2d2219] pt-8 sm:pt-14 pb-6 flex flex-col items-center overflow-hidden z-30 transition-all duration-700 ${isVisible ? "is-visible" : ""}`}
    >
      
      {/* Background Drawings */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Flame top-right */}
        <div className="absolute top-0 -right-20 w-[700px] h-[700px] text-[#c5a880] opacity-[0.07] scroll-reveal-bg scroll-reveal-bg-flame">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.3">
            <path d="M50 90 Q 30 70, 50 30 Q 70 60, 50 90" />
            <path d="M40 80 Q 20 50, 60 10 Q 80 40, 40 80" />
            <path d="M60 90 Q 80 70, 40 20 Q 20 60, 60 90" />
          </svg>
        </div>

        {/* Mosque right-middle */}
        <div className="absolute top-[40%] right-0 w-[500px] h-[400px] text-[#c5a880] opacity-[0.15] scroll-reveal-bg scroll-reveal-bg-mosque">
          <svg viewBox="0 0 200 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.3">
            <path d="M0 90 L200 90" />
            <rect x="30" y="40" width="8" height="50" />
            <rect x="160" y="40" width="8" height="50" />
            <path d="M34 40 L34 15 L30 15 L34 5 L38 15 L34 15" />
            <path d="M164 40 L164 15 L160 15 L164 5 L168 15 L164 15" />
            <path d="M70 90 L70 50 C70 30 130 30 130 50 L130 90" />
            <path d="M90 90 L90 40 C90 20 110 20 110 40 L110 90" />
            <circle cx="100" cy="20" r="4" />
            <path d="M100 16 L100 5 L95 2" />
          </svg>
        </div>

        {/* Leaf Branch bottom-left */}
        <div className="absolute bottom-10 -left-10 w-[400px] h-[400px] text-[#c5a880] opacity-20 scroll-reveal-bg scroll-reveal-bg-leaf">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.3">
            <path d="M10 90 Q 50 50, 90 10" />
            <path d="M30 70 Q 20 50, 40 40 Q 50 60, 30 70" />
            <path d="M50 50 Q 40 30, 60 20 Q 70 40, 50 50" />
            <path d="M70 30 Q 60 10, 80 0 Q 90 20, 70 30" />
            <path d="M20 80 Q 40 90, 50 70 Q 30 60, 20 80" />
            <path d="M40 60 Q 60 70, 70 50 Q 50 40, 40 60" />
          </svg>
        </div>
      </div>

      <div className="relative w-full max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col z-10">

        {/* Centered Top Heading */}
        <div className="relative w-full flex flex-col items-center text-center mb-12 select-none animate-on-scroll scroll-reveal-heading">
          <div className="flex items-center gap-3 text-[#e10613] font-extrabold tracking-[3px] text-xs uppercase mb-4">
            {/* <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
               <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z"/>
               <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z"/>
            </svg>
            <span>Our Finest Selection</span> */}
          </div>
          <h2 className="relative flex flex-col items-center mb-4 leading-none">
            <span className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-[#2d2219] tracking-tight">
              Signature
            </span>
            <span className="font-script text-[#e10613] text-6xl md:text-7xl lg:text-[6.5rem] mt-0 lg:mt-1 translate-x-16 md:translate-x-24 lg:translate-x-28 rotate-[-4deg]">
              Dishes
            </span>
          </h2>
          {/* <div className="flex items-center text-[#c5a880] mb-4 mt-2">
             <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
          </div> */}
          {/* <p className="text-[#594a40] text-sm leading-relaxed max-w-[380px]">
            A celebration of authentic Turkish cuisine, crafted with passion, <strong className="text-[#e10613] font-bold">charcoal grilled</strong> to perfection.
          </p> */}
        </div>
        
        {/* ROW 1: Adana Kebab */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between py-4 lg:py-6 relative border-b border-[#2d2219]/10 scroll-reveal-row scroll-reveal-row-1">
          
          {/* Dish 01 Text (Left 35%) */}
          <div className="w-full lg:w-[35%] flex flex-col lg:pt-4 relative z-10 lg:pl-20 mb-10 lg:mb-0">
            <div className="flex items-center w-full mb-3">
              <h3 className="font-serif text-2xl lg:text-[1.4rem] font-bold tracking-widest text-[#2d2219] whitespace-nowrap">
                {dishes[0].title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[#e10613] mb-4">
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
            </div>
            <p className="text-[#2d2219] text-sm font-medium leading-relaxed mb-6 max-w-[240px]">
              {dishes[0].description}
            </p>
            <a href="#menu" className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#e10613] hover:text-[#c00510] transition-colors">
              Discover Dish <span className="text-xs font-extrabold">&gt;</span>
            </a>
          </div>

          {/* Dish 01 Image (Right 62%) */}
          <div className="w-full lg:w-[62%] relative h-[300px] lg:h-[350px]">
            {/* Ribbon */}
            <div className="absolute top-10 -left-6 z-20 w-12 h-[90px] bg-[#750c0c] text-[#faf6f0] flex flex-col items-center pt-3 shadow-lg" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)" }}>
              <span className="font-serif text-[20px] font-medium leading-none mb-2 tracking-wider">{dishes[0].id}</span>
              <div className="w-5 h-[1px] bg-[#c5a880]/50 mb-1.5" />
              <svg className="w-3 h-3 text-[#c5a880] fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" /></svg>
            </div>
            {/* Image */}
            <div className="w-full h-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] image-sweep-right">
              <img src={dishes[0].image} alt={dishes[0].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* ROW 2: Mixed Grill */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-start justify-between py-4 lg:py-6 relative border-b border-[#2d2219]/10 scroll-reveal-row scroll-reveal-row-2">
          {/* Dish 02 Image (Left 62%) */}
          <div className="w-full lg:w-[62%] relative h-[300px] lg:h-[350px] mt-10 lg:mt-0">
             {/* Ribbon */}
            <div className="absolute top-10 -right-6 z-20 w-12 h-[90px] bg-[#750c0c] text-[#faf6f0] flex flex-col items-center pt-3 shadow-lg" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)" }}>
              <span className="font-serif text-[20px] font-medium leading-none mb-2 tracking-wider">{dishes[1].id}</span>
              <div className="w-5 h-[1px] bg-[#c5a880]/50 mb-1.5" />
              <svg className="w-3 h-3 text-[#c5a880] fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" /></svg>
            </div>
            {/* Image */}
            <div className="w-full h-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] image-sweep-left">
              <img src={dishes[1].image} alt={dishes[1].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>

          {/* Dish 02 Text (Right 35%) */}
          <div className="w-full lg:w-[35%] flex flex-col lg:pt-4 relative z-10 lg:pl-20 lg:pr-0">
            <h3 className="font-serif text-2xl lg:text-[1.4rem] font-bold tracking-widest text-[#2d2219] whitespace-nowrap mb-3">
              {dishes[1].title}
            </h3>
            <div className="flex items-center gap-2 text-[#e10613] mb-4">
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
            </div>
            <p className="text-[#2d2219] text-sm font-medium leading-relaxed mb-6 max-w-[240px]">
              {dishes[1].description}
            </p>
            <a href="#menu" className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#e10613] hover:text-[#c00510] transition-colors">
              Discover Dish <span className="text-xs font-extrabold">&gt;</span>
            </a>
          </div>
        </div>

        {/* ROW 3: Baklava */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between py-4 lg:py-6 relative scroll-reveal-row scroll-reveal-row-3">
          {/* Dish 03 Text (Left 35%) */}
          <div className="w-full lg:w-[35%] flex flex-col lg:pt-4 relative z-10 lg:pl-20 mb-10 lg:mb-0">
            <h3 className="font-serif text-2xl lg:text-[1.4rem] font-bold tracking-widest text-[#2d2219] whitespace-nowrap mb-3">
              {dishes[2].title}
            </h3>
            <div className="flex items-center gap-2 text-[#e10613] mb-4">
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
              <div className="w-[3px] h-[3px] rotate-45 bg-[#e10613]/60" />
            </div>
            <p className="text-[#2d2219] text-sm font-medium leading-relaxed mb-6 max-w-[240px]">
              {dishes[2].description}
            </p>
            <a href="#menu" className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#e10613] hover:text-[#c00510] transition-colors">
              Discover Dish <span className="text-xs font-extrabold">&gt;</span>
            </a>
          </div>

          {/* Dish 03 Image (Right 62%) */}
          <div className="w-full lg:w-[62%] relative h-[300px] lg:h-[350px]">
            {/* Ribbon */}
            <div className="absolute top-10 -left-6 z-20 w-12 h-[90px] bg-[#750c0c] text-[#faf6f0] flex flex-col items-center pt-3 shadow-lg" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)" }}>
              <span className="font-serif text-[20px] font-medium leading-none mb-2 tracking-wider">{dishes[2].id}</span>
              <div className="w-5 h-[1px] bg-[#c5a880]/50 mb-1.5" />
              <svg className="w-3 h-3 text-[#c5a880] fill-current" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" /></svg>
            </div>
            {/* Image */}
            <div className="w-full h-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] image-sweep-right">
              <img src={dishes[2].image} alt={dishes[2].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>

      </div>

      {/* Explore Menu Button */}
      <div className="mt-6 flex items-center justify-center gap-4 text-[#e10613] select-none pb-4 relative z-10 scroll-reveal-footer">
        <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 12l10 10 10-10L12 2z M12 6l6 6-6 6-6-6 6-6z" />
        </svg>
        <button className="border-2 border-[#c5a880] hover:border-[#e10613] text-[#2d2219] hover:text-[#e10613] hover:bg-black/5 px-10 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-[3px] transition-all duration-300 flex items-center gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.03)] bg-transparent">
          Explore Our Full Menu <span className="text-[#e10613] font-black text-xs ml-1">&gt;</span>
        </button>
        <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 12l10 10 10-10L12 2z M12 6l6 6-6 6-6-6 6-6z" />
        </svg>
      </div>

    </section>
  );
}


"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function MenuSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dishPositions, setDishPositions] = useState([0, 1, 2, 3, 4]);
  const [isHovered, setIsHovered] = useState(false);

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

  // Auto-rotation timer: rotates counter-clockwise every 1 second when not hovered and is visible
  useEffect(() => {
    if (isHovered || !isVisible) return;
    const interval = setInterval(() => {
      setDishPositions(prev => prev.map(pos => (pos + 4) % 5));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  const dishes = [
    {
      id: 0,
      title: "Mixed Appetizer Plate",
      image: "/home/explore-our-menu/Mixed-Appetizer-Plate.webp",
      alt: "Mixed Appetizer Plate",
    },
    {
      id: 1,
      title: "Hummus",
      image: "/home/explore-our-menu/Hummus.webp",
      alt: "Hummus",
    },
    {
      id: 2,
      title: "Spicy Mashed Salad (Ezme)",
      image: "/home/explore-our-menu/Spicy-Mashed-Salad.webp",
      alt: "Spicy Mashed Salad (Ezme)",
    },
    {
      id: 3,
      title: "Haydari",
      image: "/home/explore-our-menu/Haydari.webp",
      alt: "Haydari",
    },
    {
      id: 4,
      title: "Babaganoush",
      image: "/home/explore-our-menu/Babaganoush.webp",
      alt: "Babaganoush",
    }
  ];

  const handleDishClick = (clickedIdx: number) => {
    const currentPos = dishPositions[clickedIdx];
    if (currentPos === 0) return; // already in center

    setDishPositions(prev => {
      const next = [...prev];
      const shift = (5 - currentPos) % 5;
      for (let i = 0; i < next.length; i++) {
        next[i] = (next[i] + shift) % 5;
      }
      return next;
    });
  };

  const positionClasses = [
    // 0: Center (Big Platter)
    "absolute z-10 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#c5a880]/30 bg-[#594a40] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center",
    // 1: Top Left (Small)
    "absolute z-20 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[130px] lg:h-[130px] top-[8%] left-[16%] lg:top-[11%] lg:left-[18%] bg-[#2d2219] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center",
    // 2: Top Right (Small)
    "absolute z-20 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] top-[10%] right-[10%] lg:top-[14%] lg:right-[12%] bg-[#2d2219] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center",
    // 3: Bottom Right (Small)
    "absolute z-20 w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] lg:w-[110px] lg:h-[110px] bottom-[8%] right-[14%] lg:bottom-[10%] lg:right-[16%] bg-[#2d2219] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center",
    // 4: Bottom Left (Small)
    "absolute z-20 w-[75px] h-[75px] sm:w-[95px] sm:h-[95px] lg:w-[120px] lg:h-[120px] bottom-[12%] left-[12%] lg:bottom-[16%] lg:left-[14%] bg-[#2d2219] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center"
  ];

  return (
    <section
      ref={containerRef}
      className={`relative w-full bg-[#faf6f0] text-[#2d2219] pt-8 pb-8 overflow-hidden z-20 transition-all duration-700 ${isVisible ? "is-visible" : ""}`}
      id="menu"
    >

      {/* Background cityscape */}
      <div className="absolute bottom-0 left-0 w-[500px] lg:w-[700px] h-[250px] lg:h-[350px] text-[#c5a880] opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 200" className="w-full h-full fill-none stroke-current" strokeWidth="0.4">
          <path d="M0 190 L400 190" />
          <path d="M30 190 L30 160 C30 140 70 140 70 160 L70 190" />
          <path d="M45 160 L45 110 L55 110 L55 160" />
          <path d="M50 110 L50 90 L45 85 L50 80 L55 85 L50 90" />

          <path d="M120 190 L120 150 C120 130 160 130 160 150 L160 190" />
          <path d="M135 150 L135 90 L145 90 L145 150" />
          <path d="M140 90 L140 60 L135 55 L140 50 L145 55 L140 60" />

          <path d="M220 190 L220 130 C220 90 300 90 300 130 L300 190" />
          <path d="M240 130 C240 110 280 110 280 130" />

          <path d="M200 190 L200 100 L210 100 L210 190" />
          <path d="M310 190 L310 90 L320 90 L320 190" />

          {/* A few palm trees */}
          <path d="M80 190 L80 160 M80 160 C75 165 70 165 70 165 M80 160 C85 165 90 165 90 165 M80 160 C75 155 70 155 70 155 M80 160 C85 155 90 155 90 155" />
          <path d="M180 190 L180 170 M180 170 C175 175 170 175 170 175 M180 170 C185 175 190 175 190 175 M180 170 C175 165 170 165 170 165 M180 170 C185 165 190 165 190 165" />
        </svg>
      </div>


      {/* Centered Top Heading */}
      <div className="relative w-full max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-6 z-20">
        <div className="flex items-center gap-3 text-[#e10613] font-extrabold tracking-[4px] text-xs uppercase mb-4">
          <svg className="w-3 h-3 fill-current text-[#e10613]" viewBox="0 0 24 24"><path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" /></svg>
          <span>Our Menu</span>
          <svg className="w-3 h-3 fill-current text-[#e10613]" viewBox="0 0 24 24"><path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" /></svg>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#2d2219] uppercase tracking-tight">
          Our <span className="text-[#e10613] italic">Menu</span>
        </h2>
        <div className="w-full max-w-[200px] border-b border-[#c5a880]/40 mt-4 flex justify-center relative">
          <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-[#c5a880]/40 bg-[#faf6f0]" />
        </div>
      </div>

      <div className="relative w-full max-w-[1360px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between z-10">

        {/* Left: Text Content (width ~30%) */}
        <div className="w-full lg:w-[30%] flex flex-col items-start justify-center pr-10 mb-20 lg:mb-0 relative z-20">
          <div className="flex items-center gap-4 text-[#e10613] font-extrabold tracking-[4px] text-xs uppercase mb-6 scroll-reveal-menu-title">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span className="text-[#e10613]">Antalya</span>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>

          <h2 className="flex flex-col mb-6 leading-none scroll-reveal-menu-head">
            <span className="font-serif text-5xl md:text-6xl lg:text-[4.8rem] font-medium text-[#2d2219] tracking-tight mb-2">
              Explore
            </span>
            <span className="font-serif text-5xl md:text-6xl lg:text-[4.8rem] font-medium text-[#2d2219] tracking-tight mb-2">
              Our
            </span>
            <span className="font-serif text-5xl md:text-6xl lg:text-[4.8rem] font-medium text-[#e10613] tracking-tight italic pr-4">
              Menu
            </span>
          </h2>

          <div className="flex items-center w-full max-w-[200px] mb-6 scroll-reveal-menu-divider">
            <div className="flex-1 border-b border-[#2d2219]/20"></div>
            <div className="mx-3 text-[#c5a880]">
              <svg className="w-2.5 h-2.5 fill-current rotate-45" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" />
              </svg>
            </div>
            <div className="flex-1 border-b border-[#2d2219]/20"></div>
          </div>

          <p className="text-[#2d2219] text-sm font-medium leading-relaxed max-w-[260px] mb-12 scroll-reveal-menu-sub">
            A celebration of authentic Turkish cuisine, crafted with timeless recipes, the finest ingredients, and a passion for unforgettable flavours.
          </p>

          <a href="#menu" className="inline-flex items-center gap-3 text-xs font-extrabold tracking-[3px] uppercase text-[#e10613] hover:text-[#c00510] transition-colors group scroll-reveal-menu-action">
            View Full Menu
            <span className="text-[14px] font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>

        {/* Right: Circular Food Layout (width ~70%) */}
        <div className="w-full lg:w-[70%] flex justify-center lg:justify-center lg:-ml-12 items-center relative min-h-[600px] lg:min-h-[800px] select-none scroll-reveal-menu-orbit">

          {/* The Orbit Container */}
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] rounded-full border-[1px] border-[#c5a880]/50 flex items-center justify-center"
          >

            {/* The decorative diamonds on the orbit line (diagonal positions) */}
            <div className="absolute top-[14.6%] left-[14.6%] w-2 h-2 -ml-1 -mt-1 rotate-45 bg-[#c5a880] rounded-[1px]" />
            <div className="absolute top-[14.6%] right-[14.6%] w-2 h-2 -mr-1 -mt-1 rotate-45 bg-[#c5a880] rounded-[1px]" />
            <div className="absolute bottom-[14.6%] left-[14.6%] w-2 h-2 -ml-1 -mb-1 rotate-45 bg-[#c5a880] rounded-[1px]" />
            <div className="absolute bottom-[14.6%] right-[14.6%] w-2 h-2 -mr-1 -mb-1 rotate-45 bg-[#c5a880] rounded-[1px]" />

            {/* Central Mandala Pattern */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#c5a880]" strokeWidth="0.2">
                <circle cx="50" cy="50" r="45" />
                <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" />
                <path d="M18 18 L40 40 M82 18 L60 40 M82 82 L60 60 M18 82 L40 60" />
                <circle cx="50" cy="50" r="30" strokeDasharray="1 2" />
              </svg>
            </div>

            {/* The 5 Rotating Dishes (1 Big, 4 Small) */}
            {dishes.map((dish, idx) => {
              const posIndex = dishPositions[idx];
              const isCenter = posIndex === 0;
              return (
                <div
                  key={dish.id}
                  onClick={() => handleDishClick(idx)}
                  className={`rounded-full overflow-hidden menu-dish-transition cursor-pointer ${
                    isCenter ? "hover:scale-[1.02]" : "hover:scale-[1.08]"
                  } ${positionClasses[posIndex]}`}
                >
                  <div className={isCenter ? "w-[96%] h-[96%] rounded-full overflow-hidden border-[2px] border-[#2d2219] menu-dish-transition" : "w-[92%] h-[92%] rounded-full overflow-hidden menu-dish-transition"}>
                    <img 
                      src={dish.image} 
                      alt={dish.alt} 
                      className={`w-full h-full object-cover menu-dish-transition ${isCenter ? "scale-110" : "scale-105"}`} 
                    />
                  </div>
                </div>
              );
            })}


            {/* BADGES */}

            {/* 04 - Desserts (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center group cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#faf6f0] border border-[#c5a880] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#e10613] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-8 lg:h-8">
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                  <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                  <path d="M2 21h20" />
                  <path d="M7 8v3" />
                  <path d="M12 4v7" />
                  <path d="M17 8v3" />
                </svg>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 lg:mb-3 font-serif text-xl lg:text-2xl font-bold text-[#2d2219]">04</div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 pl-4 lg:pl-6 w-[140px] lg:w-[200px]">
                <h4 className="font-serif text-[15px] lg:text-lg font-bold text-[#e10613] tracking-widest mb-1 uppercase">Desserts</h4>
                <p className="text-xs lg:text-[13px] text-[#2d2219] font-medium leading-tight">Sweet endings<br />made timeless.</p>
              </div>
            </div>

            {/* 01 - Mezze (Right) */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center group cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#faf6f0] border border-[#c5a880] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#e10613] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-8 lg:h-8">
                  <path d="M4 12a8 8 0 0 0 16 0H4z" />
                  <path d="M12 5v2" />
                  <path d="M15 6v1" />
                  <path d="M9 6v1" />
                </svg>
              </div>
              <div className="absolute bottom-[70%] left-[80%] font-serif text-xl lg:text-2xl font-bold text-[#2d2219]">01</div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 lg:pt-5 w-[140px] lg:w-[160px] text-center">
                <h4 className="font-serif text-[15px] lg:text-lg font-bold text-[#e10613] tracking-widest mb-1 uppercase">Mezze</h4>
                <p className="text-xs lg:text-[13px] text-[#2d2219] font-medium leading-tight">Small plates,<br />big flavours.</p>
              </div>
            </div>

            {/* 02 - Charcoal Grill (Bottom) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 flex items-center justify-center group cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#faf6f0] border border-[#c5a880] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#e10613] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 lg:w-8 lg:h-8 rotate-45">
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <rect x="6" y="9" width="3" height="6" rx="1" />
                  <rect x="11" y="9" width="4" height="6" rx="1" />
                  <rect x="17" y="9" width="3" height="6" rx="1" />
                </svg>
              </div>
              <div className="absolute right-full top-1/2 -translate-y-1/2 pr-4 lg:pr-6 font-serif text-xl lg:text-2xl font-bold text-[#2d2219]">02</div>
              <div className="absolute top-1/2 left-full -translate-y-1/2 pl-4 lg:pl-6 w-[180px] lg:w-[200px]">
                <h4 className="font-serif text-[15px] lg:text-lg font-bold text-[#e10613] tracking-widest mb-1 uppercase whitespace-nowrap">Charcoal Grill</h4>
                <p className="text-xs lg:text-[13px] text-[#2d2219] font-medium leading-tight">Fire-grilled perfection,<br />rich in heritage.</p>
              </div>
            </div>

            {/* 03 - Seafood (Left) */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center group cursor-pointer">
              <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#faf6f0] border border-[#c5a880] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#e10613] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 lg:w-9 lg:h-9">
                  <path d="M6 10c0 0-4-2-4-2s2 4 2 4-2 4-2 4 4-2 4-2c2 1 5 1 8 0 4-2 6-4 6-4s-2-2-6-4c-3-1-6-1-8 0z" />
                  <circle cx="16" cy="10" r="1" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 lg:mb-3 font-serif text-xl lg:text-2xl font-bold text-[#2d2219]">03</div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 lg:pt-5 w-[140px] lg:w-[160px] text-center">
                <h4 className="font-serif text-[15px] lg:text-lg font-bold text-[#e10613] tracking-widest mb-1 uppercase">Seafood</h4>
                <p className="text-xs lg:text-[13px] text-[#2d2219] font-medium leading-tight">Fresh from the sea,<br />inspired by tradition.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

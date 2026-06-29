"use client";

import React, { useEffect, useRef, useState } from "react";

interface AddOnItem {
  title: string;
  subtitle?: string;
  desc: string;
  imgUrl: string;
  icon: React.ReactNode;
}

const addOns: AddOnItem[] = [
  {
    title: "Tray of Falafel",
    desc: "Crispy on the outside, tender on the inside. A timeless favourite.",
    imgUrl: "/catering/catering-excellence/Tray-of-Falafel.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
    )
  },
  {
    title: "Shola Gorbandi",
    desc: "Aromatic rice slow-cooked with tender lamb and chickpeas.",
    imgUrl: "/catering/catering-excellence/Shola-Gorbandi.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Kavurma",
    subtitle: "(Salted Veal)",
    desc: "Traditional Turkish veal, expertly seasoned and sautéed.",
    imgUrl: "/catering/catering-excellence/Kavurma.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    )
  },
  {
    title: "Mantu",
    subtitle: "(Afghan style dumplings)",
    desc: "Delicate dumplings filled with spiced meat and topped with garlic yogurt.",
    imgUrl: "/catering/catering-excellence/Mantu.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A8.997 8.997 0 0112 3c3.824 0 7.1 2.38 8.448 5.733" />
      </svg>
    )
  }
];

export default function CateringAddOns() {
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

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 lg:py-32 bg-[#faf6f0] text-[#2d2219] overflow-hidden border-t border-[#e5dacf]/50 select-none"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Text Details & Email box */}
          <div className={`lg:col-span-4 flex flex-col justify-center max-w-lg lg:max-w-none transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}>
            
            {/* Overtitle */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#e10613] text-[11px] md:text-xs font-extrabold tracking-[4px] uppercase">
                ✦ Catering Excellence ✦
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.15] text-[#2d2219] tracking-tight mb-6">
              Crafted to Impress. <br />
              Made to <span className="font-script text-[#c5a880] text-4xl sm:text-5xl lg:text-6xl -rotate-1 inline-block ml-1">Remember.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-[#2d2219]/95 text-sm sm:text-base leading-relaxed mb-10 font-semibold">
              From corporate luncheons to grand celebrations, we create exceptional culinary experiences filled with authentic Turkish flavours and unmatched hospitality.
            </p>

            {/* Email Box Callout */}
            <a 
              href="mailto:hello@antalyarestaurant.ca"
              className="group border border-[#c5a880]/30 hover:border-[#e10613]/50 bg-white hover:bg-white/80 rounded-2xl p-5 flex items-center justify-between gap-5 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(45,34,25,0.05)] relative overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Mail Icon in Gold Circle */}
                <div className="w-12 h-12 rounded-full border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] bg-[#faf6f0] shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-[#2d2219] text-xs sm:text-sm">
                    Bring Authentic Turkish Flavour
                  </span>
                  <span className="font-sans text-[11px] sm:text-xs text-[#2d2219]/85 mt-0.5 font-semibold">
                    to Your Event – Email Us Today.
                  </span>
                  <span className="font-sans font-bold text-[#e10613] text-xs sm:text-sm mt-1 decoration-transparent group-hover:underline">
                    hello@antalyarestaurant.ca
                  </span>
                </div>
              </div>

              {/* Gold Arrow */}
              <div className="text-[#e10613] shrink-0 group-hover:translate-x-1.5 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* RIGHT SIDE: 4 Dome Arched Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            {addOns.map((addOn, index) => (
              <div 
                key={index} 
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`flex flex-col items-center text-center relative group transition-all duration-[1000ms] ease-out transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Outlined gold circular icon above arch */}
                <div className="w-10 h-10 rounded-full border border-[#c5a880]/30 bg-white flex items-center justify-center text-[#c5a880] z-20 shadow-md relative -mb-5 transition-transform duration-500 group-hover:rotate-12">
                  {addOn.icon}
                </div>

                {/* Arched window image box */}
                <div className="w-full aspect-[2/3] overflow-hidden rounded-t-full border border-[#c5a880]/20 bg-[#faf6f0] relative z-10 shadow-sm">
                  <img 
                    src={addOn.imgUrl} 
                    alt={addOn.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/[0.03]"></div>
                </div>

                {/* Text Content */}
                <div className="mt-5 relative z-10 px-2">
                  <h3 className="font-serif text-base sm:text-lg text-[#2d2219] leading-tight font-medium">
                    {addOn.title}
                  </h3>
                  {addOn.subtitle && (
                    <span className="block font-serif text-xs text-[#2d2219]/85 mt-1 italic">
                      {addOn.subtitle}
                    </span>
                  )}

                  {/* Tiny custom gold separator ornament */}
                  <div className="flex items-center justify-center gap-2 my-2.5">
                    <div className="h-[0.5px] w-4 bg-[#c5a880]/30"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
                    <div className="h-[0.5px] w-4 bg-[#c5a880]/30"></div>
                  </div>

                  <p className="font-sans text-[11px] sm:text-xs text-[#2d2219]/90 leading-relaxed max-w-[140px] mx-auto font-semibold">
                    {addOn.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

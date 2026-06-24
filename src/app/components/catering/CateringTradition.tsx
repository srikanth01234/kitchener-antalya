import React from "react";
import Link from "next/link";

export default function CateringTradition() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#faf6f0] text-[#2d2219] overflow-hidden border-t border-[#e5dacf]/50">
      {/* Subtle background noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Text, bullet points, button */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Overtitle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 text-[#c5a880] flex items-center justify-center shrink-0">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                  <path d="M12 4C9 4 6 6.5 6 9.5V11H18V9.5C18 6.5 15 4 12 4ZM4 12V14H20V12H4ZM5 15V16C5 18.2 6.8 20 9 20H15C17.2 20 19 18.2 19 16V15H5Z"/>
                  <circle cx="12" cy="2" r="1.5"/>
                </svg>
              </div>
              <span className="font-sans text-[#c5a880] text-xs font-extrabold tracking-[3px] uppercase">
                ANTALYA CATERING
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#2d2219] tracking-tight mb-6">
              Culinary Experiences <br />
              Crafted with <span className="font-script text-[#9c1010] text-4xl sm:text-5xl lg:text-6xl -rotate-1 inline-block ml-1">Tradition</span>
            </h2>

            {/* Separator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
              <div className="h-[1px] w-8 bg-[#c5a880]/30"></div>
            </div>

            {/* Descriptions */}
            <p className="font-sans text-[#2d2219]/80 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              From intimate gatherings to grand celebrations, Antalya brings the rich flavours of Turkey to your events. Every dish is prepared with passion, beautifully presented, and served with unmatched hospitality.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-6 mb-10">
              
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#2d2219] text-sm">Signature charcoal-grilled kebabs</h4>
                  <p className="font-sans text-xs text-[#2d2219]/70 mt-0.5 font-medium">Perfectly seasoned, flame-grilled to perfection.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#2d2219] text-sm">Mezze platters & fresh salads</h4>
                  <p className="font-sans text-xs text-[#2d2219]/70 mt-0.5 font-medium">A variety of vibrant flavours made fresh daily.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-white border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#2d2219] text-sm">Handcrafted mains & special dishes</h4>
                  <p className="font-sans text-xs text-[#2d2219]/70 mt-0.5 font-medium">Authentic recipes for every taste and occasion.</p>
                </div>
              </div>

            </div>

            {/* Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[#9c1010] hover:bg-[#9c1010] text-[#9c1010] hover:text-white px-8 py-3.5 rounded-sm text-xs font-extrabold tracking-[2px] uppercase transition-all"
              >
                Explore Our Catering
                <span className="ml-2">&rarr;</span>
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: 3D Stone Podium & Arched Image Collage */}
          <div className="lg:col-span-7 flex flex-col justify-end items-center relative w-full h-[550px] lg:h-[600px] mt-8 lg:mt-0">
            
            {/* Background elements */}
            <div className="absolute top-0 left-[20%] opacity-[0.08] rotate-12 pointer-events-none scale-125 z-0">
              <svg width="120" height="120" viewBox="0 0 24 24" className="fill-[#c5a880]">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>
            
            {/* Grid watermark dot pattern */}
            <div className="absolute top-4 right-[10%] opacity-25 select-none pointer-events-none hidden sm:block">
              <svg width="60" height="40" className="text-[#c5a880] fill-current">
                <pattern id="dotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1" />
                </pattern>
                <rect width="60" height="40" fill="url(#dotGrid)" />
              </svg>
            </div>
            <div className="absolute top-10 left-[5%] opacity-25 select-none pointer-events-none hidden sm:block">
              <svg width="40" height="60" className="text-[#c5a880] fill-current">
                <rect width="40" height="60" fill="url(#dotGrid)" />
              </svg>
            </div>

            {/* 1. Large back arch: Long dining table layout */}
            <div className="absolute top-0 right-[15%] w-[65%] sm:w-[55%] aspect-[1/1.2] rounded-t-full border border-[#c5a880]/15 overflow-hidden z-10 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop" 
                alt="Intimate banquet table setup" 
                className="w-full h-full object-cover brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-[#2d2219]/15"></div>
            </div>

            {/* 2. Front left arch: Mezze platters */}
            <div className="absolute bottom-[80px] left-[5%] w-[33%] sm:w-[28%] aspect-[1/1.1] rounded-t-full border-2 border-white overflow-hidden z-20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=400&auto=format&fit=crop" 
                alt="Turkish Mezze" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* 3. Front center arch: Grilling kebabs */}
            <div className="absolute bottom-[40px] left-[35%] w-[38%] sm:w-[32%] aspect-[1/1.3] rounded-t-full border-[3px] border-white overflow-hidden z-30 shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400&auto=format&fit=crop" 
                alt="Grilling Kebabs" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* 4. Front right card (rounded rect): Plate of kebabs */}
            <div className="absolute bottom-[90px] right-[2%] w-[33%] sm:w-[28%] aspect-[1/1] rounded-2xl border-2 border-white overflow-hidden z-20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop" 
                alt="Kebab Platter" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* 5. Intricate circular badge overlapping upper right of collage */}
            <div className="absolute top-[80px] right-[2%] w-24 h-24 sm:w-28 sm:h-28 z-20 drop-shadow-lg select-none pointer-events-none">
              <div className="w-full h-full rounded-full bg-white border border-[#c5a880]/30 flex items-center justify-center relative p-1.5 animate-[spin_40s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2d2219] text-[#2d2219]">
                  <path id="badgeCurve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text fontSize="8" fontWeight="800" letterSpacing="2.2" className="uppercase font-sans">
                    <textPath href="#badgeCurve" startOffset="0%">
                      AUTHENTIC FLAVOURS • TIMELESS HOSPITALITY • 
                    </textPath>
                  </text>
                </svg>
                {/* Center Star/Flower Emblem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#c5a880] fill-none stroke-current" strokeWidth="1" viewBox="0 0 24 24" style={{ animation: "spin 40s linear infinite reverse" }}>
                    <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                    <circle cx="12" cy="12" r="2.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 6. Stone Block Podium Base */}
            <div 
              className="w-full h-20 bg-gradient-to-b from-[#efe6d8] via-[#e5dacf] to-[#cca779]/30 rounded-xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] border-t border-white border-b border-[#2d2219]/10 relative overflow-hidden z-25 shrink-0 flex items-center justify-center"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
              }}
            >
              {/* Highlight bevel shadow */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-white/40"></div>
              {/* Internal marble/stone vein decor lines */}
              <div className="absolute left-[-20%] right-0 top-0 bottom-0 opacity-15 rotate-[15deg] border-l-2 border-r border-[#c5a880]/30 pointer-events-none"></div>
            </div>

          </div>

        </div>

        {/* BOTTOM VALUES BANNER */}
        <div className="mt-20 lg:mt-28 bg-white border border-[#e5dacf]/70 rounded-3xl p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(45,34,25,0.06)] relative z-20">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            
            {/* Value 1 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m-7.25 15h14.5a.75.75 0 00.75-.75V17a7 7 0 00-14 0v.25a.75.75 0 00.75.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M12 6a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  TAILORED MENUS
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Customized catering for every occasion and guest preference.
                </span>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  FRESH INGREDIENTS
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  We use the finest local ingredients for exceptional taste and quality.
                </span>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4v2h8V6a4 4 0 00-4-4zM6 8h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  EXPERT CHEFS
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Crafted by experienced chefs who bring authentic Turkish flavours to life.
                </span>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  HOSPITALITY FIRST
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Dedicated to providing warm service and memorable experiences.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

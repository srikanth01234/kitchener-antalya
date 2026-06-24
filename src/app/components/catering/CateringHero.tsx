import React from "react";
import Link from "next/link";

export default function CateringHero() {
  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] bg-[#faf6f0] flex flex-col lg:flex-row items-center overflow-hidden pt-20 lg:pt-24 pb-12 lg:pb-0 border-b border-[#e5dacf]/50">
      {/* Decorative subtle grain/noise background */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center px-6 md:px-12 lg:pl-[calc((100vw-min(100vw,1440px))/2+4rem)] lg:pr-10 z-20 pb-12 lg:pb-0 relative">
        
        {/* Subtle background text flourish */}
        <div className="absolute top-10 -left-10 opacity-[0.03] pointer-events-none select-none z-0 hidden lg:block">
          <span className="font-script text-[12rem] text-[#9c1010] leading-none">Catering</span>
        </div>

        <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
          {/* Overtitle */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[#c5a880] w-6 h-6 flex items-center justify-center shrink-0">
              <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 4C9 4 6 6.5 6 9.5V11H18V9.5C18 6.5 15 4 12 4ZM4 12V14H20V12H4ZM5 15V16C5 18.2 6.8 20 9 20H15C17.2 20 19 18.2 19 16V15H5Z"/>
                <circle cx="12" cy="2" r="1.5"/>
              </svg>
            </div>
            <span className="font-sans text-[#9c1010] text-[11px] md:text-xs font-extrabold tracking-[4px] uppercase">
              ANTALYA
            </span>
            <div className="h-[1px] w-8 bg-[#c5a880]/50 ml-1"></div>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5rem] text-[#2d2219] leading-[1.05] tracking-tight mb-2">
            Crafted Catering. <br />
            <span className="text-[#9c1010]">Made Memorable.</span>
          </h1>

          {/* Script Subtitle */}
          <div className="mb-8">
            <span className="font-script text-4xl sm:text-5xl lg:text-[3.5rem] text-[#c5a880] -rotate-2 inline-block -ml-2">
              For Every Occasion
            </span>
          </div>

          {/* Description */}
          <p className="font-sans text-[#2d2219]/80 text-sm sm:text-base leading-relaxed mb-10 max-w-[420px] font-medium">
            From intimate gatherings to grand celebrations, Antalya brings the authentic taste of Turkey to your table. Our catering is designed to impress, delight, and create lasting memories.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-[#9c1010] hover:bg-[#7a0c0c] text-white px-8 py-4 rounded-sm text-xs font-extrabold tracking-[2px] uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
            >
              Explore Catering Menu
              <span>&rarr;</span>
            </Link>

            <button className="group flex items-center gap-3 text-[#2d2219] hover:text-[#9c1010] transition-colors w-full sm:w-auto justify-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a880]/50 flex items-center justify-center group-hover:border-[#9c1010] group-hover:bg-[#9c1010]/5 transition-all">
                <svg className="w-4 h-4 text-[#9c1010] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="font-sans text-[11px] font-extrabold tracking-[2px] uppercase">
                Watch Our Story
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT - Image & Masking */}
      <div className="w-full lg:w-[52%] h-[50vh] sm:h-[60vh] lg:h-[95vh] relative z-10 flex items-center justify-end">
        
        {/* The masked image wrapper */}
        <div 
          className="relative w-full h-full lg:w-[120%] lg:-mr-[10%] bg-black"
          style={{
            /* Using an inline SVG for a rough edge/brush stroke mask effect */
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,0 C15,10 5,20 12,30 C18,40 2,50 15,60 C25,70 5,80 15,90 C22,95 10,100 20,100 L100,100 L100,0 Z' fill='black' filter='url(%23roughen)'/%3E%3Cfilter id='roughen'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='2' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='4' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,0 C15,10 5,20 12,30 C18,40 2,50 15,60 C25,70 5,80 15,90 C22,95 10,100 20,100 L100,100 L100,0 Z' fill='black' filter='url(%23roughen)'/%3E%3Cfilter id='roughen'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='2' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='4' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3C/svg%3E")`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'left center',
            maskPosition: 'left center',
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop" 
            alt="Turkish Catering Feast" 
            className="w-full h-full object-cover object-[30%_50%] opacity-90"
          />
          {/* Subtle gradient overlay to match tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d2219]/20 to-transparent mix-blend-multiply"></div>
        </div>

        {/* Circular Stamp Badge overlapping bottom-left of the image */}
        <div className="absolute bottom-[-10px] right-8 lg:bottom-16 lg:left-[10%] xl:left-[15%] w-36 h-36 md:w-44 md:h-44 z-30 drop-shadow-xl animate-[spin_30s_linear_infinite]">
          <div className="w-full h-full rounded-full bg-[#7a0c0c] border-4 border-[#faf6f0] flex items-center justify-center relative p-2 shadow-inner shadow-black/20">
            {/* Circular Text using SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#faf6f0] text-[#faf6f0]">
              <path id="curve" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
              <text fontSize="9.5" fontWeight="900" letterSpacing="2.5" className="uppercase font-sans">
                <textPath href="#curve" startOffset="0%">
                  AUTHENTIC FLAVOURS • WARM HOSPITALITY • 
                </textPath>
              </text>
            </svg>
            {/* Center Icon (Cloche) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#c5a880] stroke-current fill-none -rotate-[30deg]" strokeWidth="1.5" viewBox="0 0 24 24" style={{ animation: "spin 30s linear infinite reverse" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m-7.25 15h14.5a.75.75 0 00.75-.75V17a7 7 0 00-14 0v.25a.75.75 0 00.75.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M12 6a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

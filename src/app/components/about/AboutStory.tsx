import React from "react";
import Link from "next/link";

export default function AboutStory() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#faf6f0] text-[#2d2219] overflow-hidden">
      
      {/* Decorative dot grids and vectors */}
      <div className="absolute top-10 right-[25%] opacity-[0.08] select-none pointer-events-none rotate-12">
        <svg width="100" height="100" viewBox="0 0 24 24" className="fill-[#c5a880]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.12 0 2-.88 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.93-.68 3.7-1.8 5.1z"/>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* UPPER PART: Split Story & Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT: Our Story Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Overtitle */}
            <div className="flex items-center gap-4 mb-6">
              {/* Rosette Flower Icon */}
              <div className="w-6 h-6 text-[#c5a880] flex items-center justify-center shrink-0">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d2219] font-medium leading-none">
                OUR <span className="text-[#9c1010]">STORY</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <span className="font-script text-3xl sm:text-4xl text-[#c5a880] inline-block -ml-1">
                A Tradition of Taste & Hospitality
              </span>
            </div>

            {/* Story Paragraphs */}
            <div className="flex flex-col gap-5 font-sans text-[#2d2219]/80 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium">
              <p>
                Antalya began with a simple vision – to share the flavours, warmth, and culinary traditions of Turkey with our community. What started as a humble kitchen has grown into a beloved dining destination, celebrated for its hospitality, charcoal-grilled artistry, and authentic taste.
              </p>
              <p>
                From handcrafted dishes to time-honoured recipes passed through generations, every plate tells a story of heritage and passion. Our chefs blend tradition with refined technique, using the freshest ingredients to create experiences that feel familiar yet unforgettable.
              </p>
              <p>
                At Antalya, dining is more than a meal – it is a celebration of culture, flavour, and shared moments.
              </p>
            </div>

            {/* Button */}
            <div>
              <Link 
                href="/menu"
                className="inline-flex items-center justify-center bg-[#7a0c0c] hover:bg-[#5c0909] text-white px-8 py-4 rounded-sm text-xs font-extrabold tracking-[2px] uppercase transition-all shadow-md hover:shadow-lg gap-3"
              >
                View Our Menu
                <span>&rarr;</span>
              </Link>
            </div>

          </div>

          {/* RIGHT: Overlapping Arches Collage */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full h-[450px] sm:h-[500px]">
            
            {/* Dot Grid Watermark */}
            <div className="absolute top-4 left-[20%] opacity-20 select-none pointer-events-none">
              <svg width="70" height="50" className="text-[#c5a880] fill-current">
                <pattern id="storyDotGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1" />
                </pattern>
                <rect width="70" height="50" fill="url(#storyDotGrid)" />
              </svg>
            </div>

            {/* Curved decorative block under the arches */}
            <div className="absolute bottom-[30px] left-[15%] w-[45%] h-[40px] rounded-full bg-[#efe6d8]/50 z-0 pointer-events-none"></div>

            {/* Left Arch Image (Olive tree) */}
            <div className="absolute left-[8%] bottom-[40px] w-[45%] aspect-[1/1.1] rounded-t-full border border-[#c5a880]/15 overflow-hidden z-10 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" 
                alt="Antalya dining room seating" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right Arch Image (Kitchen & seating) */}
            <div className="absolute right-[5%] top-[10px] w-[55%] aspect-[1/1.2] rounded-t-full border border-[#c5a880]/15 overflow-hidden z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop" 
                alt="Antalya interior view" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2d2219]/5"></div>
            </div>

            {/* Circular badge overlapping the middle/bottom right */}
            <div className="absolute bottom-[10px] left-[35%] w-32 h-32 sm:w-36 sm:h-36 z-25 drop-shadow-xl select-none pointer-events-none">
              <div className="w-full h-full rounded-full bg-[#7a0c0c] border-4 border-[#faf6f0] flex flex-col items-center justify-center relative p-3">
                {/* Circular Stamp Text */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-[#faf6f0] text-[#faf6f0]">
                  <path id="aboutStampCurve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text fontSize="7.2" fontWeight="900" letterSpacing="1.8" className="uppercase font-sans">
                    <textPath href="#aboutStampCurve" startOffset="0%">
                      AUTHENTIC CUISINE • WARM HOSPITALITY • TIMELESS MEMORIES • 
                    </textPath>
                  </text>
                </svg>
                {/* Center cloche icon */}
                <div className="z-10 mt-1">
                  <svg className="w-8 h-8 text-[#c5a880] fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m-7.25 15h14.5a.75.75 0 00.75-.75V17a7 7 0 00-14 0v.25a.75.75 0 00.75.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20M12 6a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* LOWER PART: Values horizontal banner */}
        <div className="bg-white border border-[#e5dacf]/70 rounded-3xl p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(45,34,25,0.06)] relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            
            {/* Value 1 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  OUR HERITAGE
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Rooted in Turkish traditions, crafted with passion.
                </span>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4v2h8V6a4 4 0 00-4-4zM6 8h12v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  OUR CHEFS
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Experienced chefs combining tradition with innovation.
                </span>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  OUR INGREDIENTS
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Fresh, local, and carefully selected for every dish.
                </span>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-4 items-center group">
              <div className="w-14 h-14 rounded-full bg-[#faf6f0] border border-[#e5dacf] flex items-center justify-center text-[#c5a880] shrink-0 transition-colors duration-300 group-hover:bg-[#9c1010]/5 group-hover:border-[#9c1010]/20 group-hover:text-[#9c1010]">
                <svg className="w-7 h-7 fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-extrabold text-[11px] text-[#9c1010] tracking-[2px] uppercase">
                  OUR PROMISE
                </span>
                <span className="font-sans text-xs text-[#2d2219]/70 mt-1 font-semibold leading-normal">
                  Exceptional food, warm service, and unforgettable experiences.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

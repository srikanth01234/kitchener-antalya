import React from "react";
import Link from "next/link";

const FeaturedDish = () => {
  return (
    <section className="w-full bg-[#fdfdfb] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Image with Badge */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-visible">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=1000&auto=format&fit=crop"
              alt="Mezze Platter"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Chef's Recommendation Badge */}
          <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-[#fdfdfb] rounded-full flex items-center justify-center p-2 shadow-lg border border-[#e6e2d8]">
            {/* Inner dashed ring */}
            <div className="w-full h-full rounded-full border border-dashed border-[#B89564] flex flex-col items-center justify-center gap-1 relative p-4">
               {/* Curved Text Placeholder (Approximated with absolute positioned elements or just normal text for simplicity in Tailwind without external libs, but let's use a simple stack) */}
               <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                 <path id="curve" d="M 15 50 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="transparent" />
                 <text className="text-[10px] uppercase font-bold tracking-[0.2em] fill-[#7a1f1f]">
                   <textPath href="#curve" startOffset="50%" textAnchor="middle">
                     • CHEF'S RECOMMENDATION • CHEF'S RECOMMENDATION
                   </textPath>
                 </text>
               </svg>
               
               {/* Chef Hat Icon */}
               <svg className="w-8 h-8 text-[#7a1f1f] z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5V18a3 3 0 003 3h0a3 3 0 003-3v-4.5m-6 0h6m-6 0C8.5 13.5 7 12 7 10.5C7 8 8 7 9.5 7h5c1.5 0 2.5 1 2.5 3.5C17 12 15.5 13.5 15 13.5h-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c1.5 0 2.5 1.5 2.5 2.5m-5 0c0-1 1-2.5 2.5-2.5" />
               </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="flex flex-col items-start pt-8 lg:pt-0">
          {/* Overtitle */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs md:text-sm font-sans tracking-widest uppercase font-semibold text-[#333]">
              FEATURED DISH
            </span>
            <div className="w-12 h-[1px] bg-[#B89564]" />
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-serif text-[#333] mb-6">
            MEZZE PLATTER
          </h3>

          {/* Description */}
          <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-8">
            A perfect introduction to Turkish cuisine. A variety of hummus, haydari,
            ezme, and muhammara served with olives, feta, and warm bread.
          </p>

          {/* Price */}
          <p className="text-2xl font-bold font-serif text-[#7a1f1f] mb-10">
            $24.99
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-12 w-full">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-[#7a1f1f] text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-colors hover:bg-[#5c1717]"
            >
              VIEW DETAILS
              <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-[#e6e2d8] text-[#B89564] hover:bg-[#B89564] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-[#e6e2d8] text-[#B89564] hover:bg-[#B89564] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;

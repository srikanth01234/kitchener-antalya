import React from "react";
import Link from "next/link";

const MenuCTA = () => {
  return (
    <section className="relative w-full py-20 px-4 bg-[#FAF8F5] overflow-hidden flex justify-center">
      {/* Background Islamic Geometric Pattern Watermark */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23B89564' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl md:rounded-[4rem] shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Left Icon & Text Group */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          {/* Cloche Icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAF8F5] border border-[#e6e2d8] flex items-center justify-center flex-shrink-0 text-[#B89564]">
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5h15c0-4.14-3.36-7.5-7.5-7.5zm0 0v-2.5m0 2.5a2 2 0 100-4 2 2 0 000 4zm-9.5 10h19v3a2 2 0 01-2 2h-15a2 2 0 01-2-2v-3z" />
            </svg>
          </div>
          
          <h3 className="text-lg md:text-xl font-serif text-[#333] uppercase tracking-wide">
            READY TO EXPERIENCE AUTHENTIC TURKISH CUISINE?
          </h3>
        </div>

        {/* Right Button */}
        <Link
          href="#"
          className="flex items-center justify-center bg-[#7a1f1f] text-white px-8 py-4 md:py-5 rounded-full text-sm md:text-base font-bold tracking-widest uppercase transition-colors hover:bg-[#5c1717] w-full md:w-auto flex-shrink-0"
        >
          RESERVE YOUR TABLE
          <svg className="w-4 h-4 md:w-5 md:h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default MenuCTA;

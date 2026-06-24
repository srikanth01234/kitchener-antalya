"use client";

import React, { useState } from "react";

const categories = [
  "ALL MENU",
  "APPETIZERS",
  "SALADS",
  "KEBABS",
  "DÖNER",
  "SANDWICHES & WRAPS",
];

const MenuIntro = () => {
  const [activeTab, setActiveTab] = useState("ALL MENU");

  return (
    <section className="w-full bg-[#fdfdfb] py-16 px-4 flex flex-col items-center">
      {/* Script Title & Flourish */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-script text-3xl md:text-4xl text-[#B89564]">
          Antalya
        </span>
        <svg
          className="w-4 h-4 text-[#B89564]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-serif text-[#7a1f1f] text-center mb-6 tracking-wide uppercase">
        A JOURNEY OF <br className="hidden md:block" /> TURKISH FLAVOURS
      </h2>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center mb-8">
        <svg
          className="w-5 h-5 text-[#B89564]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-600 font-sans text-sm md:text-base leading-relaxed mb-12">
        Our menu is a celebration of traditional Turkish cuisine, crafted with authentic
        ingredients and timeless recipes. From sizzling grills to refreshing mezze,
        every dish tells a story of Anatolian heritage.
      </p>

      {/* Category Navigation Bar */}
      <div className="w-full max-w-6xl overflow-x-auto no-scrollbar pb-4">
        <div className="flex items-center justify-start md:justify-center gap-3 md:gap-4 min-w-max px-4">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-sans text-xs md:text-sm tracking-widest uppercase font-semibold ${
                  isActive
                    ? "bg-[#7a1f1f] border-[#7a1f1f] text-white"
                    : "bg-transparent border-[#e6e2d8] text-[#B89564] hover:border-[#B89564]"
                }`}
              >
                {/* Simplified Icon Placeholders based on category */}
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white/20">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                     <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                {category}
              </button>
            );
          })}
          
          {/* Next Arrow Button */}
          <button className="flex items-center justify-center w-11 h-11 rounded-full border border-[#e6e2d8] text-[#B89564] hover:border-[#B89564] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuIntro;

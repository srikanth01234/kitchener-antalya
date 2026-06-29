"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const menuCategoriesData = [
  { name: "APPETIZERS", count: "12 Items", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=200&auto=format&fit=crop" },
  { name: "SPECIAL MIX PLATTERS", count: "6 Items", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=200&auto=format&fit=crop" },
  { name: "SALADS", count: "8 Items", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { name: "SPECIALTY DISHES", count: "14 Items", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=200&auto=format&fit=crop" },
  { name: "KEBABS", count: "16 Items", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { name: "PIDES", count: "8 Items", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop" },
  { name: "DÖNER", count: "6 Items", image: "https://images.unsplash.com/photo-1529144415895-6aaf8be872fb?q=80&w=200&auto=format&fit=crop" },
  { name: "SIDES", count: "9 Items", image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=200&auto=format&fit=crop" },
  { name: "SANDWICHES & WRAPS", count: "10 Items", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=200&auto=format&fit=crop" },
  { name: "DRINKS", count: "15 Items", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=200&auto=format&fit=crop" },
  { name: "DESSERTS", count: "10 Items", image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=200&auto=format&fit=crop" },
];

const MenuCategories = () => {
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
      className="w-full bg-[#fdfdfb] py-16 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h3 className={`text-2xl md:text-3xl font-serif text-[#333] mb-4 uppercase tracking-wide transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          EXPLORE OUR MENU
        </h3>
        
        {/* Small Decorative Diamond */}
        <svg className={`w-4 h-4 text-[#B89564] mb-12 transition-all duration-1000 delay-150 ease-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {menuCategoriesData.map((category, index) => {
            const isLastOddItem = index === menuCategoriesData.length - 1 && menuCategoriesData.length % 2 !== 0;
            // Stagger delay based on index for natural waving reveal
            const delayClass = `delay-[${(index % 4) * 100}ms]`;
            const staggerStyles = {
              transitionDelay: `${(index % 4) * 100}ms`
            };

            return (
              <Link
                href="#"
                key={category.name}
                style={staggerStyles}
                className={`group flex items-center bg-white rounded-3xl p-3 shadow-sm hover:shadow-md transition-all duration-700 ease-out transform border border-gray-100 ${
                  isLastOddItem ? "md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto" : ""
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Details */}
                <div className="flex flex-col ml-4 md:ml-6 flex-grow">
                  <span className="font-serif text-[#333] font-semibold text-lg md:text-xl tracking-wide group-hover:text-[#e10613] transition-colors">
                    {category.name}
                  </span>
                  <span className="text-gray-500 font-sans text-sm mt-1">
                    {category.count}
                  </span>
                </div>

                {/* Right Arrow Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e6e2d8] text-[#B89564] mr-2 md:mr-4 group-hover:bg-[#e10613] group-hover:border-[#e10613] group-hover:text-white transition-colors flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;

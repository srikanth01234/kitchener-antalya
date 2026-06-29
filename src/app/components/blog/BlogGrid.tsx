"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function BlogGrid() {
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

  const stories = [
    {
      id: 1,
      category: 'GRILL MASTERY',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: 'Secrets of\nCharcoal Grilling',
      date: 'November 2, 2025',
      excerpt: 'Explore the art of charcoal grilling — mastering heat, smoke, seasoning, and technique for deep flavor and unforgettable dining.',
      image: '/blog/blogs/blog-charcoal-grilling.webp'
    },
    {
      id: 2,
      category: 'SWEET TRADITIONS',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'A Taste of\nSweet Legacy',
      date: 'November 20, 2025',
      excerpt: 'Explore the heritage and art of Turkish baklava and desserts, where sweet traditions bring people together.',
      image: '/blog/blogs/blog-sweet-legacy.webp'
    },
    {
      id: 3,
      category: 'INGREDIENT SPOTLIGHT',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'The Heart of\nMediterranean Ingredients',
      date: 'December 5, 2025',
      excerpt: 'From olive oil to fresh herbs, discover the wholesome ingredients that elevate Turkish cuisine.',
      image: '/blog/blogs/blog-Mediterranean-Ingredients.webp'
    }
  ];

  return (
    <section 
      ref={containerRef}
      className={`w-full py-20 bg-[#faf6f0] transition-all duration-700 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d2219] font-medium tracking-tight mb-4 scroll-reveal-fade-up">
            More Stories
          </h2>
          <div className="flex items-center gap-2 scroll-reveal-fade-up" style={{ transitionDelay: '150ms' }}>
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/70 rotate-45"></div>
            <div className="w-12 h-[1px] bg-[#c5a880]/40"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {stories.map((story, idx) => (
            <div 
              key={story.id} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group border border-[#e5dacf]/40 scroll-reveal-grid-item"
              style={{ transitionDelay: `${150 + idx * 150}ms` }}
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title.replace('\n', ' ')} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-0 left-0 bg-[#c5a880] text-white px-4 py-2.5 rounded-br-lg flex items-center gap-2">
                  {story.icon}
                  <span className="text-[9px] font-bold tracking-[2px] uppercase">{story.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-[#2d2219] font-medium leading-[1.3] mb-3">
                  {story.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i === 1 ? <span className="text-[#e10613]">{line}</span> : line}
                      {i === 0 && <br/>}
                    </React.Fragment>
                  ))}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-[#2d2219]/75 text-[11px] font-semibold mb-4 uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{story.date}</span>
                </div>

                {/* Excerpt */}
                <p className="text-[#2d2219]/90 text-[13px] leading-relaxed mb-6 flex-1">
                  {story.excerpt}
                </p>

                {/* Link */}
                <Link href="#" className="flex items-center gap-2 text-[#e10613] font-bold tracking-[2px] text-[10px] uppercase hover:text-[#c00510] transition-colors mt-auto">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

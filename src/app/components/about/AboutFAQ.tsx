"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  detailedQuestion: React.ReactNode;
  answerParagraphs: string[];
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Antalya Restaurant authentic?",
    detailedQuestion: <>What makes Antalya <span className="text-[#c5a880] italic font-semibold font-serif">authentic?</span></>,
    answerParagraphs: [
      "We prepare every dish using traditional Turkish recipes, fresh local ingredients, and charcoal grilling, delivering authentic flavours and warm hospitality inspired by generations of Turkish culinary heritage."
    ],
    ctaText: "EXPLORE OUR STORY",
    ctaLink: "/about",
    imageUrl: "/faq_hours.png",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m9-13c1.168-1.077 2.754-1.553 4.5-1.553S19.832 5.477 21 6.253v13" />
      </svg>
    )
  },
  {
    question: "Do you offer vegetarian and vegan options?",
    detailedQuestion: <>Vegetarian & Vegan <span className="text-[#c5a880] italic font-semibold font-serif">Options?</span></>,
    answerParagraphs: [
      "Yes! We serve a delicious range of vegetarian and vegan-friendly mezze, grilled vegetables, fresh salads, authentic pides, and customisable dishes prepared to suit every preference."
    ],
    ctaText: "EXPLORE MENU",
    ctaLink: "/menu",
    imageUrl: "/faq_dietary.png",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    )
  },
  {
    question: "Can you accommodate large groups or private events?",
    detailedQuestion: <>Private Events & <span className="text-[#c5a880] italic font-semibold font-serif">Groups?</span></>,
    answerParagraphs: [
      "Absolutely. We welcome family gatherings, corporate dinners, birthdays, and private celebrations, offering spacious seating and customised dining experiences tailored to your group and occasion."
    ],
    ctaText: "EXPLORE CATERING",
    ctaLink: "/catering",
    imageUrl: "/faq_catering.png",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    question: "What are your most popular dishes?",
    detailedQuestion: <>Most Popular <span className="text-[#c5a880] italic font-semibold font-serif">Dishes?</span></>,
    answerParagraphs: [
      "Our signature favourites include charcoal-grilled kebabs, mixed grill platters, freshly prepared döner, authentic Turkish pides, and handcrafted baklava, loved by guests for their rich flavours."
    ],
    ctaText: "EXPLORE MENU",
    ctaLink: "/menu",
    imageUrl: "/about/faq/faq.webp",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12h20c0-5.52-4.48-10-10-10zm0 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 14h20v2H2zM6 18h12v2H6z" />
      </svg>
    )
  },
  {
    question: "Do you take reservations?",
    detailedQuestion: <>Do you take <span className="text-[#c5a880] italic font-semibold font-serif">reservations?</span></>,
    answerParagraphs: [
      "Yes. We recommend reserving your table in advance, especially on weekends and holidays, to enjoy your preferred dining time and a smooth, welcoming restaurant experience."
    ],
    ctaText: "RESERVE A TABLE",
    ctaLink: "/contact",
    imageUrl: "/faq_reservation.png",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  }
];

export default function AboutFAQ() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [displayIdx, setDisplayIdx] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const activeFAQ = faqs[displayIdx];

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

  const handleFAQChange = (idx: number) => {
    if (idx === displayIdx || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayIdx(idx);
      setActiveIdx(idx);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200); // 200ms fade out transition time
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className={`relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#faf6f0] text-[#2d2219] overflow-hidden transition-all duration-700 ${isVisible ? "is-visible" : ""}`}
    >
      {/* Background soft lighting effects */}
      <div className="absolute top-0 right-0 w-[50%] h-[120%] bg-white rounded-l-full opacity-60 pointer-events-none transform translate-x-1/4 -translate-y-1/4 blur-3xl"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3.5 mb-5 text-[#c5a880] scroll-reveal-fade-up">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2c-4.97 0-9 4.03-9 9h18c0-4.97-4.03-9-9-9zm0 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8 4h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1z" />
            </svg>
            <span className="w-[1px] h-4.5 bg-[#c5a880]/40"></span>
            <span className="font-sans text-[#2d2219] text-xs font-black tracking-[4px] uppercase leading-none">
              ANTALYA
            </span>
            <span className="w-[1px] h-4.5 bg-[#c5a880]/40"></span>
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5v6a3 3 0 01-3 3h-1m4-9v9m-7-9v5a2 2 0 01-2 2H7V2" />
            </svg>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#2d2219] tracking-tight mb-5 scroll-reveal-fade-up" style={{ transitionDelay: '150ms' }}>
            Frequently Asked <span className="text-primary italic font-semibold">Questions</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6 scroll-reveal-fade-up" style={{ transitionDelay: '300ms' }}>
            <div className="h-[0.5px] w-12 bg-[#c5a880]/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-[#c5a880] bg-[#faf6f0]"></div>
            <div className="h-[0.5px] w-12 bg-[#c5a880]/40"></div>
          </div>

          <p className="font-sans text-[#2d2219] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium scroll-reveal-fade-up" style={{ transitionDelay: '450ms' }}>
            Find answers to common questions about Antalya, our culinary philosophy, and services. If you need more information, we're always here to help.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: FAQ Accordion Selector */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isActive = activeIdx === index;
              return (
                <button
                  key={index}
                  onClick={() => handleFAQChange(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-all duration-500 rounded-2xl border cursor-pointer group focus:outline-none scroll-reveal-fade-up ${isActive
                      ? "bg-[#90040a] border-[#90040a] shadow-lg shadow-primary/10 translate-x-1"
                      : "bg-[#fdfaf5] border-[#e5dacf]/70 hover:border-[#c5a880]/50 hover:bg-white"
                    }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Icon Container */}
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isActive
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-[#c5a880]/30 bg-white text-[#c5a880] group-hover:scale-105"
                        }`}
                    >
                      {faq.icon}
                    </div>
                    {/* Question Text */}
                    <span
                      className={`font-sans font-bold text-sm sm:text-base leading-snug transition-colors duration-500 ${isActive ? "text-white" : "text-[#2d2219] group-hover:text-primary"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus Indicator */}
                  <div
                    className={`text-lg font-bold shrink-0 ml-4 transition-colors duration-500 ${isActive ? "text-white" : "text-[#c5a880]"
                      }`}
                  >
                    {isActive ? "—" : "+"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed content display */}
          <div className="lg:col-span-7 h-full scroll-reveal-fade-up" style={{ transitionDelay: '350ms' }}>
            <div className="bg-[#231513] text-white rounded-3xl border border-[#2d2219]/20 shadow-xl overflow-hidden p-8 sm:p-12 relative flex flex-col md:flex-row gap-8 items-stretch min-h-[500px]">

              {/* Lace/mandala watermark in bottom right */}
              <div className="absolute bottom-0 right-0 w-48 h-48 text-[#c5a880]/8 pointer-events-none translate-x-8 translate-y-8 select-none">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="1" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3,3" />
                  <circle cx="50" cy="50" r="35" />
                  <circle cx="50" cy="50" r="25" strokeDasharray="5,5" />
                  <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
                  <polygon points="50,5 95,50 50,95 5,50" />
                  <polygon points="50,15 85,50 50,85 15,50" />
                  <polygon points="50,25 75,50 50,75 25,50" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" className="opacity-20" />
                </svg>
              </div>

              {/* Detailed Card Text Content */}
              <div className={`flex-1 flex flex-col items-start justify-between relative z-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100 blur-0'}`}>
                <div>
                  {/* Category Circle Icon */}
                  <div className="w-13 h-13 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] bg-white/5 mb-6">
                    {activeFAQ.icon}
                  </div>

                  {/* Active Question Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] leading-[1.25] text-white mb-5">
                    {activeFAQ.detailedQuestion}
                  </h3>

                  {/* Gold Divider */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-[0.5px] w-8 bg-[#c5a880]/30"></div>
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a880]"></div>
                    <div className="h-[0.5px] w-16 bg-[#c5a880]/30"></div>
                  </div>

                  {/* Answer Text */}
                  <div className="font-sans text-white text-sm sm:text-base leading-relaxed mb-8 flex flex-col gap-4 font-medium max-w-[95%]">
                    {activeFAQ.answerParagraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Dynamic CTA Button */}
                <Link
                  href={activeFAQ.ctaLink}
                  className="inline-flex items-center justify-center border border-[#c5a880]/60 hover:border-[#c5a880] hover:bg-[#c5a880] text-white hover:text-[#231513] px-6 py-3.5 rounded-md text-xs font-bold tracking-[2px] uppercase transition-all duration-300 shadow-md group mt-auto"
                >
                  {activeFAQ.ctaText}
                  <svg className="w-3.5 h-3.5 ml-2.5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Detailed Card Image Content - flex items-start to keep it vertically stable */}
              <div className="w-full md:w-[46%] lg:w-[48%] shrink-0 relative z-10 flex items-start">
                <div className={`relative w-full aspect-[4/5] md:aspect-[3/4] rounded-tl-[160px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-white/5 group transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
                  <img
                    src={activeFAQ.imageUrl}
                    alt={activeFAQ.question}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner gold vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231513]/40 to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center relative z-10 scroll-reveal-fade-up" style={{ transitionDelay: '300ms' }}>
          <p className="font-sans text-[#2d2219] text-sm mb-5 font-semibold">
            Still have questions? We'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2d2219] hover:bg-primary text-white px-8 py-3.5 rounded-md text-xs font-extrabold tracking-[2px] uppercase transition-all shadow-md hover:-translate-y-0.5 duration-300"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Brand Highlights Footer Bar */}
        <div
          className="w-full mt-24 border border-[#e5dacf]/60 bg-[#fdfaf5] rounded-3xl py-10 px-8 relative overflow-hidden shadow-sm scroll-reveal-fade-up"
          style={{ transitionDelay: '300ms' }}
        >
          {/* Subtle Watermarks */}
          <div className="absolute left-0 top-0 h-full w-24 text-[#c5a880]/5 pointer-events-none -translate-x-6 select-none flex items-center">
            <svg className="w-full h-24 fill-none stroke-current" strokeWidth="0.5" viewBox="0 0 100 100">
              <path d="M0,50 Q25,25 50,50 T100,50" />
              <path d="M0,60 Q25,35 50,60 T100,60" />
              <circle cx="50" cy="50" r="20" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 h-full w-24 text-[#c5a880]/5 pointer-events-none translate-x-6 select-none flex items-center">
            <svg className="w-full h-24 fill-none stroke-current" strokeWidth="0.5" viewBox="0 0 100 100">
              <path d="M0,50 Q25,25 50,50 T100,50" />
              <circle cx="50" cy="50" r="20" />
            </svg>
          </div>

          {/* Grid items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#e5dacf]/50 relative z-10">

            {/* Highlight 1 */}
            <div
              className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 lg:first:pl-0 first:pt-0 scroll-reveal-fade-up"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="mb-4 text-[#c5a880]">
                <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a5 5 0 00-5 5v1h10V7a5 5 0 00-5-5zM5 14a3 3 0 00-3 3v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 00-3-3H5z M5 8h14v6H5z" />
                </svg>
              </div>
              <h4 className="font-sans font-extrabold text-[#2d2219] text-[11px] tracking-[1.5px] uppercase mb-2">
                Authentic Cuisine
              </h4>
              <p className="font-sans text-[#2d2219]/90 text-[11px] leading-relaxed font-semibold max-w-[160px]">
                Traditional recipes crafted with passion
              </p>
            </div>

            {/* Highlight 2 */}
            <div
              className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 lg:pl-4 scroll-reveal-fade-up"
              style={{ transitionDelay: '500ms' }}
            >
              <div className="mb-4 text-[#c5a880]">
                <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m9-13c1.168-1.077 2.754-1.553 4.5-1.553S19.832 5.477 21 6.253v13" />
                </svg>
              </div>
              <h4 className="font-sans font-extrabold text-[#2d2219] text-[11px] tracking-[1.5px] uppercase mb-2">
                Fresh Ingredients
              </h4>
              <p className="font-sans text-[#2d2219]/90 text-[11px] leading-relaxed font-semibold max-w-[160px]">
                We use only the finest & freshest ingredients
              </p>
            </div>

            {/* Highlight 3 */}
            <div
              className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 lg:pl-4 scroll-reveal-fade-up"
              style={{ transitionDelay: '600ms' }}
            >
              <div className="mb-4 text-[#c5a880]">
                <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a6 6 0 00-3.44-5.28m0 0a6 6 0 00-7.12 0m7.12 0a6 6 0 013.44 5.28M3.75 20.25v-1.5A6 6 0 019.75 13.5h.5a6 6 0 016 6v1.5m-6-15a3 3 0 100-6 3 3 0 000 6zm7.5 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h4 className="font-sans font-extrabold text-[#2d2219] text-[11px] tracking-[1.5px] uppercase mb-2">
                Exceptional Service
              </h4>
              <p className="font-sans text-[#2d2219]/90 text-[11px] leading-relaxed font-semibold max-w-[160px]">
                Warm hospitality and attention to every detail
              </p>
            </div>

            {/* Highlight 4 */}
            <div
              className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 lg:pl-4 scroll-reveal-fade-up"
              style={{ transitionDelay: '700ms' }}
            >
              <div className="mb-4 text-[#c5a880]">
                <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h4 className="font-sans font-extrabold text-[#2d2219] text-[11px] tracking-[1.5px] uppercase mb-2">
                Prime Location
              </h4>
              <p className="font-sans text-[#2d2219]/90 text-[11px] leading-relaxed font-semibold max-w-[160px]">
                Located in the heart of Mississauga
              </p>
            </div>

            {/* Highlight 5 */}
            <div
              className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 lg:pl-4 lg:last:pr-0 scroll-reveal-fade-up"
              style={{ transitionDelay: '800ms' }}
            >
              <div className="mb-4 text-[#c5a880]">
                <svg className="w-8 h-8 stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h4 className="font-sans font-extrabold text-[#2d2219] text-[11px] tracking-[1.5px] uppercase mb-2">
                Made With Love
              </h4>
              <p className="font-sans text-[#2d2219]/90 text-[11px] leading-relaxed font-semibold max-w-[160px]">
                Every dish is made with love and care
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

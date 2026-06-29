"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Toronto, Canada",
    rating: 5.0,
    text: "An unforgettable dining experience! The food, ambiance, and hospitality were simply outstanding. Antalya truly brings the best of Turkish cuisine to life.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000&h=700",
  },
  {
    id: 2,
    name: "David Chen",
    location: "New York, USA",
    rating: 5.0,
    text: "The charcoal kebabs here are cooked to absolute perfection. The smoky flavour combined with authentic Turkish spices is just incredible. A must-visit!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000&h=700",
  },
  {
    id: 3,
    name: "Michael Ibrahim",
    location: "London, UK",
    rating: 5.0,
    text: "The warm atmosphere and exceptional hospitality made us feel right at home. The mix grill platter was generously portioned and packed with flavor!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000&h=700",
  },
  {
    id: 4,
    name: "Elena Rostova",
    location: "Munich, Germany",
    rating: 4.9,
    text: "The desserts are spectacular! The Kunafa was crispy, warm, and paired perfectly with traditional Turkish tea. Excellent service and lovely decor.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000&h=700",
  },
  {
    id: 5,
    name: "James Carter",
    location: "Sydney, Australia",
    rating: 5.0,
    text: "We hosted a private corporate event here and the team was outstanding. The catering menu had great vegetarian options, and our guests loved the food!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1000&h=700",
  },
  {
    id: 6,
    name: "Emily Watson",
    location: "Vancouver, Canada",
    rating: 5.0,
    text: "Every single dish tells a story. From the fresh flatbread served hot from the oven to the perfectly seasoned meze, the attention to detail is stunning.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    image: "https://images.unsplash.com/photo-1544025162-81111420d4d9?auto=format&fit=crop&q=80&w=1000&h=700",
  },
];

const stats = [
  {
    id: "stat-1",
    value: "4.9",
    label: "Average Rating",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.198-.39.75-.39.948 0l1.5 3.037 3.352.488c.43.063.602.592.29.905l-2.425 2.364.572 3.338c.074.43-.377.758-.76.553L12 12.875l-2.998 1.577c-.383.205-.834-.122-.76-.553l.572-3.338L6.39 8.293c-.313-.313-.14-.842.29-.905l3.352-.488 1.5-3.037z" />
      </svg>
    ),
  },
  {
    id: "stat-2",
    value: "500+",
    label: "Google Reviews",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 11.957 11.957 0 011.602-4.667C4.49 14.137 4 13.125 4 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    id: "stat-3",
    value: "10K+",
    label: "Happy Guests",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21c-2.243 0-4.352-.648-6.124-1.772a1.868 1.868 0 01-.861-1.429c-.048-.71-.074-1.429-.074-2.152 0-2.3 1.238-4.3 3.102-5.415m9.04 5.097c.902-.513 1.547-1.408 1.547-2.457 0-1.573-1.277-2.85-2.85-2.85a2.85 2.85 0 00-2.85 2.85c0 1.05.644 1.944 1.546 2.457m5.723-5.723A5.137 5.137 0 0015 9.75a5.137 5.137 0 00-3.327 1.223M10.09 17.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm10.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "stat-4",
    value: "98%",
    label: "Would Recommend",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function TestimonialsSection() {
  const [renderedIndex, setRenderedIndex] = useState(2); // Default to index 2 (Michael Ibrahim, third one)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedText, setDisplayedText] = useState(testimonials[2].text);

  const activeTestimonial = testimonials[renderedIndex];

  // Trigger change with slide animation
  const triggerIndexChange = (nextIdx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setRenderedIndex(nextIdx);
      setIsTransitioning(false);
    }, 400); // matches CSS transitions
  };

  const handlePrev = () => {
    const nextIdx = renderedIndex === 0 ? testimonials.length - 1 : renderedIndex - 1;
    triggerIndexChange(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = renderedIndex === testimonials.length - 1 ? 0 : renderedIndex + 1;
    triggerIndexChange(nextIdx);
  };

  const handleThumbnailClick = (index: number) => {
    if (index === renderedIndex) return;
    triggerIndexChange(index);
  };

  // Typing animation that types the active testimonial text in exactly 1 second
  useEffect(() => {
    const fullText = activeTestimonial.text;
    const textLength = fullText.length;
    if (textLength === 0) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const animateTyping = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const duration = 1000; // 1 second (1000ms)

      if (elapsed >= duration) {
        setDisplayedText(fullText);
      } else {
        const progress = elapsed / duration;
        const charsToShow = Math.floor(progress * textLength);
        setDisplayedText(fullText.slice(0, charsToShow));
        animationFrameId = requestAnimationFrame(animateTyping);
      }
    };

    animationFrameId = requestAnimationFrame(animateTyping);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTestimonial.text]);

  // Autoplay rotation every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIdx = (renderedIndex + 1) % testimonials.length;
      triggerIndexChange(nextIdx);
    }, 3000);
    return () => clearInterval(interval);
  }, [renderedIndex]);

  return (
    <section id="reviews" className="relative w-full pt-1 pb-16 md:pb-24 bg-[#faf6f0] overflow-hidden border-b border-[#2d2219]/10">
      {/* Background radial gradient to match site style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,16,16,0.015),transparent_60%)] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 z-10 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-14 select-none">
          <div className="flex items-center gap-3 text-[#c5a880] font-extrabold tracking-[4px] text-xs uppercase mb-4">
            <svg className="w-4 h-4 fill-current text-gold" viewBox="0 0 24 24">
              <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z"/>
              <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z"/>
            </svg>
            <span>Antalya</span>
            <svg className="w-4 h-4 fill-current text-gold" viewBox="0 0 24 24">
              <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z"/>
              <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z"/>
            </svg>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2d2219] mb-6 leading-none">
            Loved by <span className="text-[#e10613]">Our Guests</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold mb-6" />
          <p className="font-sans text-sm md:text-base text-[#2d2219]/80 font-medium max-w-xl">
            Real experiences from real people who have dined, celebrated, and created memories with us.
          </p>
        </div>

        {/* --- MAIN CAROUSEL CARD AREA --- */}
        <div 
          className="relative w-full max-w-[1100px] flex flex-col items-center justify-center mb-6 px-4 md:px-12"
        >
          
          {/* Previous Button (far left) */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-[-16px] md:left-0 z-30 w-12 h-12 rounded-full bg-white border border-[#e5dacf] flex items-center justify-center text-[#c5a880] hover:text-[#e10613] hover:border-[#e10613] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Core Card Layout */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8 min-h-[460px] relative">
            
            {/* Left side: Restaurant interior image */}
            <div className={`w-full lg:w-[50%] h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-[#c5a880]/20 relative z-10 transition-all duration-500 ease-in-out ${
              isTransitioning ? "opacity-0 -translate-x-6 scale-98 blur-[2px]" : "opacity-100 translate-x-0 scale-100 blur-0"
            }`}>
              <img
                src={activeTestimonial.image}
                alt="Antalya Ambience"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right side: Overlapping Card */}
            <div className={`w-[92%] sm:w-[86%] lg:w-[55%] lg:h-[420px] bg-white rounded-3xl p-8 md:p-10 shadow-[0_15px_45px_-15px_rgba(45,34,25,0.08)] border border-[#e5dacf]/40 flex flex-col justify-between -mt-10 lg:mt-0 lg:-ml-12 relative z-20 transition-all duration-500 ease-in-out ${
              isTransitioning ? "opacity-0 translate-x-6 scale-98 blur-[2px]" : "opacity-100 translate-x-0 scale-100 blur-0"
            }`}>
              {/* Quote Mark & Stars Row */}
              <div className="flex items-start justify-between mb-6">
                {/* Custom Quote Icon */}
                <span className="text-gold opacity-90 leading-none">
                  <svg className="w-12 h-10 fill-current" viewBox="0 0 32 30">
                    <path d="M0 16.5C0 7.387 7.387 0 16.5 0c1.077 0 1.95.873 1.95 1.95v8.775c0 1.077-.873 1.95-1.95 1.95-3.23 0-5.85 2.62-5.85 5.85v1.95h5.85c1.077 0 1.95.873 1.95 1.95v7.575c0 1.077-.873 1.95-1.95 1.95H1.95C.873 29.925 0 29.052 0 27.975v-11.5zm13.65 0C13.65 7.387 21.037 0 30.15 0c1.077 0 1.95.873 1.95 1.95v8.775c0 1.077-.873 1.95-1.95 1.95-3.23 0-5.85 2.62-5.85 5.85v1.95h5.85c1.077 0 1.95.873 1.95 1.95v7.575c0 1.077-.873 1.95-1.95 1.95H15.6c-1.077 0-1.95-.873-1.95-1.95v-11.5z" />
                  </svg>
                </span>

                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 fill-current ${
                          i < Math.floor(activeTestimonial.rating) ? "text-gold" : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[#2d2219] font-bold text-sm ml-1.5 pt-0.5">
                    {activeTestimonial.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-[#2d2219] text-[15px] sm:text-base md:text-lg font-medium leading-relaxed mb-8 italic min-h-[5.5rem] select-none">
                "{displayedText}"{displayedText.length < activeTestimonial.text.length && (
                  <span className="inline-block w-[2px] h-[1em] bg-gold ml-1 animate-pulse" style={{ verticalAlign: "middle" }}></span>
                )}
              </p>

              {/* Author Information */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c5a880]/30 shadow-sm shrink-0">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="font-serif text-[#2d2219] text-base font-bold tracking-wide">
                    {activeTestimonial.name}
                  </h4>
                  <span className="font-sans text-[#2d2219]/60 text-xs font-semibold">
                    {activeTestimonial.location}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Next Button (far right) */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-[-16px] md:right-0 z-30 w-12 h-12 rounded-full bg-white border border-[#e5dacf] flex items-center justify-center text-[#c5a880] hover:text-[#e10613] hover:border-[#e10613] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* --- REVIEWERS THUMBNAIL ROW --- */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap mb-6 max-w-full">
          {testimonials.map((item, index) => {
            const isActive = index === renderedIndex;
            return (
              <div key={item.id} className="flex flex-col items-center shrink-0 min-w-[70px] min-h-[90px] relative">
                <button
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden cursor-pointer transition-all duration-300 shadow-sm relative ${
                    isActive
                       ? "ring-2 ring-gold ring-offset-2 ring-offset-[#faf6f0] scale-110"
                       : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                {/* Active Indicator & "Featured" Text */}
                {isActive && (
                  <div className="absolute -bottom-7 flex flex-col items-center animate-fade-in">
                    <span className="text-gold text-xs leading-none">
                      <svg className="w-3.5 h-3 fill-current" viewBox="0 0 10 5">
                        <polygon points="5,0 0,5 10,5" className="fill-gold" />
                      </svg>
                    </span>
                    <span className="font-serif italic text-gold text-[11px] mt-1 font-semibold tracking-wider whitespace-nowrap">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

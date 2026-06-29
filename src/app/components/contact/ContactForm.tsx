"use client";
import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
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

  return (
    <div 
      ref={containerRef}
      className={`relative w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Top Right Islamic Pattern Watermark */}
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] pointer-events-none rounded-tr-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23B89564' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 relative z-10">
        <svg className="w-3 h-3 text-[#B89564] mb-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 tracking-wide mb-4">
          SEND US A <span className="text-[#7a1f1f]">MESSAGE</span>
        </h2>
        <div className="w-16 h-[1px] bg-[#e6e2d8]" />
      </div>

      {/* Form */}
      <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              YOUR NAME <span className="text-[#7a1f1f]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              EMAIL ADDRESS <span className="text-[#7a1f1f]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              PHONE NUMBER
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.21-.535a1.125 1.125 0 00-1.259.534l-1.49 2.464c-3.1-1.63-5.6-4.13-7.23-7.23l2.465-1.49a1.125 1.125 0 00.534-1.259l-.535-3.21C7.716 2.601 7.266 2.25 6.75 2.25H5.372C4.12 2.25 3.064 3.195 2.944 4.414A14.935 14.935 0 002.25 6.75z" />
                </svg>
              </div>
              <input
                type="tel"
                placeholder="(519) 000-0000"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              SUBJECT
            </label>
            <div className="relative">
              <select defaultValue="" className="w-full pl-4 pr-10 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-800 appearance-none">
                <option value="" disabled>How can we help?</option>
                <option value="reservation">Reservation</option>
                <option value="event">Private Event</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              PREFERRED DATE
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <input
                type="date"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Time */}
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
              PREFERRED TIME
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <input
                type="time"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs font-bold tracking-widest text-gray-900 uppercase">
            YOUR MESSAGE <span className="text-[#7a1f1f]">*</span>
          </label>
          <div className="relative">
            <textarea
              rows={4}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              className="w-full px-4 py-3 rounded-lg border border-[#e6e2d8] bg-[#fdfdfb] focus:bg-white focus:outline-none focus:border-[#B89564] focus:ring-1 focus:ring-[#B89564] transition-colors text-sm text-gray-900 placeholder-gray-500 resize-none"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              {/* Resize icon graphic placeholder (bottom right corner visual) */}
              <svg className="w-2 h-2 text-gray-300 absolute -bottom-1 -right-1" viewBox="0 0 10 10">
                <path d="M10 0v10H0L10 0z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <div className="text-right text-xs text-gray-600 font-sans mt-1">
            {message.length}/500
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#7a1f1f] hover:bg-[#5c1717] text-white py-4 rounded-lg text-sm font-bold tracking-widest uppercase transition-colors shadow-md mt-2"
        >
          SEND MESSAGE
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </form>
    </div>
  );
};

export default ContactForm;

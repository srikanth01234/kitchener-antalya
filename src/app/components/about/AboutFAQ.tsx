"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What are Antalya's opening hours?",
    answer: "We are open Tuesday through Sunday from 11:30 AM to 10:00 PM. We are closed on Mondays."
  },
  {
    question: "Do you offer vegetarian, vegan, or gluten-free options?",
    answer: "Yes, our menu features a wide selection of vegetarian, vegan, and gluten-free traditional Turkish dishes, including mezze platters, falafel, salads, and vegetable stews. Please inform your server of any allergies before ordering."
  },
  {
    question: "How can I make a reservation?",
    answer: "You can easily make a reservation online through our Reservation page or by calling us directly at (555) 123-4567. We recommend booking in advance, especially for weekend dining."
  },
  {
    question: "Is there parking available at the restaurant?",
    answer: "Yes, we offer complimentary on-site parking for all our guests in our private parking lot located directly behind the restaurant."
  },
  {
    question: "Do you offer private event hosting or catering?",
    answer: "Absolutely! We provide full-service catering for corporate events, weddings, birthdays, and private gatherings. We also have a private dining space available at the restaurant. Please visit our Catering page for more details."
  }
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white text-[#2d2219] border-t border-[#e5dacf]/50 overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 right-0 w-[60%] h-[150%] bg-[#faf6f0] rounded-l-full opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-sans text-[#c5a880] text-xs font-extrabold tracking-[3px] uppercase">
              HAVE QUESTIONS?
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#2d2219] tracking-tight mb-6">
            Frequently Asked <span className="font-script text-[#9c1010] text-4xl sm:text-5xl lg:text-6xl -rotate-1 inline-block ml-1">Questions</span>
          </h2>
          <p className="font-sans text-[#2d2219]/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Find answers to common questions about Antalya, our culinary philosophy, and services. If you need more information, we're always here to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#c5a880] bg-[#faf6f0] shadow-md' : 'border-[#e5dacf]/70 bg-white hover:border-[#c5a880]/50'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans font-bold text-base sm:text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-[#9c1010]' : 'text-[#2d2219]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen ? 'border-[#9c1010] bg-[#9c1010] text-white' : 'border-[#e5dacf] text-[#c5a880] bg-transparent'}`}>
                    <svg 
                      className={`w-4 h-4 fill-none stroke-current transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 sm:p-8 pt-0 font-sans text-[#2d2219]/80 text-sm sm:text-base leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-[#2d2219]/80 text-sm mb-6 font-medium">
            Still have questions? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#2d2219] hover:bg-[#1a130e] text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-[2px] uppercase transition-all shadow-md"
          >
            Contact Our Team
          </a>
        </div>

      </div>
    </section>
  );
}

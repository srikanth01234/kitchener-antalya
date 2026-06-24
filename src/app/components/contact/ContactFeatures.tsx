import React from "react";

const ContactFeatures = () => {
  return (
    <div className="w-full py-16 px-4 border-t border-[#e6e2d8] bg-[#fdfdfb]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center gap-4">
          <svg className="w-10 h-10 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            {/* Dining Table approximation */}
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 13h18v2H3v-2zm2 2v6h2v-6m10 0v6h2v-6M5 10v3m14-3v3" />
          </svg>
          <div>
            <h4 className="font-sans font-bold text-[#333] text-sm uppercase tracking-widest mb-2">
              DINE-IN EXPERIENCE
            </h4>
            <p className="font-sans text-gray-500 text-sm">
              Enjoy our warm ambiance and authentic flavours.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center gap-4">
          <svg className="w-10 h-10 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
             {/* Party Popper approximation */}
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l5-5m-2.5-.5L18 3m1.5 2.5L21 6m-9.5 5.5l-6 6a2.12 2.12 0 01-3 0 2.12 2.12 0 010-3l6-6" />
          </svg>
          <div>
            <h4 className="font-sans font-bold text-[#333] text-sm uppercase tracking-widest mb-2">
              CELEBRATIONS & EVENTS
            </h4>
            <p className="font-sans text-gray-500 text-sm">
              Perfect for birthdays, anniversaries & more.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center gap-4">
          <svg className="w-10 h-10 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
             {/* Double doors approximation */}
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M12 21V3m-2 9h.01M14 12h.01" />
          </svg>
          <div>
            <h4 className="font-sans font-bold text-[#333] text-sm uppercase tracking-widest mb-2">
              PRIVATE GATHERINGS
            </h4>
            <p className="font-sans text-gray-500 text-sm">
              Host your special events with us.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center gap-4">
          <svg className="w-10 h-10 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
             {/* Leaf approximation */}
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4.5l-5-5-2 2L9 6.5 5 10.5V3zM9 13.5l4-4 4 4v5.5H9v-5.5zM12 8v2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 21c0-5.5 4.5-10 10-10C21 5.5 16.5 1 11 1 5.5 1 1 5.5 1 11c0 5.5 4.5 10 10 10zm0-18v16" />
          </svg>
          <div>
            <h4 className="font-sans font-bold text-[#333] text-sm uppercase tracking-widest mb-2">
              AUTHENTIC CUISINE
            </h4>
            <p className="font-sans text-gray-500 text-sm">
              Traditional recipes, fresh ingredients.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactFeatures;

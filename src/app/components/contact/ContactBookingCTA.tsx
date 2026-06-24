import React from "react";
import Link from "next/link";

const ContactBookingCTA = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
      
      {/* Icon & Text */}
      <div className="flex items-center gap-6">
        {/* Cloche Icon Circle */}
        <div className="w-16 h-16 rounded-full border border-[#B89564] flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 text-[#B89564]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            {/* Cloche approximation - replacing with actual dome shape */}
          </svg>
          {/* Real cloche icon */}
           <svg className="w-8 h-8 text-[#B89564] absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 18h18M12 4a8 8 0 00-8 8v6h16v-6a8 8 0 00-8-8zM10 4h4" />
           </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="font-sans font-bold text-[#333] text-sm md:text-base uppercase tracking-widest mb-1">
            LOOKING TO BOOK A TABLE?
          </h3>
          <p className="font-sans text-gray-500 text-sm max-w-sm">
            Reserve your experience with us for a memorable dining moments.
          </p>
        </div>
      </div>

      {/* Button/Link */}
      <Link 
        href="/reservation" 
        className="shrink-0 flex items-center gap-2 font-sans font-bold text-[#7a1f1f] text-sm uppercase tracking-widest hover:text-[#5c1717] transition-colors"
      >
        RESERVE NOW
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

    </div>
  );
};

export default ContactBookingCTA;

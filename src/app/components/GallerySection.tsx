import React from "react";

const GallerySection = () => {
  return (
    <section id="gallery" className="relative w-full py-20 md:py-28 bg-[#faf6f0] overflow-hidden">
      {/* Background Pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2219 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 z-10 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]"></span>
            <span className="text-[#c5a880] text-xs font-bold tracking-[4px] uppercase">
              Antalya
            </span>
            <span className="w-8 h-[1px] bg-[#c5a880]"></span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2d2219] mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#2d2219]/80 font-medium">
            Moments from our kitchen, restaurant & special events
          </p>
          <div className="mt-6 flex items-center justify-center">
            <svg className="w-24 h-auto text-[#c5a880]/60" viewBox="0 0 100 12" fill="none">
              <path d="M0 6H40" stroke="currentColor" strokeWidth="1" />
              <path d="M60 6H100" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="6" r="3" stroke="currentColor" strokeWidth="1" />
              <circle cx="43" cy="6" r="1.5" fill="currentColor" />
              <circle cx="57" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* --- GALLERY GRID --- */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Column - Large Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-auto min-h-[600px] rounded-2xl overflow-hidden border border-[#c5a880]/30 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="Restaurant Interior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#faf6f0] border border-[#c5a880]/40 rounded-xl p-6 md:p-8 w-[240px] md:w-[280px] shadow-xl flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center mb-4 text-[#c5a880]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              </div>
              <span className="font-serif italic text-[#c5a880] text-lg mb-1">Capturing</span>
              <h3 className="font-serif text-2xl text-[#2d2219] leading-tight mb-4">
                Memorable<br/>Moments
              </h3>
              <div className="flex items-center justify-center w-full">
                <svg className="w-16 h-auto text-[#c5a880]/60" viewBox="0 0 100 12" fill="none">
                  <path d="M0 6H40" stroke="currentColor" strokeWidth="1" />
                  <path d="M60 6H100" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="6" r="3" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Images */}
          <div className="flex flex-col gap-4 md:gap-6">
            
            {/* Image 1: Signature Dishes */}
            <div className="relative h-[160px] sm:h-[180px] lg:h-auto lg:flex-1 rounded-2xl overflow-hidden border border-[#c5a880]/30 group shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1544025162-81111420d4d9?auto=format&fit=crop&q=80&w=800&h=400" 
                alt="Signature Dishes" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 p-6 flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-white text-base font-bold tracking-wider">Signature<br/>Dishes</h4>
                </div>
              </div>
            </div>

            {/* Image 2: Outdoor Ambience */}
            <div className="relative h-[160px] sm:h-[180px] lg:h-auto lg:flex-1 rounded-2xl overflow-hidden border border-[#c5a880]/30 group shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800&h=400" 
                alt="Outdoor Ambience" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 p-6 flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-white text-base font-bold tracking-wider">Outdoor<br/>Ambience</h4>
                </div>
              </div>
            </div>

            {/* Image 3: Private Events */}
            <div className="relative h-[160px] sm:h-[180px] lg:h-auto lg:flex-1 rounded-2xl overflow-hidden border border-[#c5a880]/30 group shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800&h=400" 
                alt="Private Events" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 p-6 flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-white text-base font-bold tracking-wider">Private<br/>Events</h4>
                </div>
              </div>
            </div>

            {/* Image 4: Turkish Delights */}
            <div className="relative h-[160px] sm:h-[180px] lg:h-auto lg:flex-1 rounded-2xl overflow-hidden border border-[#c5a880]/30 group shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800&h=400" 
                alt="Turkish Delights" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 p-6 flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full border border-[#c5a880] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-white text-base font-bold tracking-wider">Turkish<br/>Delights</h4>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- VIEW FULL GALLERY BUTTON --- */}
        <div className="mt-12 md:mt-16">
          <a
            href="#gallery"
            className="group flex items-center justify-center gap-3 border border-[#c5a880] hover:border-[#2d2219] bg-transparent px-8 py-4 rounded-sm text-xs font-bold tracking-[3px] uppercase text-[#2d2219] transition-all duration-300"
          >
            View Full Gallery
            <svg className="w-4 h-4 text-[#c5a880] group-hover:text-[#2d2219] transition-colors duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;

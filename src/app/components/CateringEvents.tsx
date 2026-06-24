import React from 'react';

export default function CateringEvents() {
  const events = [
    {
      id: "01",
      title: "CORPORATE EVENTS",
      description: "Professional gatherings with a touch of tradition.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "WEDDINGS & ENGAGEMENTS",
      description: "Celebrate love with exceptional food and service.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="8.5" cy="12" r="4.5" />
          <circle cx="15.5" cy="12" r="4.5" />
        </svg>
      )
    },
    {
      id: "03",
      title: "BIRTHDAY PARTIES",
      description: "Make every birthday truly special.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21H4v-4h16v4zM4 17v-3c0-1 1-2 2-2h12c1 0 2 1 2 2v3M12 12V8m-4 4V8m8 4V8M12 8c0-1.5 1-2 1-3 0 1-1 1.5-1 3zm-4 0c0-1.5 1-2 1-3 0 1-1 1.5-1 3zm8 0c0-1.5 1-2 1-3 0 1-1 1.5-1 3z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "BABY SHOWERS",
      description: "Beautiful moments for your little ones.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4zm-8-4h8a2 2 0 002-2V9a5 5 0 00-10 0v5a2 2 0 002 2zm-5-8h2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="catering" className="relative w-full py-20 lg:py-28 bg-[#faf6f0] text-[#2d2219] overflow-hidden border-b border-[#2d2219]/10">

      {/* Background Watermark (Galata Tower) */}
      <div className="absolute top-1/2 right-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.05] pointer-events-none z-0 mix-blend-multiply">
        <img src="https://images.unsplash.com/photo-1541427468627-a14196e020cf?q=80&w=800&auto=format&fit=crop" alt="" className="w-full h-full object-contain grayscale" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">

        {/* LEFT SIDE: Image Composition */}
        <div className="w-full lg:w-1/2 relative flex flex-col min-h-[650px] lg:min-h-[750px]">

          {/* Top Red Ribbon */}
          <div className="absolute top-0 left-0 lg:left-6 z-30 w-16 lg:w-20 h-28 lg:h-32 bg-[#9c1010] text-white flex flex-col items-center pt-3 lg:pt-4 shadow-lg" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)" }}>
            <svg className="w-5 h-5 lg:w-6 lg:h-6 fill-current mb-2" viewBox="0 0 24 24">
              <path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" />
              <path d="M12 5.6L18.4 12L12 18.4L5.6 12L12 5.6ZM12 8.4L8.4 12L12 15.6L15.6 12L12 8.4Z" />
            </svg>
            <span className="text-[9px] lg:text-[10px] font-bold text-center uppercase leading-tight tracking-widest px-1">Authentic<br /><span className="my-1 block">Turkish</span>Hospitality</span>
          </div>

          {/* Main Large Circular Image */}
          <div className="absolute top-0 left-4 lg:left-12 w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden shadow-2xl z-10 border-[6px] lg:border-[8px] border-[#faf6f0]">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" alt="Restaurant Interior" className="w-full h-full object-cover" />
          </div>

          {/* Floating Circle */}
          <div className="absolute top-[220px] lg:top-[300px] right-0 lg:right-[20px] w-36 h-36 lg:w-[200px] lg:h-[200px] rounded-full bg-[#faf6f0] border border-[#c5a880]/40 shadow-xl z-20 flex flex-col items-center justify-center text-center p-3 lg:p-4">
            <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#c5a880] mb-2" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-3v3m4-3H8m4-12a8 8 0 00-8 8h16a8 8 0 00-8-8zm0 0v-2m0 0h-2m2 0h2" />
            </svg>
            <span className="text-[11px] lg:text-[13px] font-extrabold text-[#2d2219] tracking-[2px] uppercase leading-relaxed">
              Good Food<br />Good People<br /><span className="text-[#9c1010]">Great Memories</span>
            </span>
          </div>

          {/* Decorative Olive Branch */}
          <div className="absolute top-[35%] -left-6 w-32 lg:w-48 z-0 pointer-events-none opacity-50 mix-blend-multiply">
            <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-contain grayscale" alt="" />
          </div>

          {/* 4 Arched Cards */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center lg:justify-start gap-2 lg:gap-3 z-20 items-end h-[300px] lg:h-[340px]">
            {[
              { id: '01', title: 'Corporate\nEvents', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop', mt: 'mb-[40px] lg:mb-[60px]' },
              { id: '02', title: 'Weddings &\nEngagements', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop', mt: 'mb-[10px] lg:mb-[15px]' },
              { id: '03', title: 'Birthday\nParties', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop', mt: 'mb-[30px] lg:mb-[45px]' },
              { id: '04', title: 'Baby\nShowers', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop', mt: 'mb-[0px] lg:mb-[0px]' },
            ].map((card, idx) => (
              <div key={idx} className={`relative w-[23%] max-w-[120px] h-[220px] lg:h-[280px] rounded-[35px] lg:rounded-[50px] overflow-hidden shadow-xl border-[3px] lg:border-[4px] border-[#faf6f0] ${card.mt} transition-transform hover:-translate-y-2`}>
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col items-center justify-end pb-4 lg:pb-6 px-1 lg:px-2 text-center">
                  <span className="text-white font-serif text-2xl lg:text-3xl italic leading-none mb-1">{card.id}</span>
                  <div className="w-4 h-[1px] bg-[#c5a880] mb-2" />
                  <span className="text-white text-[9px] lg:text-[10px] font-bold uppercase tracking-widest whitespace-pre-line leading-tight">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Text and List */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 z-10 lg:pl-10">

          {/* Over-title */}
          <div className="flex items-center gap-3 text-[#9c1010] font-extrabold tracking-[4px] text-xs uppercase mb-5">
            <svg className="w-3 h-3 fill-current text-[#9c1010]" viewBox="0 0 24 24"><path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" /></svg>
            <span>Catering & Events</span>
            <svg className="w-3 h-3 fill-current text-[#9c1010]" viewBox="0 0 24 24"><path d="M12 0L24 12L12 24L0 12L12 0ZM12 2.8L2.8 12L12 21.2L21.2 12L12 2.8Z" /></svg>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#2d2219] leading-[1.1] mb-6 uppercase tracking-tight">
            Crafting Experiences, <br />
            <span className="text-[#9c1010]">Creating Memories</span>
          </h2>

          <div className="w-full max-w-[200px] border-b border-[#c5a880]/40 mb-6 flex justify-center lg:justify-start relative">
            <div className="absolute top-[-4px] left-1/2 lg:left-[50px] -translate-x-1/2 w-2 h-2 rounded-full border border-[#c5a880]/40 bg-[#faf6f0]" />
          </div>

          {/* Subtitle */}
          <p className="text-[#2d2219] text-base font-medium leading-relaxed mb-12 max-w-[480px]">
            From intimate gatherings to grand celebrations, Antalya brings people together with exquisite Turkish cuisine, warm hospitality, and unforgettable moments that last a lifetime.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-[500px]">
            {events.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 lg:gap-6 group relative w-full text-left">
                <span className="font-serif text-4xl lg:text-5xl text-[#c5a880] italic w-12">{item.id}</span>

                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#faf6f0] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-[#c5a880]/20 flex items-center justify-center text-[#9c1010] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>

                <div className="flex flex-col shrink-0 w-[160px] lg:w-[190px]">
                  <h4 className="text-[11px] lg:text-xs font-extrabold tracking-widest uppercase text-[#2d2219] mb-1.5 leading-tight">{item.title}</h4>
                  <p className="text-xs lg:text-[13px] text-[#2d2219] font-medium leading-snug pr-2">{item.description}</p>
                </div>

                <div className="hidden lg:flex flex-1 items-center overflow-hidden">
                  <div className="h-[1px] w-full border-b border-dashed border-[#c5a880]/40 group-hover:border-[#9c1010]/50 transition-colors" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9c1010] ml-2 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-14 w-full flex justify-center lg:justify-start">
            <button className="border-2 border-[#c5a880] hover:border-[#9c1010] text-[#9c1010] hover:bg-[#9c1010] hover:text-white px-10 py-3.5 rounded-sm text-xs font-extrabold tracking-[3px] uppercase transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md">
              Plan Your Event
              <span>&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

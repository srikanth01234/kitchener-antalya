import React from "react";

const features = [
  {
    title: "Authentic Turkish Cuisine",
    desc: "Traditional recipes crafted with passion.",
    icon: (
      <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  },
  {
    title: "Fresh & Quality Ingredients",
    desc: "We use only the finest ingredients, always.",
    icon: (
      <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: "Custom Menus for You",
    desc: "Personalized menus that suit your event.",
    icon: (
      <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    )
  },
  {
    title: "Seamless Service Experience",
    desc: "From planning to presentation, we care.",
    icon: (
      <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  }
];

export default function CateringFeaturesQuote() {
  return (
    <section className="w-full flex flex-col lg:flex-row border-t border-[#e5dacf]/30">
      
      {/* LEFT: Dark Features Panel */}
      <div className="w-full lg:w-[55%] bg-[#1a1715] text-[#faf6f0] py-16 lg:py-24 px-8 lg:px-16 xl:px-24 flex flex-col justify-center relative overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 relative z-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col relative group">
              {/* Subtle hover effect light */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c5a880]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 blur-xl pointer-events-none"></div>
              
              <div className="text-[#c5a880] mb-5">
                {feature.icon}
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-white mb-3">
                {feature.title}
              </h4>
              <p className="font-sans text-[#faf6f0]/60 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Vertical divider on desktop for odd items */}
              {idx % 2 === 0 && (
                <div className="hidden sm:block absolute right-[-24px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#c5a880]/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Light Quote Panel with Sketch Background */}
      <div className="w-full lg:w-[45%] bg-[#faf6f0] py-16 lg:py-24 px-8 lg:px-16 xl:px-20 flex flex-col justify-center relative overflow-hidden">
        
        {/* Sketch Background */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1500&auto=format&fit=crop")' }}
        ></div>
        
        <div className="relative z-10 max-w-lg">
          {/* Large Quote Mark */}
          <span className="block font-serif text-[#9c1010] text-7xl sm:text-8xl leading-none mb-[-20px] opacity-80">
            “
          </span>
          
          <p className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#2d2219] leading-snug mb-8 relative z-10">
            At Antalya, we don&apos;t just cater food, we create experiences that bring <span className="font-script text-[#9c1010] text-4xl sm:text-5xl lg:text-6xl align-middle ml-2 -rotate-2 inline-block">people together.</span>
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="h-[1px] w-12 bg-[#c5a880]"></div>
            <span className="font-script text-3xl text-[#c5a880]">Antalya Team</span>
          </div>
        </div>
      </div>

    </section>
  );
}

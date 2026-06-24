import Image from "next/image";
import HeroRight from "./components/HeroRight";
import PopularDishes from "./components/PopularDishes";
import LegacySection from "./components/LegacySection";
import CateringEvents from "./components/CateringEvents";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen bg-[#faf6f0] text-[#2d2219] flex flex-col justify-between overflow-x-hidden font-sans selection:bg-primary selection:text-white">
      {/* Background Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(156,16,16,0.03),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(156,16,16,0.02),transparent_50%)] pointer-events-none" />

      {/* --- HEADER --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <main className="relative flex-1 w-full flex flex-col lg:flex-row items-center overflow-visible z-40">

        {/* Left Column: Typography & CTAs (aligned with standard grid margin) */}
        <div className="w-full lg:w-[52%] xl:w-[48%] flex flex-col justify-center px-6 md:px-8 lg:pr-0 lg:pl-[calc((100vw-min(100vw,1440px))/2+2rem)] z-20 py-12 lg:py-0">
          <div className="flex flex-col items-start text-left gap-6 md:gap-7">
            {/* Overtitle */}
            <span className="font-sans text-primary text-xs md:text-sm font-extrabold tracking-[4px] uppercase flex items-center gap-2 select-none">
              <span className="text-[10px]">✦</span>
              AUTHENTIC TURKISH DINING
              <span className="text-[10px]">✦</span>
            </span>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] text-[#2d2219]">
              Flavours Crafted <br />
              Over <span className="text-primary italic relative inline-block">
                Fire
                {/* Brush stroke underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 flex items-center">
                  <svg className="w-full h-full text-primary" viewBox="0 0 120 8" fill="none" preserveAspectRatio="none">
                    <path
                      d="M3 5.5C25 3.5 55 2.5 117 4C90 5.5 50 6.5 15 5.5"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-[15px] md:text-base text-[#2d2219] leading-relaxed max-w-md font-medium">
              From the heart of Antalya to your table, experience the rich heritage of Turkish cuisine, prepared with passion and grilled to perfection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-[#800d0d] px-6 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase text-white shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="1.5" ry="1.5" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Reserve Your Table
              </a>

              <a
                href="/menu"
                className="flex items-center justify-center gap-2 border border-[#c5a880] hover:border-[#a0845c] bg-transparent px-6 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase text-[#a0845c] hover:text-[#806843] transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm10-7H18c-1.66 0-3 1.34-3 3v8h2v9h3v-9h2V2z" />
                </svg>
                Explore Menu
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#2d2219]/10 w-full mt-2">
              {/* Highlight 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2zm1.8 11.2c-.3.4-.8.8-1.3 1-.3.1-.5.3-.5.5 0 .4.4.8.8.8.2 0 .4-.1.5-.2.5-.3 1-.8 1.2-1.4.1-.3-.2-.7-.7-.7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#2d2219] leading-tight">
                    Charcoal Grilled
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#2d2219] leading-tight mt-0.5 font-medium">
                    Perfectly Grilled to Perfection
                  </span>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18M12 3c6.075 0 11 4.925 11 11 0 2.761-2.239 5-5 5H12M12 3C5.925 3 1 7.925 1 14c0 2.761 2.239 5 5 5h6" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#2d2219] leading-tight">
                    Fresh Ingredients
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#2d2219] leading-tight mt-0.5 font-medium">
                    Carefully Selected Every Day
                  </span>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 16a4 4 0 0 0-1.41-7.73 6 6 0 0 0-11.18 0A4 4 0 0 0 3 16h14z" />
                    <path d="M6 16v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#2d2219] leading-tight">
                    Authentic Recipes
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#2d2219] leading-tight mt-0.5 font-medium">
                    Traditional Flavours Since Generations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Shortened vertical length and extended leftward into the content space */}
        <div className="w-full lg:w-[56%] xl:w-[60%] h-[400px] lg:h-[480px] xl:h-[540px] relative overflow-visible z-10 self-center flex items-stretch lg:-ml-[8vw] xl:-ml-[8vw]">
          <HeroRight />
        </div>

      </main>

      {/* --- GLOW-WAVE DIVIDER --- */}
      <div className="relative w-full overflow-visible h-14 md:h-18 z-40">
        <svg viewBox="0 0 1440 60" className="w-full fill-none overflow-visible absolute bottom-0 left-0">
          <path
            d="M 0 40 C 360 75, 540 10, 720 10 C 900 10, 1080 75, 1440 40"
            stroke="#9c1010"
            strokeWidth="1.5"
            className="drop-shadow-[0_1px_4px_rgba(156,16,16,0.15)]"
          />
        </svg>

        {/* Center flame emblem badge */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#faf6f0] border border-primary flex items-center justify-center shadow-md">
          <svg className="w-3.5 h-3.5 fill-primary text-primary" viewBox="0 0 24 24">
            <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2zm1.8 11.2c-.3.4-.8.8-1.3 1-.3.1-.5.3-.5.5 0 .4.4.8.8.8.2 0 .4-.1.5-.2.5-.3 1-.8 1.2-1.4.1-.3-.2-.7-.7-.7z" />
          </svg>
        </div>
      </div>

      {/* --- POPULAR DISHES SECTION --- */}
      <PopularDishes />

      {/* --- LEGACY SECTION --- */}
      <LegacySection />

      {/* --- CATERING & EVENTS SECTION --- */}
      <CateringEvents />

      {/* --- MENU SECTION --- */}
      <MenuSection />

      {/* --- GALLERY SECTION --- */}
      <GallerySection />

      {/* --- TESTIMONIALS SECTION --- */}
      <TestimonialsSection />

      {/* --- FOOTER --- */}
      <FooterSection />
    </div>
  );
}



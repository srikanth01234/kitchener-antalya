"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 60);

      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/catering" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <>
      {/* ─── Fixed header wrapper ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {/* Outer padding container so the pill floats */}
        <div className="w-full px-4 md:px-8 pt-3 pb-0">
          {/* ── PILL BAR ── */}
          <div
            className={`relative w-full max-w-[1380px] mx-auto flex items-center justify-between rounded-b-2xl overflow-hidden transition-all duration-500 ${isScrolled
              ? "bg-black/85 backdrop-blur-[2px] shadow-2xl border border-white/10 py-2 px-4 md:px-6"
              : "bg-[#faf6f0]/95 backdrop-blur-sm shadow-lg border border-[#2d2219]/10 py-2.5 px-4 md:px-6"
              }`}
          >

            {/* ── Gold diagonal accent line (right 30% of bar) ── */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-[35%] overflow-hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute top-0 right-0 h-full w-full"
                viewBox="0 0 300 60"
                preserveAspectRatio="none"
              >
                <line
                  x1="160" y1="0"
                  x2="300" y2="60"
                  stroke={isScrolled ? "rgba(184,149,100,0.35)" : "rgba(100,60,20,0.12)"}
                  strokeWidth="1.2"
                />
              </svg>
            </div>

            {/* ────────────── LEFT: Logo ────────────── */}
            <Link href="/" className="flex items-center group shrink-0 z-10">
              <img
                src={isScrolled ? "/logo-dark.png" : "/logo-light.png"}
                alt="Antalya Restaurant Logo"
                className="h-13 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* ── Vertical Divider ── */}
            <div
              className={`hidden md:block self-stretch w-px my-2 mx-4 lg:mx-6 shrink-0 ${isScrolled ? "bg-white/15" : "bg-[#2d2219]/15"
                }`}
            />

            {/* ────────────── CENTER: Nav Links ────────────── */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 flex-1 justify-center z-10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative font-sans text-[11px] lg:text-xs font-bold tracking-[0.18em] uppercase py-1.5 transition-colors duration-200 group/link ${active
                      ? "text-[#e10613]"
                      : isScrolled
                        ? "text-white/75 hover:text-white"
                        : "text-[#2d2219]/75 hover:text-[#2d2219]"
                      }`}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#e10613] rounded-full transition-all duration-300 ${active ? "w-full" : "w-0 group-hover/link:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ────────────── RIGHT: CTA + Hamburger ────────────── */}
            <div className="flex items-center gap-3 z-10 shrink-0">
              {/* Reserve Table button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 bg-[#e10613] hover:bg-[#c00510] text-white text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase px-4 md:px-5 py-2.5 md:py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_4px_18px_rgba(225,6,19,0.35)] hover:scale-[1.02]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Reserve Table
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${isScrolled
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-[#2d2219]/90 hover:text-[#e10613] hover:bg-[#2d2219]/5"
                  }`}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[88px] md:h-[96px] w-full shrink-0" />

      {/* ─── Mobile Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ─── Mobile Drawer ─── */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-[#111111] border-l border-white/10 shadow-2xl p-6 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center shrink-0">
            <img
              src="/logo-dark.png"
              alt="Antalya Restaurant Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-sm font-bold tracking-[0.18em] uppercase py-3 px-3 rounded-lg transition-all duration-200 ${active
                  ? "text-[#e10613] bg-[#e10613]/10 border-l-2 border-[#e10613] pl-4"
                  : "text-white/70 hover:text-white hover:bg-white/5 hover:pl-4"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-[#e10613] hover:bg-[#c00510] text-white text-xs font-bold tracking-[0.18em] uppercase px-5 py-3.5 rounded-lg shadow-md transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Reserve Table
          </Link>
        </div>
      </div>
    </>
  );
}

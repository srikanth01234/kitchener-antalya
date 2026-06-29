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
      
      // Determine if we scrolled past the top threshold
      setIsScrolled(currentScrollY > 50);

      // Hide/Show navbar based on scroll direction
      if (currentScrollY <= 50) {
        // Always show navbar at the very top (Hero Section)
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
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
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false; 
    }
    return pathname === href;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out transform border-b ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled 
            ? "bg-black py-3 shadow-md border-white/10 backdrop-blur-md text-white" 
            : "bg-[#faf6f0] py-5 border-[#2d2219]/5 text-[#2d2219]"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/antalya-restaurant-logo.png"
              alt="Antalya Restaurant Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Center: Navigation */}
          <nav className={`hidden md:flex items-center gap-6 lg:gap-8 font-sans text-xs lg:text-sm font-bold tracking-widest transition-colors duration-300 ${
            isScrolled ? "text-white/80" : "text-[#2d2219]/80"
          }`}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${
                    active
                      ? "text-primary relative py-1"
                      : isScrolled
                        ? "hover:text-white transition-colors py-1"
                        : "hover:text-primary transition-colors py-1"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-4 h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Reserve Table Button & Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-[#c00510] px-4 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase text-white shadow-sm transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="1.5" ry="1.5" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="hidden sm:inline">Reserve Table</span>
              <span className="sm:hidden">Reserve</span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 focus:outline-none transition-colors ${
                isScrolled ? "text-white/90 hover:text-white" : "text-[#2d2219]/90 hover:text-primary"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent page content from shifting up under the fixed navbar */}
      <div className="h-[80px] md:h-[88px] w-full shrink-0" />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#faf6f0] border-l border-[#2d2219]/10 shadow-2xl p-6 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2d2219]/10">
          <span className="font-serif text-lg font-bold tracking-widest uppercase text-[#2d2219]">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-[#2d2219]/80 hover:text-primary transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-sans text-sm font-bold tracking-widest uppercase py-2 transition-colors ${
                  active ? "text-primary border-l-2 border-primary pl-3" : "text-[#2d2219]/80 hover:text-primary hover:pl-2 transition-all duration-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

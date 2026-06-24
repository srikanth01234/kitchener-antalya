"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/catering" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false; // Anchors are checked strictly inside the page if needed, but not highlighted as path active states
    }
    return pathname === href;
  };

  return (
    <>
      <header className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between z-50">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Circular logo badge */}
          <div className="relative w-12 h-12 rounded-full border border-primary/20 bg-white/60 flex flex-col items-center justify-center p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg className="w-5 h-5 fill-primary text-primary" viewBox="0 0 24 24">
              <path d="M12 2C10 6 7 8 7 11.5c0 2.5 1.8 4.5 4.5 4.5S16 14 16 11.5C16 8 13 6 12 2zm1.8 11.2c-.3.4-.8.8-1.3 1-.3.1-.5.3-.5.5 0 .4.4.8.8.8.2 0 .4-.1.5-.2.5-.3 1-.8 1.2-1.4.1-.3-.2-.7-.7-.7z" />
            </svg>
            <span className="text-[5.5px] text-[#2d2219]/80 font-bold tracking-wider text-center uppercase leading-none mt-0.5 font-sans">
              Charcoal Kebab Grill
            </span>
          </div>
          {/* Brand Name */}
          <div className="flex flex-col leading-none font-sans text-xl tracking-widest font-black uppercase">
            <span className="text-[#2d2219]">Antalya</span>
            <span className="text-primary font-extrabold text-sm mt-0.5">Restaurant</span>
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-xs lg:text-sm font-bold tracking-widest text-[#2d2219]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${
                  active
                    ? "text-primary relative py-1"
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
            className="flex items-center gap-2 bg-primary hover:bg-[#800d0d] px-4 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase text-white shadow-sm transition-all duration-300"
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
            className="md:hidden p-2 text-[#2d2219] hover:text-primary focus:outline-none transition-colors"
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
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#faf6f0] border-l border-[#c5a880]/20 shadow-2xl p-6 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2d2219]/10">
          <span className="font-serif text-lg font-bold tracking-widest uppercase text-[#2d2219]">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-[#2d2219] hover:text-primary transition-colors focus:outline-none"
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
                  active ? "text-primary border-l-2 border-primary pl-3" : "text-[#2d2219] hover:text-primary hover:pl-2 transition-all duration-200"
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

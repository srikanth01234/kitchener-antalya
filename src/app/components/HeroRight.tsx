"use client";

import React, { useEffect, useState } from "react";

export default function HeroRight() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Soft light-gold particles for ambient overlay in light theme
  const particles = [
    { left: "8%", delay: "0s", size: "4px", duration: "14s" },
    { left: "22%", delay: "-2s", size: "6px", duration: "18s" },
    { left: "38%", delay: "-5s", size: "5px", duration: "22s" },
    { left: "52%", delay: "-1s", size: "4px", duration: "13s" },
    { left: "68%", delay: "-7s", size: "6px", duration: "16s" },
    { left: "85%", delay: "-3s", size: "5px", duration: "20s" },
  ];

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-0 flex items-stretch overflow-visible select-none">
      {/* 1. Atmospheric Ambient Layer (Soft Glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow behind the food */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-radial from-primary/5 via-primary/1 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Soft floating particles */}
        {isMounted &&
          particles.map((p, idx) => (
            <span
              key={idx}
              className="absolute bottom-0 rounded-full bg-gradient-to-t from-[#c5a880]/30 to-amber-300/10 animate-float-embers opacity-0 filter blur-[0.5px]"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.duration,
                boxShadow: "0 0 6px rgba(197, 168, 128, 0.2)",
              }}
            />
          ))}
      </div>

      {/* 2. SVG Frame: Masked Image & Outlines */}
      <div className="relative w-full h-full overflow-visible">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full drop-shadow-[0_8px_30px_rgba(45,34,25,0.08)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid slice"
        >
          <defs>
            {/* The circular clip mask for the lamb chops photo - sweeps left in center */}
            <clipPath id="food-mask">
              <path d="M 380 0 A 598 598 0 0 0 380 1000 L 1000 1000 L 1000 0 Z" />
            </clipPath>

            {/* Left Edge Fade to blend food image with light background */}
            <linearGradient id="left-fade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#faf6f0" stopOpacity="1" />
              <stop offset="12%" stopColor="#faf6f0" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#faf6f0" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#faf6f0" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#faf6f0" stopOpacity="0" />
            </linearGradient>
            {/* Bottom Edge Fade to blend food image with light background */}
            <linearGradient id="bottom-fade" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#faf6f0" stopOpacity="1" />
              <stop offset="12%" stopColor="#faf6f0" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#faf6f0" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#faf6f0" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#faf6f0" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background container boundary backing */}
          <path
            d="M 380 0 A 598 598 0 0 0 380 1000"
            stroke="#e10613"
            strokeWidth="1.5"
            strokeOpacity="0.1"
          />

          {/* Masked Food Image with left side fade */}
          <g clipPath="url(#food-mask)">
            {/* Light cream background inside the crop */}
            <rect x="80" y="0" width="920" height="1000" fill="#faf6f0" />

            {/* Main Turkish Kebab Platter Image */}
            <image
              href="/turkish_kebab_hero.png"
              x="50"
              y="-10"
              width="950"
              height="1020"
              preserveAspectRatio="xMaxYMid meet"
              className="origin-center ken-burns"
            />

            {/* Soft overlay gradient to blend the image edges with the left light space */}
            <rect
              x="80"
              y="0"
              width="450"
              height="1000"
              fill="url(#left-fade)"
            />
          </g>

          {/* Inner Red Line (Food boundary border) */}
          <path
            d="M 380 0 A 598 598 0 0 0 380 1000"
            stroke="#e10613"
            strokeWidth="2.5"
            className="opacity-80 draw-arc-red"
          />

          {/* Outer Concentric Line (Solid Upper Segment - complete C-shape top) */}
          <path
            d="M 330 0 A 648 648 0 0 0 94 500"
            stroke="#c5a880"
            strokeWidth="1.2"
            opacity="0.65"
            className="draw-arc-gold-solid"
          />

          {/* Outer Concentric Line (Dashed Lower Segment - complete C-shape bottom) */}
          <path
            d="M 94 500 A 648 648 0 0 0 330 1000"
            stroke="#c5a880"
            strokeWidth="1.2"
            strokeDasharray="4 12"
            strokeLinecap="round"
            className="draw-arc-gold-dashed"
          />

          {/* Intersecting design node details along the outer red arc */}
          <circle cx="197" cy="150" r="3.5" fill="#c5a880" className="svg-dot svg-dot-1" />
          <circle cx="100" cy="410" r="3.5" fill="#c5a880" className="svg-dot svg-dot-2" />
          <circle cx="100" cy="590" r="3.5" fill="#c5a880" className="svg-dot svg-dot-3" />
          <circle cx="197" cy="850" r="3.5" fill="#c5a880" className="svg-dot svg-dot-4" />

          {/* 3. "WATCH OUR STORY" Curved Badge inside the arc gap */}
          <defs>
            {/* Text path starts at bottom left of the gap, goes up to top left */}
            <path id="text-arc" d="M 94 554 A 54 54 0 0 1 94 446" />
          </defs>

          <g className="group cursor-pointer">
            {/* Curved Text aligned to the path */}
            <text fill="#2d2219" fontSize="13" letterSpacing="4.5" className="font-sans font-bold uppercase opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <textPath href="#text-arc" startOffset="50%" textAnchor="middle">
                WATCH OUR STORY
              </textPath>
            </text>

            {/* Concentric red arc on the right side of the play button */}
            <path
              d="M 94 446 A 54 54 0 0 1 94 554"
              stroke="#e10613"
              strokeWidth="1.2"
              fill="none"
              opacity="0.4"
              className="group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Glowing ripple pulse ring behind play button */}
            <circle
              cx="94"
              cy="500"
              r="32"
              stroke="#e10613"
              strokeWidth="1"
              fill="none"
              className="pointer-events-none play-pulse-ring"
            />

            {/* Inner Play Button Circle */}
            <circle
              cx="94"
              cy="500"
              r="32"
              stroke="#e10613"
              strokeWidth="1.2"
              fill="#faf6f0"
              className="origin-[94px_500px] transition-all duration-300 group-hover:scale-110 group-hover:stroke-primary group-hover:fill-primary/5 shadow-sm"
            />

            {/* Play Arrow Icon */}
            <polygon
              points="88,488 88,512 106,500"
              fill="#e10613"
              className="origin-[94px_500px] transition-all duration-300 group-hover:scale-110 group-hover:fill-primary"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}


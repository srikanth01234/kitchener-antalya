import React from 'react';
import Link from 'next/link';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryIntro from '../components/gallery/GalleryIntro';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryFooterText from '../components/gallery/GalleryFooterText';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Gallery | Antalya Restaurant',
  description: 'A visual journey through authentic Turkish dining at Antalya.',
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-[#faf6f0] text-[#2d2219] flex flex-col overflow-x-hidden font-sans selection:bg-primary selection:text-white">
      
      {/* --- HEADER --- */}
      <Navbar />

      {/* --- PAGE CONTENT --- */}
      <main className="w-full flex-1">
        <GalleryHero />
        <GalleryIntro />
        <GalleryGrid />
        <GalleryFooterText />
      </main>

      {/* --- FOOTER --- */}
      <FooterSection />

    </div>
  );
}

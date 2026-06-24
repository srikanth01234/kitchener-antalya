import React from 'react';
import Link from 'next/link';
import BlogHero from '../components/blog/BlogHero';
import BlogIntro from '../components/blog/BlogIntro';
import FeaturedStory from '../components/blog/FeaturedStory';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCTA from '../components/blog/BlogCTA';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Blog | Antalya Restaurant',
  description: 'Read the latest stories, recipes, and news from Antalya Restaurant.',
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#faf6f0] text-[#2d2219] flex flex-col overflow-x-hidden font-sans selection:bg-primary selection:text-white">
      
      {/* --- HEADER --- */}
      <Navbar />

      {/* --- PAGE CONTENT --- */}
      <main className="w-full flex-1">
        <BlogHero />
        <BlogIntro />
        <FeaturedStory />
        <BlogGrid />
        <BlogCTA />
      </main>

      {/* --- FOOTER --- */}
      <FooterSection />

    </div>
  );
}

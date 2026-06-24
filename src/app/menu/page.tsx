import React from "react";
import MenuHero from "../components/menu/MenuHero";
import MenuIntro from "../components/menu/MenuIntro";
import FeaturedDish from "../components/menu/FeaturedDish";
import MenuCategories from "../components/menu/MenuCategories";
import MenuCTA from "../components/menu/MenuCTA";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Our Menu | Antalya Restaurant",
  description: "Explore our authentic Turkish cuisine menu, featuring charcoal-grilled kebabs, fresh mezze, and traditional flavors.",
};

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-[#fdfdfb] text-[#333] flex flex-col font-sans selection:bg-[#7a1f1f] selection:text-white">
      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- MENU HERO SECTION --- */}
      <MenuHero />

      {/* --- MENU INTRO SECTION --- */}
      <MenuIntro />

      {/* --- FEATURED DISH SECTION --- */}
      <FeaturedDish />

      {/* --- MENU CATEGORIES SECTION --- */}
      <MenuCategories />

      {/* --- MENU CALL TO ACTION --- */}
      <MenuCTA />

      {/* --- FOOTER --- */}
      <FooterSection />
    </div>
  );
}

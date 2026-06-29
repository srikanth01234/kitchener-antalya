import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutDetails from "../components/about/AboutDetails";
import AboutWhyChooseUs from "../components/about/AboutWhyChooseUs";
import AboutFAQ from "../components/about/AboutFAQ";

export const metadata = {
  title: "About Us - Antalya Restaurant",
  description: "Learn more about Antalya's story, culinary traditions, and heritage of warm Turkish hospitality in Ontario.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf6f0] selection:bg-[#e10613] selection:text-white flex flex-col">
      <Navbar />
      
      <AboutHero />
      <AboutStory />
      <AboutDetails />
      <AboutWhyChooseUs />
      <AboutFAQ />

      <FooterSection />
    </main>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import CateringHero from "../components/catering/CateringHero";
import CateringOccasions from "../components/catering/CateringOccasions";
import CateringFeaturesQuote from "../components/catering/CateringFeaturesQuote";
import CateringPackages from "../components/catering/CateringPackages";
import CateringAddOns from "../components/catering/CateringAddOns";
import CateringTradition from "../components/catering/CateringTradition";

export const metadata = {
  title: "Catering - Antalya Restaurant",
  description: "Crafted catering for every occasion. Antalya brings the authentic taste of Turkey to your events.",
};

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-[#faf6f0] selection:bg-[#e10613] selection:text-white flex flex-col">
      <Navbar />
      
      <CateringHero />
      <CateringOccasions />
      <CateringPackages />
      <CateringAddOns />
      <CateringFeaturesQuote />
      <CateringTradition />
      

      <FooterSection />
    </main>
  );
}

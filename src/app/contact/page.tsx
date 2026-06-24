import React from "react";
import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactBookingCTA from "../components/contact/ContactBookingCTA";
import ContactFeatures from "../components/contact/ContactFeatures";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Contact Us | Antalya Restaurant",
  description: "Get in touch with Antalya Restaurant. Book a table, inquire about events, or simply say hello.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#fdfdfb] text-[#333] flex flex-col font-sans selection:bg-[#7a1f1f] selection:text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Contact Header */}
      <ContactHeader />

      {/* Main Content Split */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">
          
          {/* Left Column: Info & Image */}
          <div className="w-full">
             <ContactInfo />
          </div>

          {/* Right Column: Form & Booking CTA */}
          <div className="w-full flex flex-col gap-8">
            <ContactForm />
            <ContactBookingCTA />
          </div>

        </div>
      </div>

      {/* Bottom Features */}
      <ContactFeatures />

      {/* Global Footer */}
      <FooterSection />

    </div>
  );
}

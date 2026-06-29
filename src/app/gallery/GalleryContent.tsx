"use client";

import React, { useState } from "react";
import GalleryIntro from "../components/gallery/GalleryIntro";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryFooterText from "../components/gallery/GalleryFooterText";

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <GalleryIntro 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <GalleryGrid 
        selectedCategory={selectedCategory} 
      />
      <GalleryFooterText />
    </>
  );
}

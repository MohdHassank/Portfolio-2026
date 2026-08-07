import React from "react";
import BackgroundGrid from "./BackgroundGrid";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#f8fafd] pt-6"
    >
      <BackgroundGrid />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2 flex justify-start">
          <HeroContent />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <HeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
import HeroSection from "../components/HeroSection";
import ServiceSpectrum from "../components/ServiceSpectrum";
import PrinciplesSection from "../components/PrinciplesSection";
import WorkSection from "../components/WorkSection";
import CTASection from "../components/CTASection";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for section to render
      }
    }
  }, [location]);

  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServiceSpectrum />
      </div>
      <div id="principles">
        <PrinciplesSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <CTASection />
    </>
  );
}

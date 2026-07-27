"use client";

import { useEffect } from "react";
import BenefitsSection from "./BenefitsSection";
import FaqSection from "./FaqSection";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PlansSection from "./PlansSection";
import ProblemSection from "./ProblemSection";
import ProcessSection from "./ProcessSection";
import SolutionSection from "./SolutionSection";
import TechnologySection from "./TechnologySection";

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Navbar /><main><Hero /><ProblemSection /><SolutionSection /><BenefitsSection /><ProcessSection /><TechnologySection /><PlansSection /><FaqSection /><FinalCTA /></main><Footer /></>;
}

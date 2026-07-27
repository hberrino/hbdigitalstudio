"use client";

import { useState } from "react";
import { plans } from "../data/plans";
import { SectionHeading } from "./ui";
import FeaturesModal from "./FeaturesModal";
import PlanCard from "./PlanCard";

export default function PlansSection() {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <section className="plans section" id="planes"><div className="container">
      <p className="plans__promo"><span />Aprovechá un 50% OFF por tiempo limitado</p>
      <SectionHeading
        eyebrow="Planes"
        title="Elegí la solución adecuada para tu negocio"
        text="Desde una presencia digital profesional hasta un sistema completamente adaptado a tu operación."
        align="center"
      />
      <div className="plans__grid">
        {plans.map((plan) => <PlanCard plan={plan} key={plan.id} onInfo={() => setFeaturesOpen(true)} />)}
      </div>
      <p className="plans__scope-note">El alcance, las funcionalidades y los tiempos se definen luego de analizar las necesidades de cada negocio.</p>
    </div>
      <FeaturesModal open={featuresOpen} onClose={() => setFeaturesOpen(false)} />
    </section>
  );
}

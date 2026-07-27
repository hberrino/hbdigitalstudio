"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { plans } from "../data/plans";
import { SectionHeading } from "./ui";
import ComparisonModal from "./ComparisonModal";
import FeaturesModal from "./FeaturesModal";
import PlanCard from "./PlanCard";

export default function PlansSection() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);

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
      <div className="plans__compare reveal">
        <p>¿Querés ver las diferencias en detalle?</p>
        <button type="button" onClick={() => setComparisonOpen(true)}>
          <img className="plans__compare-icon" src="/icons8-natural-user-interface-2-50.png" alt="" />
          Comparación de planes
          <ArrowUpRight size={17} />
        </button>
      </div>
    </div>
      <FeaturesModal open={featuresOpen} onClose={() => setFeaturesOpen(false)} />
      <ComparisonModal open={comparisonOpen} onClose={() => setComparisonOpen(false)} />
    </section>
  );
}

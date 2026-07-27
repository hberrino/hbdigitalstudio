import { useEffect, useRef, useState } from "react";
import { plans } from "../data/plans";
import { SectionHeading } from "./ui";
import FeaturesModal from "./FeaturesModal";
import PlanCard from "./PlanCard";

export default function PlansSection() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mobile = window.matchMedia("(max-width: 760px)");
    const centerImpacto = () => {
      if (!mobile.matches) return;
      const card = grid.querySelector('[data-plan-id="impacto"]');
      if (!card) return;
      grid.scrollLeft = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
    };

    const frame = requestAnimationFrame(centerImpacto);
    const resizeObserver = new ResizeObserver(centerImpacto);
    resizeObserver.observe(grid);
    mobile.addEventListener("change", centerImpacto);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      mobile.removeEventListener("change", centerImpacto);
    };
  }, []);

  function centerSelectedPlan(event) {
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    const card = event.target.closest(".plan-card");
    const grid = gridRef.current;
    if (!card || !grid) return;
    grid.scrollTo({
      left: card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <section className="plans section" id="planes">
      <div className="container">
      <SectionHeading
        eyebrow="Planes"
        title="Elegí la solución adecuada para tu negocio"
        text="Desde una presencia digital profesional hasta un sistema completamente adaptado a tu operación."
        align="center"
      />
      <div className="plans__marquee" aria-label="Promoción: abonás únicamente si el resultado es el que esperabas. Aprovechá 50% OFF por tiempo limitado en todos nuestros planes.">
        <div className="plans__marquee-track" aria-hidden="true">
          {[0, 1, 2, 3].map((item) => (
            <span key={item}>Abonás únicamente si el resultado es el que esperabas <i /> Aprovechá <strong>50% OFF</strong> por tiempo limitado en todos nuestros planes</span>
          ))}
        </div>
      </div>
      <div className="plans__grid" ref={gridRef} onClick={centerSelectedPlan}>
        {plans.map((plan) => <PlanCard plan={plan} key={plan.id} onInfo={() => setFeaturesOpen(true)} />)}
      </div>
      <p className="plans__scope-note">El alcance, las funcionalidades y los tiempos se definen luego de analizar las necesidades de cada negocio.</p>
    </div>
      <FeaturesModal open={featuresOpen} onClose={() => setFeaturesOpen(false)} />
    </section>
  );
}

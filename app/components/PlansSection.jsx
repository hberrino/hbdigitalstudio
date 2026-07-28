import { useEffect, useRef, useState } from "react";
import { plans } from "../data/plans";
import { SectionHeading } from "./ui";
import FeaturesModal from "./FeaturesModal";
import PlanCard from "./PlanCard";

const OFFER_END = new Date("2026-08-27T23:59:59-03:00").getTime();

function getOfferTimeLeft() {
  const total = Math.max(0, OFFER_END - Date.now());
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
  };
}

function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const update = () => setTimeLeft(getOfferTimeLeft());
    update();
    const interval = window.setInterval(update, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  const values = timeLeft ?? { days: "--", hours: "--", minutes: "--", seconds: "--" };
  const units = [
    ["Días", values.days],
    ["Horas", values.hours],
    ["Min", values.minutes],
    ["Seg", values.seconds],
  ];

  return (
    <div className="plans__countdown">
      <p><strong>50% OFF</strong><span>Queda</span></p>
      <div className="plans__countdown-time" role="timer" aria-label="Tiempo restante de la promoción">
        {units.map(([label, value]) => (
          <span className="plans__countdown-unit" key={label}>
            <strong>{typeof value === "number" ? String(value).padStart(2, "0") : value}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <small className="plans__countdown-date">Promoción válida hasta el 27 de agosto de 2026.</small>
    </div>
  );
}

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
      <OfferCountdown />
      <p className="plans__scope-note">El alcance, las funcionalidades y los tiempos se definen luego de analizar las necesidades de cada negocio.</p>
    </div>
      <FeaturesModal open={featuresOpen} onClose={() => setFeaturesOpen(false)} />
    </section>
  );
}

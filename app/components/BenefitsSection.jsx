"use client";

import { useEffect, useRef, useState } from "react";
import { benefits } from "../data/benefits";
import { SectionHeading } from "./ui";

export default function BenefitsSection() {
  const viewportRef = useRef(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const resumeTimerRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    let lastTime = performance.now();
    let segmentWidth = 0;

    const prepare = () => {
      segmentWidth = viewport.scrollWidth / 3;
      viewport.scrollLeft = segmentWidth;
    };

    const animate = (time) => {
      const elapsed = Math.min(time - lastTime, 40);
      lastTime = time;

      if (!reducedMotion && !pausedRef.current && segmentWidth) {
        viewport.scrollLeft += elapsed * 0.04;
      }

      if (segmentWidth) {
        if (viewport.scrollLeft >= segmentWidth * 2) viewport.scrollLeft -= segmentWidth;
        if (viewport.scrollLeft <= 1) viewport.scrollLeft += segmentWidth;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(() => {
      prepare();
      frame = requestAnimationFrame(animate);
    });

    const resizeObserver = new ResizeObserver(prepare);
    resizeObserver.observe(viewport);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  function pause() {
    pausedRef.current = true;
    clearTimeout(resumeTimerRef.current);
  }

  function resume(delay = 0) {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  }

  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pause();
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: viewportRef.current.scrollLeft,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    if (!dragRef.current.active) return;
    viewportRef.current.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
  }

  function onPointerUp(event) {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resume(1000);
  }

  return (
    <section className="benefits section">
      <div className="container benefits__top">
        <SectionHeading
          eyebrow="Una solución integral"
          title="Todo lo que tu negocio necesita para construir una presencia digital sólida"
          text="Combinamos estrategia, diseño, tecnología e infraestructura para que tu página se vea bien y, sobre todo, cumpla un propósito."
        />
        <p className="benefits__hint">
          <span aria-hidden="true" />
          Deslizá para explorar
        </p>
      </div>

      <div className="container">
        <div className="benefits__carousel-shell">
          <div
            ref={viewportRef}
            className={`benefits__viewport ${dragging ? "is-dragging" : ""}`}
            role="region"
            aria-label="Beneficios incluidos"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="benefits__track">
              {[0, 1, 2].map((setIndex) =>
                benefits.map(({ title, text, icon: Icon }) => (
                  <article className="benefit-card" key={`${setIndex}-${title}`} aria-hidden={setIndex !== 1}>
                    <span className="benefit-card__icon"><Icon size={27} /></span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

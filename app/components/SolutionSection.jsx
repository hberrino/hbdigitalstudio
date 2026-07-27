import { useEffect, useRef, useState } from "react";
import { Blocks, Headphones, LockKeyhole, Palette, Search, Target, X } from "lucide-react";
import { SectionHeading } from "./ui";

const solutions = [
  ["Estrategia", "Analizamos tu negocio, tus servicios, tus objetivos y el público al que querés llegar.", Target],
  ["Diseño personalizado", "Creamos una identidad visual coherente con tu marca y la experiencia que querés transmitir.", Palette],
  ["Desarrollo profesional", "Construimos una web rápida, responsive, estable y preparada para distintos dispositivos.", Blocks],
  ["Posicionamiento SEO", "Aplicamos una estructura que ayuda a los buscadores a interpretar correctamente tu contenido.", Search],
  ["Seguridad y estabilidad", "Implementamos HTTPS y configuraciones orientadas a proteger y mantener disponible el sitio.", LockKeyhole],
  ["Acompañamiento", "Seguimos cerca después de publicar para resolver consultas, realizar ajustes y mantener tu web al día.", Headphones],
];

export default function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeRef = useRef(null);
  const active = activeIndex === null ? null : solutions[activeIndex];
  const ActiveIcon = active?.[2];

  useEffect(() => {
    if (!active) return;
    const previous = document.activeElement;
    const closeOnEscape = (event) => event.key === "Escape" && setActiveIndex(null);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [active]);

  return (
    <section className="solution section" id="servicios"><div className="container">
      <SectionHeading
        eyebrow="Cómo te ayudamos"
        title="Creamos una web alineada con tu negocio, tus clientes y tus objetivos"
        text="No trabajamos con soluciones genéricas. Primero entendemos qué hacés, qué necesitás comunicar y qué acción esperás de cada visitante."
        align="center"
      />

      <div className="solution__grid">
        {solutions.map(([title, text, Icon], index) => (
          <article className="solution-card reveal" key={title} style={{ "--delay": `${index * 60}ms` }}>
            <div className="solution-card__top"><Icon size={22} /><span>0{index + 1}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>

      <div className="solution__mobile-grid">
        {solutions.map(([title, , Icon], index) => (
          <button type="button" key={title} onClick={() => setActiveIndex(index)}>
            <Icon size={22} />
            <span>{title}</span>
            <small>0{index + 1}</small>
          </button>
        ))}
      </div>
    </div>

      {active && (
        <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setActiveIndex(null)}>
          <div className="modal solution-modal" role="dialog" aria-modal="true" aria-labelledby="solution-modal-title">
            <button ref={closeRef} className="modal__close" onClick={() => setActiveIndex(null)} aria-label="Cerrar detalle"><X /></button>
            <ActiveIcon size={28} aria-hidden="true" />
            <span className="eyebrow">Cómo te ayudamos</span>
            <h2 id="solution-modal-title">{active[0]}</h2>
            <p>{active[1]}</p>
          </div>
        </div>
      )}
    </section>
  );
}

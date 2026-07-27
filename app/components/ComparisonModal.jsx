"use client";

import { useEffect, useRef } from "react";
import { Check, Minus, X } from "lucide-react";
import { comparison } from "../data/plans";

function Value({ value }) {
  if (value === true) return <Check className="comparison__yes" size={18} aria-label="Incluido" />;
  if (value === false) return <Minus className="comparison__no" size={18} aria-label="No incluido" />;
  return <span>{value}</span>;
}

export default function ComparisonModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = document.querySelectorAll(".comparison-modal button, .comparison-modal a");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal comparison-modal" role="dialog" aria-modal="true" aria-labelledby="comparison-title">
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Cerrar comparación"><X /></button>
        <span className="eyebrow">Comparación de planes</span>
        <h2 id="comparison-title">Todo lo que incluye cada solución</h2>
        <p>Compará el alcance de cada plan y elegí el punto de partida más adecuado para tu negocio.</p>

        <div className="comparison__desktop">
          <table>
            <thead><tr><th>Característica</th><th>Function</th><th>Impacto</th><th>System</th></tr></thead>
            <tbody>
              {comparison.map(([label, impacto, fn, system]) => (
                <tr key={label}><th>{label}</th><td><Value value={fn} /></td><td className="comparison__featured"><Value value={impacto} /></td><td><Value value={system} /></td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison__mobile">
          {[
            ["Function", 1],
            ["Impacto", 0],
            ["System", 2],
          ].map(([plan, planIndex]) => (
            <details key={plan} open={plan === "Impacto"}>
              <summary>Plan {plan}<span>Ver características</span></summary>
              <div>{comparison.map(([label, ...values]) => <p key={label}><span>{label}</span><Value value={values[planIndex]} /></p>)}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

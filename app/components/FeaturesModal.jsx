import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

const examples = ["Paneles de administración", "Sistemas de turnos o reservas", "Registro e inicio de sesión", "Gestión de clientes, productos o servicios", "Envíos automáticos de correos", "Generación de informes", "Integración con sistemas de pago", "Automatización de tareas internas", "Conexión con APIs o servicios externos"];

export default function FeaturesModal({ open, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = document.querySelectorAll(".modal button, .modal a");
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; previous?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Cerrar explicación"><X /></button>
        <span className="eyebrow">Plan Function</span><h2 id="modal-title">¿Qué significa agregar funcionalidades?</h2>
        <p>Son herramientas creadas para que tu página pueda realizar tareas específicas, no solamente mostrar información.</p>
        <div className="modal__list">{examples.map((item) => <span key={item}><Check size={16} />{item}</span>)}</div>
      </div>
    </div>
  );
}

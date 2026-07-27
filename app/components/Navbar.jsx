import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui";

const links = [["Inicio", "#inicio"], ["Servicios", "#servicios"], ["Cómo trabajamos", "#proceso"], ["Planes", "#planes"], ["Preguntas frecuentes", "#preguntas"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand brand--logo" href="#inicio" aria-label="HB Digital Studio, ir al inicio">
          <span className="brand__logo-viewport"><img src="/logohb.png" alt="" /></span>
        </a>
        <nav id="mobile-navigation" className={`navbar__nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
          <Button href="#contacto" className="navbar__cta" iconSrc="/icons8-cursor-64.png">Solicitar presupuesto</Button>
        </nav>
        <button className="navbar__toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

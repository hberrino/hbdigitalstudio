import { Blocks, Headphones, LockKeyhole, Palette, Search, Target } from "lucide-react";
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
  return (
    <section className="solution section" id="servicios"><div className="container">
      <SectionHeading eyebrow="Cómo te ayudamos" title="Creamos una web alineada con tu negocio, tus clientes y tus objetivos" text="No trabajamos con soluciones genéricas. Primero entendemos qué hacés, qué necesitás comunicar y qué acción esperás de cada visitante." align="center" />
      <div className="solution__grid">{solutions.map(([title, text, Icon], index) => <article className="solution-card reveal" key={title} style={{ "--delay": `${index * 60}ms` }}><div className="solution-card__top"><Icon size={22} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
  );
}

import { CircleX, SearchX, TrendingDown, UserRoundX } from "lucide-react";

const problems = [
  ["Menor confianza", "Frente a competidores que ya se muestran de forma profesional.", UserRoundX],
  ["Información invisible", "Clientes que no encuentran lo que necesitan de manera rápida.", SearchX],
  ["Oportunidades perdidas", "Consultas que nunca llegan por falta de un canal claro.", TrendingDown],
  ["Valor desaprovechado", "Una marca que no transmite todo lo bueno que tiene para ofrecer.", CircleX],
];

export default function ProblemSection() {
  return (
    <section className="problem section" id="problema"><div className="container">
      <div className="problem__intro reveal"><span className="eyebrow">El desafío</span><h2>No tener una página web puede costarte más de lo que parece: <em>clientes, confianza y oportunidades.</em></h2><p>Cuando alguien busca lo que ofrecés y no encuentra información clara sobre tu negocio, la decisión suele ser inmediata: continúa con otra opción. Sin una presencia profesional, tu marca pierde visibilidad incluso antes de poder demostrar su valor.</p></div>
      <div className="problem__grid">{problems.map(([title, text, Icon], index) => <article className="problem-card reveal" style={{ "--delay": `${index * 70}ms` }} key={title}><span className="problem-card__icon"><Icon size={22} /></span><span className="problem-card__number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <blockquote className="manifesto reveal"><span>“</span>Una página web no es solamente presencia. <strong>Es una herramienta comercial disponible las 24 horas.</strong></blockquote>
    </div></section>
  );
}

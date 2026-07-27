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
      <div className="problem__intro reveal"><span className="eyebrow">El desafío</span><h2>Tu negocio puede ser excelente. Pero si no se encuentra en internet, <em>está perdiendo oportunidades.</em></h2><p>Cada día, potenciales clientes buscan productos, servicios y profesionales desde su teléfono. Una presencia poco clara, desactualizada o inexistente puede hacer que elijan otra opción antes de conocer lo que tu negocio ofrece.</p></div>
      <div className="problem__grid">{problems.map(([title, text, Icon], index) => <article className="problem-card reveal" style={{ "--delay": `${index * 70}ms` }} key={title}><span className="problem-card__icon"><Icon size={22} /></span><span className="problem-card__number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <blockquote className="manifesto reveal"><span>“</span>Una página web no es solamente presencia. <strong>Es una herramienta comercial disponible las 24 horas.</strong></blockquote>
    </div></section>
  );
}

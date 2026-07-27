import { processSteps } from "../data/process";
import { SectionHeading } from "./ui";

export default function ProcessSection() {
  return (
    <section className="process section" id="proceso"><div className="container">
      <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro, desde la idea hasta la publicación" text="Sabés qué está pasando, qué sigue y qué necesitamos en cada etapa." align="center" />
      <div className="process__line">{processSteps.map((step, index) => <article className="process-step reveal" key={step.number} style={{ "--delay": `${index * 70}ms` }}><div className="process-step__number">{step.number}</div><div className="process-step__body"><h3>{step.title}</h3><p>{step.text}</p>{step.status && <span className="process-step__status"><i />{step.status}</span>}</div></article>)}</div>
    </div></section>
  );
}

import { processSteps } from "../data/process";
import { SectionHeading } from "./ui";

export default function ProcessSection() {
  return (
    <section className="process section" id="proceso"><div className="container">
      <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro, desde la idea hasta la publicación" text="Sabés qué está pasando, qué sigue y qué necesitamos en cada etapa." align="center" />
      <div className="process__line">
        <div className="process__endpoint process__endpoint--start"><span>Comienzo</span></div>
        {processSteps.map((step, index) => (
          <article className="process-step reveal" key={step.title} style={{ "--delay": `${index * 70}ms` }}>
            <span className="process-step__node" aria-hidden="true" />
            <div className="process-step__body"><h3>{step.title}</h3><p>{step.text}</p></div>
          </article>
        ))}
        <div className="process__endpoint process__endpoint--end"><i /><span>Online</span></div>
      </div>
    </div></section>
  );
}

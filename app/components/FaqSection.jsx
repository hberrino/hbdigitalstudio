"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/faqs";
import CopyEmailButton from "./CopyEmailButton";
import { SectionHeading } from "./ui";

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section" id="preguntas"><div className="container faq__grid">
      <div className="faq__intro"><SectionHeading eyebrow="Preguntas frecuentes" title="Lo que necesitás saber antes de empezar" text="Si tu duda no está acá, copiá nuestro correo y escribinos. Te respondemos de forma clara y sin compromiso." /><CopyEmailButton /></div>
      <div className="accordion">{faqs.map((item, index) => {
        const active = open === index;
        return <article className={`accordion__item ${active ? "is-open" : ""}`} key={item.question}><h3><button type="button" aria-expanded={active} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(active ? -1 : index)}><span>{item.question}</span><Plus aria-hidden="true" /></button></h3><div className="accordion__panel" id={`faq-panel-${index}`} role="region" aria-hidden={!active}><div><p>{item.answer}</p></div></div></article>;
      })}</div>
    </div></section>
  );
}

import { ArrowDown, CheckCircle2, MousePointerClick } from "lucide-react";
import { Button } from "./ui";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">Desarrollo web para negocios que quieren crecer</span>
          <h1>Transformamos tu negocio en una experiencia digital <em>profesional.</em></h1>
          <p>Diseñamos y desarrollamos páginas web pensadas para atraer clientes, fortalecer tu marca y acompañar el crecimiento de tu negocio.</p>
          <div className="hero__actions"><Button href="#contacto">Quiero mi página web</Button><Button href="#planes" variant="secondary">Ver planes</Button></div>
          <p className="hero__note"><span /> Tu negocio trabaja todos los días. Tu página web también debería hacerlo.</p>
        </div>
        <div className="showcase" aria-label="Representación de una página web adaptable a notebook y celular">
          <div className="showcase__glow" />
          <div className="laptop">
            <div className="laptop__top">
              <div className="browser-bar"><i /><i /><i /><span>tumarca.com</span></div>
              <div className="mock-nav"><b>marca.</b><span /><span /><button>Contactar</button></div>
              <div className="mock-hero"><small>Una idea que crece</small><strong>Tu negocio,<br /><em>mejor presentado.</em></strong><p>Una experiencia clara que transforma visitas en oportunidades.</p><button>Conocer más <MousePointerClick size={12} /></button></div>
              <div className="mock-stats"><span><b>+24h</b> presencia online</span><span><b>100%</b> responsive</span><span><b>01</b> objetivo claro</span></div>
            </div><div className="laptop__base" />
          </div>
          <div className="phone"><div className="phone__speaker" /><div className="phone__content"><div className="phone__brand">marca.</div><span>Soluciones simples</span><strong>Todo empieza<br />con una <em>buena web.</em></strong><button>Hablemos</button><div className="phone__card"><CheckCircle2 size={14} /> Disponible 24/7</div></div></div>
          <div className="floating-card"><CheckCircle2 size={18} /><span><small>Estado</small>Listo para crecer</span></div>
        </div>
      </div>
      <a href="#problema" className="scroll-hint" aria-label="Ir a la siguiente sección"><ArrowDown size={18} /></a>
    </section>
  );
}

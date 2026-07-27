import { ArrowDown, BadgeDollarSign, CheckCircle2, MousePointerClick } from "lucide-react";
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
          <div className="hero__commercial-promises">
            <div className="hero__promise"><span><BadgeDollarSign size={19} /></span><p>Planes accesibles para llevar tu negocio a la web <strong>sin resignar seguridad, calidad ni rendimiento.</strong></p></div>
            <div className="hero__promise"><span><CheckCircle2 size={19} /></span><p>Tu tranquilidad forma parte del proyecto: <strong>terminás de abonar cuando el resultado te gusta.</strong></p></div>
          </div>
          <div className="hero__actions"><Button href="#contacto">Quiero mi página web</Button><Button href="#planes" variant="secondary">Ver planes</Button></div>
          <p className="hero__note"><i aria-hidden="true" /><span>Tu negocio trabaja todos los días. Tu página web también debería hacerlo.</span></p>
        </div>

        <div className="showcase" aria-label="Representación de una página web adaptable a notebook y celular">
          <div className="showcase__glow" />
          <div className="laptop">
            <div className="laptop__top">
              <div className="browser-bar"><i /><i /><i /><span>tumarca.com</span></div>
              <div className="mock-nav"><b>marca.</b><span /><span /><button>Contactar</button></div>
              <div className="mock-hero">
                <small>Presencia digital que genera oportunidades</small>
                <strong>Tu negocio abierto<br /><em>las 24 horas.</em></strong>
                <p>Mostrá el valor de tu marca y convertí cada visita en una nueva consulta.</p>
                <button>Quiero más consultas <MousePointerClick size={12} /></button>
                <div className="mock-growth">
                  <small>Una web que impulsa tu negocio</small>
                  <div><b>+</b><span>Alcance</span></div>
                  <div><b>+</b><span>Consultas</span></div>
                  <div><b>+</b><span>Oportunidades</span></div>
                </div>
              </div>
              <div className="mock-stats">
                <span><img src="/icons8-amazon-web-services-48.png" alt="" /><b>AWS</b><small>Cloud</small></span>
                <span><img src="/icons8-cloudflare-48.png" alt="" /><b>Cloudflare</b><small>Protección</small></span>
                <span><img src="/icons8-candado-50.png" alt="" /><b>SSL/TLS</b><small>Seguridad</small></span>
                <span><img src="/icons8-búsqueda-50.png" alt="" /><b>SEO</b><small>Visibilidad</small></span>
              </div>
            </div>
          </div>

          <div className="phone">
            <div className="phone__speaker" />
            <div className="phone__content">
              <div className="phone__brand">marca.</div>
              <span>Disponible desde cualquier lugar</span>
              <strong>Tu negocio,<br />en la mano de <em>tus clientes.</em></strong>
              <button>Consultar ahora</button>
              <div className="phone__card"><CheckCircle2 size={14} /> Seguro y responsive</div>
            </div>
          </div>

          <div className="floating-card"><CheckCircle2 size={18} /><span><small>Infraestructura</small>Protegida y online</span></div>
        </div>
      </div>
      <a href="#problema" className="scroll-hint" aria-label="Ir a la siguiente sección"><ArrowDown size={18} /></a>
    </section>
  );
}

import { ArrowDown, ArrowUpRight, BadgeDollarSign, CheckCircle2 } from "lucide-react";
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
            <div className="hero__promise"><span><CheckCircle2 size={19} /></span><p>Tu tranquilidad forma parte del proyecto: <strong>terminás de abonar cuando el resultado cumple.</strong></p></div>
          </div>
          <div className="hero__actions"><Button href="#contacto">Quiero mi página web</Button><Button href="#planes" variant="secondary">Ver planes</Button></div>
          <p className="hero__note"><i aria-hidden="true" /><span>Tu negocio trabaja todos los días. Tu página web también debería hacerlo.</span></p>
        </div>

        <div className="showcase" aria-label="Invitación a conocer HB Digital Studio en Instagram junto a una representación mobile">
          <div className="showcase__glow" />
          <div className="social-showcase">
            <span className="social-showcase__eyebrow"><img src="/icons8-instagram-50.png" alt="" />Seguinos en Instagram</span>
            <h2>Conocé más de <em>nuestro trabajo.</em></h2>
            <p>Compartimos proyectos, ideas y procesos reales para ayudarte a imaginar todo lo que tu negocio puede lograr online.</p>
            <div className="social-showcase__topics"><span>Proyectos reales</span><span>Ideas para crecer</span><span>Detrás del desarrollo</span></div>
            <a className="social-showcase__button" href="https://www.instagram.com/hb.digitalstudio" target="_blank" rel="noreferrer">
              <img src="/icons8-instagram-50.png" alt="" /><span>Ver @hb.digitalstudio</span><ArrowUpRight size={17} />
            </a>
          </div>

          <div className="device-showcase">
            <div className="tablet">
              <span className="tablet__camera" />
              <div className="tablet__screen">
                <div className="tablet__brand"><b>TuMarca.</b><span><i /> creciendo online</span></div>
                <small>Una presencia que potencia tu negocio</small>
                <strong>Más oportunidades.<br /><em>Mejores resultados.</em></strong>
                <div className="tablet__metrics">
                  <span><b>+</b><small>Clientes</small></span>
                  <span><b>+</b><small>Alcance</small></span>
                  <span><b>+</b><small>Posicionamiento</small></span>
                  <span><b>+</b><small>Profesionalidad</small></span>
                </div>
                <p><CheckCircle2 size={10} /> Presencia segura, rápida y disponible</p>
              </div>
            </div>

            <div className="phone">
              <div className="phone__speaker" />
              <div className="phone__content">
                <div className="phone__brand"><b>TuMarca.</b><span><i /> online</span></div>
                <small className="phone__eyebrow">Tu negocio en cada pantalla</small>
                <strong>Más alcance.<br />Más <em>clientes.</em></strong>
                <p className="phone__copy">Disponible 24/7 para transformar visitas en consultas.</p>
                <button>Consultar ahora</button>
                <div className="phone__metrics"><span><b>+</b><small>Consultas</small></span><span><b>24/7</b><small>Disponible</small></span></div>
                <div className="phone__card"><CheckCircle2 size={14} /> Sitio seguro y responsive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#problema" className="scroll-hint" aria-label="Ir a la siguiente sección"><ArrowDown size={18} /></a>
    </section>
  );
}

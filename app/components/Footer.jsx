import CopyEmailButton from "./CopyEmailButton";

export default function Footer() {
  return (
    <footer className="footer"><div className="container footer__grid">
      <div className="footer__brand"><a className="brand brand--logo" href="#inicio" aria-label="HB Digital Studio, ir al inicio"><span className="brand__logo-viewport"><img src="/logohb.png" alt="" /></span></a><p>Desarrollo web y soluciones digitales para negocios que quieren crecer.</p></div>
      <div className="footer__links"><h3>Navegación</h3><a href="#servicios">Servicios</a><a href="#proceso">Cómo trabajamos</a><a href="#planes">Planes</a><a href="#preguntas">Preguntas frecuentes</a></div>
      <div className="footer__links"><h3>Contacto</h3><a href="https://www.instagram.com/hb.digitalstudio" target="_blank" rel="noreferrer"><img className="footer__contact-icon" src="/icons8-instagram-50.png" alt="" />Instagram</a><a href="https://wa.me/542494373738?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios." target="_blank" rel="noreferrer"><img className="footer__contact-icon" src="/icons8-whatsapp-50.png" alt="" />WhatsApp</a><CopyEmailButton compact imageIcon /></div>
    </div><div className="container footer__bottom"><span>© {new Date().getFullYear()} HB Digital Studio</span><span>Todos los derechos reservados.</span></div></footer>
  );
}

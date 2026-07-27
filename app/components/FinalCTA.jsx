import { Button } from "./ui";

export default function FinalCTA() {
  return (
    <section className="final-cta section" id="contacto"><div className="container"><div className="final-cta__panel reveal">
      <span className="eyebrow">Hagamos que suceda</span><h2>Tu próxima oportunidad puede comenzar con una búsqueda en internet</h2>
      <p>Construyamos una página que represente el verdadero valor de tu negocio y convierta visitas en nuevas oportunidades.</p>
      <div className="final-cta__actions"><Button href="https://wa.me/542494373738?text=Hola,%20quiero%20solicitar%20un%20presupuesto." iconSrc="/icons8-whatsapp-50.png">Solicitar presupuesto</Button><Button href="https://wa.me/542494373738?text=Hola,%20quiero%20contarles%20sobre%20mi%20proyecto." variant="light" iconSrc="/icons8-whatsapp-50.png">Hablar por WhatsApp</Button></div>
      <small>Contanos sobre tu proyecto y te ayudamos a definir la mejor solución.</small>
    </div></div></section>
  );
}

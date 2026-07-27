import { LockKeyhole, Search, Smartphone } from "lucide-react";
import { SectionHeading } from "./ui";

const badges = [
  { label: "AWS", image: "/icons8-amazon-web-services-48.png" },
  { label: "Cloudflare", image: "/icons8-cloudflare-48.png" },
  { label: "SSL/TLS", icon: LockKeyhole },
  { label: "Responsive", icon: Smartphone },
  { label: "SEO", icon: Search },
];

const details = [
  ["Infraestructura AWS", "Alojamiento sobre servicios cloud profesionales, escalables y confiables."],
  ["Protección Cloudflare", "Una capa adicional de seguridad, rendimiento y distribución de contenido."],
  ["Conexión segura", "HTTPS y certificado SSL/TLS para proteger la comunicación con el sitio."],
  ["Rendimiento optimizado", "Buenas prácticas para reducir tiempos de carga y mejorar la navegación."],
];

export default function TechnologySection() {
  return (
    <section className="technology section"><div className="container technology__grid">
      <div className="technology__copy reveal">
        <SectionHeading
          eyebrow="Tecnología e infraestructura"
          title="Tecnología profesional detrás de una experiencia simple"
          text="Tu página se desarrolla con herramientas modernas y se aloja sobre infraestructura cloud preparada para ofrecer velocidad, estabilidad y disponibilidad."
          light
        />
        <div className="technology__badges">
          {badges.map(({ label, image, icon: Icon }) => (
            <span key={label}>{image ? <img src={image} alt="" /> : <Icon size={17} />}{label}</span>
          ))}
        </div>
      </div>
      <div className="technology__details">
        {details.map(([title, text], index) => (
          <article className="tech-card reveal" key={title} style={{ "--delay": `${index * 70}ms` }}>
            <span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
          </article>
        ))}
      </div>
    </div></section>
  );
}

import { ArrowUpRight } from "lucide-react";

export function SectionHeading({ eyebrow, title, text, align = "left", light = false }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""} ${light ? "is-light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function Button({ href, children, variant = "primary", className = "", ariaLabel, iconSrc, showArrow = true }) {
  return (
    <a className={`button button--${variant} ${className}`} href={href} aria-label={ariaLabel}>
      {iconSrc && <img className="button__image-icon" src={iconSrc} alt="" aria-hidden="true" />}
      <span>{children}</span>
      {!iconSrc && showArrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </a>
  );
}

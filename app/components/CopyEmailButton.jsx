import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

const EMAIL_PARTS = ["hb1digitalstudio.tech", "gmail.com"];

function legacyCopy(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const success = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!success) throw new Error("No se pudo copiar");
}

export default function CopyEmailButton({ compact = false, imageIcon = false }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    const email = EMAIL_PARTS.join("@");
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        legacyCopy(email);
      }
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      legacyCopy(email);
      setCopied(true);
    }
  }

  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        className={`copy-email ${compact ? "copy-email--compact" : ""} ${copied ? "is-copied" : ""}`}
        onClick={copyEmail}
        aria-label={copied ? "Correo copiado al portapapeles" : "Copiar correo de HB Digital Studio"}
      >
        {copied ? <Check size={17} aria-hidden="true" /> : imageIcon ? <img className="copy-email__image-icon" src="/icons8-correo-50.png" alt="" /> : <Copy size={17} aria-hidden="true" />}
        <span>{copied ? "Email copiado" : compact ? "Copiar correo" : "Copiar email de contacto"}</span>
      </button>
      <span className="copy-email__status" aria-live="polite">{copied ? "Correo copiado al portapapeles." : ""}</span>
    </div>
  );
}

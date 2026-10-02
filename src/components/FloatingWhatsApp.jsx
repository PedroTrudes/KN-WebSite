import { messages, whatsappUrl } from "../data/site.js";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      data-whatsapp="geral"
      href={whatsappUrl(messages["geral"])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
    >
      <span>Vamos conversar?</span>
      <svg className="icon">
        <use href="#i-wa"></use>
      </svg>
    </a>
  );
}

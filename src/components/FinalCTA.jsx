import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <Reveal as="div" className="container">
        <p className="eyebrow">UM NOVO PROJETO COMEÇA AQUI</p>
        <h2 id="cta-title">
          Vamos dar forma
          <br />à sua <em>ideia?</em>
        </h2>
        <p>Uma conversa pode abrir novas possibilidades para o seu imóvel.</p>
        <a
          className="button button-dark"
          data-whatsapp="geral"
          href={whatsappUrl(messages["geral"])}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar meu orçamento{" "}
          <svg className="icon">
            <use href="#i-up"></use>
          </svg>
        </a>
      </Reveal>
      <span className="cta-watermark" aria-hidden="true">
        KN
      </span>
    </section>
  );
}
